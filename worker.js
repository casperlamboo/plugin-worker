var createWorker = require('./createWorker.js');

exports.fetch = function(load) {
  var Worker = createWorker(load);

  load.metadata.worker = Worker;

  return '';
}

exports.instantiate = function(load) {
  return load.metadata.worker;
};
