// This is still a work in progress, it's just to show the direction i'm going
exports.fetch = function(load) {
  var builder = this.builder;
  var globalName = load.address.slice(load.address.lastIndexOf('/') + 1, load.address.lastIndexOf('.'));

  return builder.buildStatic(load.address, { globalName: globalName }).then(function(outFile) {
    load.metadata.sourceMap = outFile.sourceMap;
    return outFile.source;
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
