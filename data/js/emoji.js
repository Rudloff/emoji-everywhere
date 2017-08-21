/*global twemoji, browser*/
/*jslint browser: true*/
if (typeof twemoji === "object") {
    twemoji.base = browser.extension.getURL('data/components/twemoji/2/');
    twemoji.parse(document.body);
} else {
    throw "Can't load Twemoji";
}
