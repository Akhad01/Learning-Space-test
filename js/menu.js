const burger = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const menulinks = menu.querySelectorAll('.menu__item');

burger.addEventListener('click', () => {
    menu.classList.add('menu__list--active');
});

menulinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu__list--active');
    });
});

document.addEventListener('click', (event) => {
    if (!(event.target.closest('.menu__list') || event.target.closest('.menu__btn'))) {
        menu.classList.remove('menu__list--active');
    }
});