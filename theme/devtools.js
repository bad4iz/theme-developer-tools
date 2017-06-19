/**
 * Created by bad4iz on 11.04.2017.
 */
var x = new XMLHttpRequest();
x.open('GET', 'style.css');
x.onload = function() {
    chrome.devtools.panels.applyStyleSheet(x.responseText);
};
x.send();

aletr('sadfasdf');

chrome.bookmarks.create({'parentId': bookmarkBar.id,
                               'title': 'Extension bookmarks'},
                              function(newFolder) {
        console.log("added folder: " + newFolder.title);
      });

chrome.bookmarks.create({'parentId': extensionsFolderId,
                               'title': 'Extensions doc',
                               'url': 'http://code.google.com/chrome/extensions'});