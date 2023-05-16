const burger = document.querySelector('.header__icon');
const menu = document.querySelector('.nav');
const body = document.body;
const headerBody = document.querySelector('.header__body');
const greenButton = document.querySelector('.green-button');

burger.addEventListener('click', function(){
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
    greenButton.classList.toggle('_active');
});