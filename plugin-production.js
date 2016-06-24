// This is still a work in progress, it's just to show the direction i'm going

exports.fetch = function(load) {
  // THIS IS DUMMY SOURCE CODE
  // I'd like to use SystemJS Builder to create a sfx bundle (from load.address)
  // and use that as output of this fetch function.
  // This way the worker's source is defined inline and doesn't necessarily require extra files.
  var workerCode = [
    'self.addEventListener("message", function(event) {',
    '  self.postMessage(event.data);',
    '}, false);'
  ].join('\n');

  return workerCode;
}

exports.translate = function(load) {
  // result of the builder will be in load.source

  load.metadata.format = 'esm';

  // return a code string that will
  // create a blob from the transpiled worker code
  // export a function that will initialize a worker with the blob
  return [
    'const codeStr = ' + JSON.stringify(load.source) + ';',
    'const blob = new Blob([codeStr]);',
    'const blobURL = self.URL.createObjectURL(blob);',

    'export default function() {',
    '  return new Worker(blobURL);',
    '}'
  ].join('\n');
};
