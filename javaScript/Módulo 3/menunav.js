function toggleMenu(){
    const areaMenu = document.querySelector('#menu-area');

    areaMenu.classList.toggle('menu-opener')
}


const menu = document.querySelector('.menu');
menu.addEventListener('click', toggleMenu);