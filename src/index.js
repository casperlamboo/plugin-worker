// map is set to load plugin-dev in development and plugin-production in production
var plugin = require('./loader.js');

// because it doesn't seem possible to conditionally load either the
// production or development code as the entry point (main in package.json)
// we had to add this in between step.
if (plugin.locate !== undefined) exports.locate = plugin.locate;
if (plugin.fetch !== undefined) exports.fetch = plugin.fetch;
if (plugin.translate !== undefined) exports.translate = plugin.translate;
if (plugin.instantiate !== undefined) exports.instantiate = plugin.instantiate;
