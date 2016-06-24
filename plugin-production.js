// This is still a work in progress, it's just to show the direction i'm going

exports.fetch = function(load) {
  // THIS NEEDS TO BE REPLACED
  // the fetch function will return a transpiled code string
  // I want to use SystemJS Builder to create a sfx bundle from load.address
  // the output of the builder will be returned in this fetch function
  var workerCode = [
    'self.addEventListener("message", function(event) {',
    '  self.postMessage(event.data);',
    '}, false);'
  ].join('\n');

  return workerCode;
}

exports.translate = function(load) {
  // result of the builder will be in load

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
