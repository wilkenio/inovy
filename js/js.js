/* MENU */
if (window.screen.availWidth < 1050) {
    var meuUl = document.getElementById('menu-ul')
    var menuAbrir = document.getElementById('hambur')
    var closeMenu = document.getElementById('close-menu')

    menuAbrir.addEventListener('click', function (e) {
        meuUl.style.left = '0%'
        menuAbrir.style.display = 'none'
        closeMenu.style.display = 'block'
    });

    closeMenu.addEventListener('click', function (e) {
        meuUl.style.left = '-20000%'
        menuAbrir.style.display = 'block'
        closeMenu.style.display = 'none'
    });
}