/*global twemoji, browser*/
/*jslint browser: true*/
if (typeof twemoji === "object") {
    twemoji.base = browser.extension.getURL('data/components/twemoji/');
    twemoji.parse(
        document.body,
        {
            folder: 'svg',
            ext: '.svg'
        }
    );
} else {
    throw "Can't load Twemoji";
}
