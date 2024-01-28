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

// var tog = document.querySelector('.toggle');

// var body = document.querySelector('body');

// tog.onclick = function () {
//     tog.classList.toggle('active');
//     body.classList.toggle('active');
// }

var tog = document.querySelector('.toggle');
var body = document.querySelector('body');

window.onload = function () {
    var mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        tog.classList.add('active');
        body.classList.add('active');
    }
};

tog.onclick = function () {
    tog.classList.toggle('active');
    body.classList.toggle('active');

    if (body.classList.contains('active')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
};

ScrollReveal().reveal('.scroll-revealLeft', {
    origin: 'left',
    duration: 1000,
    interval: 200,
    easing: 'cubic-bezier(0.5,0,0,1)',
    distance: '40px'
});

ScrollReveal().reveal('.scroll-revealRight', {
    origin: 'right',
    duration: 2000,
    interval: 400,
    easing: 'cubic-bezier(0.5,0,0,1)',
    distance: '20px'
})

