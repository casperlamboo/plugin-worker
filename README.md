# Plugin Worker
WebWorker plugin for [SystemJS](https://github.com/systemjs/systemjs)
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

#Run Example

Install

```npm install```

Go to example

```cd example/```

Start server (for instance `serve`). Or create production bundle

```npm run dist```

dist folder will be located in `example/dist`
