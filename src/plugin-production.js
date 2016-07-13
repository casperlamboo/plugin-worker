// This is still a work in progress, it's just to show the direction i'm going
var fs = require('fs');
var OUT_FILE = './worker-temp.js';

exports.fetch = function(load) {
  var builder = this.builder;
  return new Promise(function(resolve, reject) {
    builder.buildStatic(load.address, OUT_FILE).then(function() {
      fs.readFile(OUT_FILE, 'utf8', function(error, data) {
        fs.unlink(OUT_FILE);

        if (error) {
          reject(error);
          return;
        }

        resolve(data);
      });
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
    'export default const blobURL = self.URL.createObjectURL(blob);'
  ].join('\n');
};
