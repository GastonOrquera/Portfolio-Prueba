var hamburger = document.querySelector('.hamburger');

var nav = document.querySelector('nav');

var navLinks = document.querySelectorAll('nav a');

hamburger.onclick = function () {
    nav.classList.toggle('active');
}

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        nav.classList.remove('active');
    });
});

var tog = document.querySelector('.toggle');

var body = document.querySelector('body');


var imgMain = document.querySelector('.imgMain');

var imgMain2 = document.querySelector('.imgMain2');


tog.onclick = function () {
    tog.classList.toggle('active');
    body.classList.toggle('active');
    imgMain.classList.toggle('active');
}

