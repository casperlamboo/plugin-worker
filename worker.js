// map is set to load plugin-dev in development and plugin-production in production
var plugin = require('./plugin.js');

if (plugin.locate !== undefined) exports.locate = plugin.locate;
if (plugin.fetch !== undefined) exports.fetch = plugin.fetch;
if (plugin.translate !== undefined) exports.translate = plugin.translate;
if (plugin.instantiate !== undefined) exports.instantiate = plugin.instantiate;
