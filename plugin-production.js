exports.fetch = function(load) {
  var workerCode = [
    'self.addEventListener("message", function(event) {',
    '  self.postMessage(event.data);',
    '}, false);'
  ].join('\n');

  return workerCode;
}

exports.translate = function(load) {
  load.metadata.format = 'esm';  

  return [
    'const codeStr = ' + JSON.stringify(load.source) + ';',
    'const blob = new Blob([codeStr]);',
    'const blobURL = self.URL.createObjectURL(blob);',

    'export default function() {',
    '  return new Worker(blobURL);',
    '}'
  ].join('\n');
};
