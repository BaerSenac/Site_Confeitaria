const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar_menu');

//Display Mobile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');    
};

menu.addEventListener('click', mobileMenu);