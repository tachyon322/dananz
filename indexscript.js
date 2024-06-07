const burgerButton = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger-menu');
let isOpen = false

burgerButton.addEventListener('click' , () => {
    if(!isOpen){
        burgerMenu.style.display = 'block';
        isOpen = true
    }else{
        burgerMenu.style.display = 'none';
        isOpen = false
    }
});