// load worker using worker plugin
import Worker from './worker.js!worker';

// path to worker is already given in import
const myWorker = new Worker();

// listen to webworker message
myWorker.addEventListener('message', (event) => {
  console.log(`Worker said: ${event.data}`);
});

// Send message to the worker
myWorker.postMessage('Hello World');
