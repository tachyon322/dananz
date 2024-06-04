const burgerButton = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger-menu');

burgerButton.addEventListener('click' , () => {

    if(burgerMenu.style.display === 'none'){
        burgerMenu.style.display = 'flex';
    }else{
        burgerMenu.style.display = 'none';
    }
});