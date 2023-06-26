/* MENU */
var cont = 0
console.log(cont)
if (window.screen.availWidth < 1050) {
    var meuUl = document.getElementById('menu-ul')
    var menuAbrir = document.getElementById('hambur')
    var closeMenu = document.getElementById('close-menu')
    var textmenumobile1 = document.getElementById('text-menu-mobile-1')
    var textmenumobile2 = document.getElementById('text-menu-mobile-2')
    var nav = document.getElementById('nav')

    menuAbrir.addEventListener('click', function (e) {
        meuUl.style.left = '0%'
        menuAbrir.style.display = 'none'
        textmenumobile1.style.display = 'none'
        closeMenu.style.display = 'block'
        nav.style.background = '#ffff'
        textmenumobile2.style.display = 'block'
        cont = 1
        console.log(cont)
    });

    closeMenu.addEventListener('click', function (e) {
        meuUl.style.left = '-20000%'
        menuAbrir.style.display = 'block'
        closeMenu.style.display = 'none'
        textmenumobile1.style.display = 'block'
        nav.style.background = 'transparent'
        textmenumobile2.style.display = 'none'
        cont = 0
        console.log(cont)
    });
}

window.addEventListener('scroll', function () {
    // Obtenha o valor do scroll
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  

    var nav = document.getElementById('nav')
    var screenWidth = window.innerWidth;
    if (cont == 0) {
        if (screenWidth < 1050) {
            if (scrollTop < 100) {
                nav.style.backgroundColor = 'transparent'
                menuAbrir.style.color = '#fff'
                textmenumobile1.style.color = '#fff'
            } else {
                nav.style.backgroundColor = '#fff'
                menuAbrir.style.color = '#0b2244d7'
                textmenumobile1.style.color = '#0b2244d7'
            }
        }
    }
});