// store all function of a Worker
var WORKER_FUNCTIONS = [];
for (var i in Worker.prototype) {
  if (i === 'onmessage' || i === 'onerror') continue;
  WORKER_FUNCTIONS.push(i);
}

exports.fetch = function(load) {
  // create code string to be used in the worker
  // code loads the worker in load.address
  // when it is fineshed loading the worker post @@@LOADED@@@
  // note: the system.src.js and jspm.config.js can be located differently, not sure how to handle this
  var codeStr = [
    'importScripts("' + System.baseURL + 'jspm_packages/system.src.js");',
    'System.config({ baseURL: "' + System.baseURL + '" });',
    'importScripts("' + System.baseURL + 'jspm.config.js");',

    // Because this is async we need a worker shim to catch all messages, isn't there any way to do this sync?
    'System.import("' + load.address + '").then(function() {',
    '  self.postMessage("@@@LOADED@@@")',
    '});'
  ].join('\n');
  // convert string to url
  var blob = new Blob([codeStr]);
  var blobURL = self.URL.createObjectURL(blob);

  // because system js loads async it is possible messages
  // are send to the webworker before the worker is loaded
  // this shim catches all calls made to the worker and emits
  // then to the worker when it's done loading
  function WorkerShim() {
    // actual worker
    this._worker = new Worker(blobURL);
    // call stack
    this._stack = [];

    // passes onerror function from real worker to worker shim
    this._worker.onerror = (function(error) {
      if (this.onerror !== undefined) this.onerror(error);
    }).bind(this);

    // passes onmessage function from real worker to worker shim
    this._worker.onmessage = (function(event) {
      // ignore reserved calls
      if (event.data === '@@@LOADED@@@') return;
      if (this.onmessage !== undefined) this.onmessage(event);
    }).bind(this);

    // function called when webworker is loaded
    var init = (function(event) {
      // it is possible the worker emits messages before it emits @@@LOADED@@@
      // (this happens when the worker emits a postmessage right after it is initialized)
      if (event.data === '@@@LOADED@@@') {
        // remove the init event listener
        this._worker.removeEventListener('message', init);

        // pass all the calls in the stack to the actual worker and remove the stack
        for (var i = 0; i < this._stack.length; i ++) {
          var functionName = this._stack[i].functionName;
          var arguments = this._stack[i].arguments;

          this._worker[functionName].apply(this._worker, arguments);
        }
        delete this._stack;

        // replace all function of the shim with actual worker functions
        for (var i = 0; i < WORKER_FUNCTIONS.length; i ++) {
          var functionName = WORKER_FUNCTIONS[i];
          this[functionName] = this._worker[functionName];
        }
      } else {
        // this is little bit of a hack
        // this happens when the worker emits events before it knows it is loaded
        // search if addEventListener with type message is called
        // emit events on the given listener
        // note: there is one case this has some unexpected behaviour
        // when an event listener is added and removed before jspm is loaded the event is still emitted
        for (var i = 0; i < this._stack.length; i ++) {
          var functionName = this._stack[i].functionName;
          var type = this._stack[i].arguments[0];
          var listener = this._stack[i].arguments[1];
          if (functionName === 'addEventListener' && type === 'message') {
            listener.call(this._worker, event);
          }
        }
      }
    }).bind(this);

    // add the init event listener
    // this will be removed when SystemJS is finished loading
    this._worker.addEventListener('message', init);
  }
  // loop through all worker functions and set prototype of WorkerShim with said function
  // store all arguments and function name in stack when a function is called
  for (var i = 0; i < WORKER_FUNCTIONS.length; i ++) {
    (function() {
      var functionName = WORKER_FUNCTIONS[i];
      WorkerShim.prototype[functionName] = function() {
        this._stack.push({ functionName: functionName, arguments: arguments });
      };
    }());
  }

  load.metadata.worker = WorkerShim;

  return '';
}

exports.instantiate = function(load) {
  return load.metadata.worker;
};
