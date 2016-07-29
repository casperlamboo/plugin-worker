// This is still a work in progress, it's just to show the direction i'm going
var fs = require('fs');
var OUT_FILE = './worker-temp.js';

exports.fetch = function(load) {
  var builder = this.builder;
  return new Promise(function(resolve, reject) {
    builder.buildStatic(load.address, OUT_FILE).then(function(outFile) {
      fs.unlink(OUT_FILE);

      resolve(outFile.source);
    });
  });
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
    'export default blobURL;'
  ].join('\n');
};
