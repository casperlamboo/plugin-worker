// listen to message and sends it back
self.addEventListener('message', (event) => {
  self.postMessage(event.data);
}, false);
