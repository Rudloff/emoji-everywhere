/*global twemoji, self*/
/*jslint browser: true*/
if (typeof twemoji == 'undefined') {
    console.error("Can't load Twemoji");
} else {
    twemoji.base = self.options.twemojiUrl;
    twemoji.parse(document.body);
}
