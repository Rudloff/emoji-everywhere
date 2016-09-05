/*global twemoji, self*/
/*jslint browser: true, devel: true*/
if (twemoji === undefined) {
    console.error("Can't load Twemoji");
} else {
    twemoji.base = self.options.twemojiUrl;
    twemoji.parse(document.body);
}
