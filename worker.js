// map is set to load plugin-dev in development and plugin-production in production
var plugin = require('./plugin.js');

// re export all function from plugin (this is kinda lame)
// wanted to apply conditinal loading on the entry point of the plugin but that is not plausible
if (plugin.locate !== undefined) exports.locate = plugin.locate;
if (plugin.fetch !== undefined) exports.fetch = plugin.fetch;
if (plugin.translate !== undefined) exports.translate = plugin.translate;
if (plugin.instantiate !== undefined) exports.instantiate = plugin.instantiate;
