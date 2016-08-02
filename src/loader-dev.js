exports.fetch = function(load) {
  // create code string to be used in the worker
  // code loads the worker in load.address
  // note: the system.src.js and jspm.config.js can be located differently, not sure how to handle this
  // when it is finished loading the worker post @@@LOADED@@@
  var codeStr = [
    'importScripts("' + System.baseURL + 'jspm_packages/system.src.js");',
    'System.config(' + JSON.stringify(System.getConfig()) + ');',

    // Because this is async we need a worker shim to catch all messages, isn't there any way to do this sync?
    'System.import("' + load.address + '").then(function() {',
    '  self.postMessage("@@@LOADED@@@")',
    '}).catch(function(error) {',
    '  console.warn(error);',
    '});'
  ].join('\n');
  // convert string to url
  var blob = new Blob([codeStr]);
  var blobURL = self.URL.createObjectURL(blob);

  load.metadata.blobURL = blobURL;

  return '';
};

exports.instantiate = function(load) {
  return load.metadata.blobURL;
};
