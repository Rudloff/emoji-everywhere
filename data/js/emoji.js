/*global twemoji*/
/*jslint browser: true, devel: true*/
if (twemoji === undefined) {
  console.error("Can't load Twemoji");
} else {
  twemoji.base = browser.extension.getURL('data/components/twemoji/2/');
  twemoji.parse(document.body);
}
