// map is set to load plugin-dev in development and plugin-production in production
var plugin = require('./plugin.js');

exports.locate = plugin.locate;
exports.fetch = plugin.fetch;
exports.translate = plugin.translate;
exports.instantiate = plugin.instantiate;
