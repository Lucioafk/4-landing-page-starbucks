const mobileBtn = document.querySelector('.btn-mobile');
const navegar = document.querySelector('#nav-links');
const icon = document.querySelector('.btn-mobile i');

mobileBtn.addEventListener ('click', () => {
    navegar.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');



})