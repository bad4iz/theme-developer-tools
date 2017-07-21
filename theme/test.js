function sssd() {

    var cards = document.querySelectorAll('.list-card');

    cards.forEach(card => {
        var tmp = card.querySelector('.icon-checklist');
        var proc = 0;
        if (tmp) {
            if (tmp.nextSibling) {
                badge = tmp.nextSibling.textContent.split("/")
                proc = badge[0] ? badge[0] / badge[1] * 100 : 0;
            }
            console.log(proc);
        }
        card.innerHTML += '<div class="scrum" style="background-color:rgb(75, 191, 107);width: ' + proc + '%;position: absolute;top: 0px;left: 0px;height: 100%;opacity: 0.2;z-index: -1;background: rgb(55, 158, 90);"></div>'
    });
}

// setInterval(sssd, 10000);

console.log('включился 3');

// chrome.bookmarks.create({'parentId': bookmarkBar.id,
//                                'title': 'Extension bookmarks'},
//                               function(newFolder) {
//         console.log("added folder: " + newFolder.title);
//       });

// chrome.bookmarks.create({'parentId': extensionsFolderId,
//                                'title': 'Extensions doc',
//                                'url': 'http://code.google.com/chrome/extensions'});

//
// badges.forEach(badge=>{
//     badge.style.border='1px solid #dcdcdc';
// badge.style.boxShadow='1px 1px 1px';
// }
// );

let lists = document.querySelectorAll('.js-list.list-wrapper');
console.log(lists);
lists.forEach(list => {
    let str = '';
    let as = list.querySelectorAll('.list-card-title.js-card-name');

    as.forEach(item => {
        str += (item.innerText.split(String.fromCharCode(55356, 57157)).length > 1) ? item.innerText.split(String.fromCharCode(55356, 57157))[0] : 0
    });
    let sum = 0;
    str.split(' ').forEach(it => {
        console.log
        sum += +it ? +it : 0;
    });
    console.log(sum);
    let el = list.querySelector('.list-header-name.mod-list-name.js-list-name-input');
    let text = el.defaultValue;
    console.log(text);
   el.innerText = text  + ' ' + sum+ ' ' + String.fromCharCode(55356, 57157) ;

});