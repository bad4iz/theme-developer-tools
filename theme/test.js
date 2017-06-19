function sssd() {
    
var cards = document.querySelectorAll('.list-card');

cards.forEach(card=> {
    var tmp = card.querySelector('.icon-checklist');
var proc = 0;
if (tmp) {
    if (tmp.nextSibling) {
        badge = tmp.nextSibling.textContent.split("/")
        proc = badge[0] ? badge[0]/badge[1]*100 : 0;
    }
        console.log(proc);
}
card.innerHTML += '<div class="scrum" style="background-color:rgb(75, 191, 107);width: ' + proc + '%;position: absolute;top: 0px;left: 0px;height: 100%;opacity: 0.2;z-index: -1;background: rgb(55, 158, 90);"></div>'
});
}

setInterval(sssd, 10000);
