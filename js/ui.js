const header = document.getElementById('mainHeader');
const scrollThreshold = 200;

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
});


const navToggle = document.querySelector('.site-nav__hamburger');
const navMenu = document.querySelector('.site-nav__menu');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('open');
})


//vado a creare la variabile per rendere l'hb trovabile
const body = document.body;
const imgHamburger = document.getElementById("sitemenu-nav");
const elementClicked = document.querySelector('.site-nav__hamburger');
//vado a creare una variabile per fare classList dentro il menu
const menu = document.querySelector('.site-nav__menu');

//crea altra variabile per chiudere il menu se clicco le voci del menu
const menuItems = document.querySelectorAll('.site-nav__menu a');

imgHamburger.addEventListener('click', () => {
    imgHamburger.classList.add('site-nav__hamburger--closed');
})

//toggle del menu hamburger
elementClicked.addEventListener('click', () => {
    menu.classList.toggle('site-nav__menu--open');
    elementClicked.classList.toggle('site-nav__hamburger--closed');
});

//chiudi il menu quando una voce verrà cliccata
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('site-nav__menu--open');
    });
});


// fade in animazione

document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in-element');

    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Percentage of target element visible in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optionally, unobserve the element once it has faded in
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, options);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.slide-in-element');

    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Percentage of target element visible in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optionally, unobserve the element once it has faded in
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, options);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

