# plugin-worker
WebWorker plugin for SystemJS
# Usage
Install the plugin

```jspm install worker=github:casperlamboo/plugin-worker```

Load a worker

```javascript
import Worker from './worker.js!worker';

// API differs little bit from regular Worker
// path to worker is already given in the import
const worker = new Worker();
worker.postmessage('hello world');
```

Note: this plugin is still a work in progress, this can only be used in development; the production part of the plugin is not finished.
