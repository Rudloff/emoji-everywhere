/*global require*/
var self = require('sdk/self');
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
    include: '*',
    contentScriptFile: [self.data.url('components/twemoji/2/twemoji.min.js'), self.data.url('js/emoji.js')],
    contentScriptOptions: {
        twemojiUrl: self.data.url('components/twemoji/2/')
    },
    contentStyleFile: self.data.url('css/emoji.css')
});
