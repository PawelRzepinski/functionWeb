const burgerBtn = document.querySelector('.burger');
const lineTop = document.querySelector('.line--top');
const lineMiddle = document.querySelector('.line--middle');
const lineBottom = document.querySelector('.line--bottom');
const menu = document.querySelector('.menu__content');

console.log(menu);
// BURGER - animacje + menu visible
function burgerClick() {
    lineTop.classList.toggle('topAction');
    lineMiddle.classList.toggle('middleAction');
    lineBottom.classList.toggle('bottomAction');
    menu.classList.toggle('showMenu')
    console.log('click')
}





burgerBtn.addEventListener('click', burgerClick);
