window.addEventListener('scroll', onScroll);

onScroll();

/*Gerencia os Scrolls da página*/
function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();
}

/*Mostrar o navigation ao mostrar o scroll*/
function showNavOnScroll () {
    if(scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }
}

/*Mostrar o botão back to top ao rolar a página para baixo*/
function showBackToTopButtonOnScroll(){
    if(scrollY > 400) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded');
}

function closeMenu(){
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin:'top',
    distance:'30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card
#about,
#about header,
#about .content`);