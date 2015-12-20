/*global require*/
var self = require('sdk/self');
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
    include: '*',
    contentScriptFile: [self.data.url('components/twemoji/twemoji.min.js'), self.data.url('js/emoji.js')],
    contentStyleFile: self.data.url('css/emoji.css')
});
