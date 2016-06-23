// store all function of a Worker
var WORKER_FUNCTIONS = [];
for (var i in Worker.prototype) {
  if (i === 'onmessage' || i === 'onerror') continue;
  WORKER_FUNCTIONS.push(i);
}

function createWorker(load) {
  var codeStr = [
    'importScripts("' + System.baseURL + 'jspm_packages/system.src.js");',
    'System.config({ baseURL: "' + System.baseURL + '" });',
    'importScripts("' + System.baseURL + 'jspm.config.js");',
    '',
    'System.import("' + load.address + '").then(function() {',
    '  self.postMessage("@@@LOADED@@@")',
    '});'
  ].join('\n');
  var blob = new Blob([codeStr]);
  var blobURL = self.URL.createObjectURL(blob);

  function WorkerShim() {
    this._worker = new Worker(blobURL);
    this._stack = [];

    this._worker.onerror = (function(error) {
      if (this.onerror !== undefined) this.onerror(error);
    }).bind(this);

    this._worker.onmessage = (function(event) {
      if (event.data === '@@@LOADED@@@') return;
      if (this.onmessage !== undefined) this.onmessage(event);
    }).bind(this);

    var init = (function(event) {
      if (event.data === '@@@LOADED@@@') {
        this._worker.removeEventListener('message', init);

        for (var i = 0; i < this._stack.length; i ++) {
          var functionName = this._stack[i].functionName;
          var arguments = this._stack[i].arguments;

          this._worker[functionName].apply(this._worker, arguments);
        }
        delete this._stack;

        for (var i = 0; i < WORKER_FUNCTIONS.length; i ++) {
          var functionName = WORKER_FUNCTIONS[i];
          this[functionName] = this._worker[functionName];
        }
      } else {
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

    this._worker.addEventListener('message', init);
  }
  for (var i = 0; i < WORKER_FUNCTIONS.length; i ++) {
    (function() {
      var functionName = WORKER_FUNCTIONS[i];
      WorkerShim.prototype[functionName] = function() {
        this._stack.push({ functionName: functionName, arguments: arguments });
      };
    }());
  }

  return WorkerShim;
}

module.exports = createWorker;
