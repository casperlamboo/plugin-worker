// load worker using ./webworker.js
import workerSource from './worker.js!worker';
import Worker from 'worker/WorkerShim';

// path to worker is already given in import
const myWorker = new Worker(workerSource);

// listen to webworker message
myWorker.addEventListener('message', (event) => {
  console.log(`Worker said: ${event.data}`);
});

// Send message to the worker
myWorker.postMessage('Hello World');
