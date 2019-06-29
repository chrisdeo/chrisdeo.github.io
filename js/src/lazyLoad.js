let visualHeight = document.documentElement.clientHeight;
let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

let amendImg = document.getElementsByTagName('img')[0];

function lazyload() {
    if (amendImg.offsetTop < visualHeight + scrollTop) {
        if (!amendImg.src) {
            amendImg.src = amendImg.getAttribute('data-src');
        }
    }
}

window.onscroll = lazyload;
