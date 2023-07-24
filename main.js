const btnMenu = document.getElementById('menu');
const menuClose = document.querySelector('#menuClose');
const opacity = document.querySelector('.opacity');
const navMobile = document.querySelector('.navClose');

btnMenu.addEventListener('click', showMenuMobile);

function showMenuMobile(){
    opacity.classList.remove('inactive');
    navMobile.classList.remove('inactive');
}

menuClose.addEventListener('click',closeMenuMobile);

function closeMenuMobile(){
    opacity.classList.add('inactive');
    navMobile.classList.add('inactive');
}