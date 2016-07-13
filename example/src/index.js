// load worker using ./webworker.js
import MyWorker from './worker.js!worker';

// path to worker is already given in import
const myWorker = new MyWorker();

// listen to webworker message
myWorker.addEventListener('message', (event) => {
  console.log(`Worker said: ${event.data}`);
}, false);

// Send message to the worker
myWorker.postMessage('Hello World');
