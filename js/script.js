// Selecionando elementos do menu Mobile
const menuBtn = document.querySelector('#menu');
const closeMenuBtn = document.querySelector('#close-menu');
const mobileNavbar = document.querySelector('#mobile-navbar');
const mobileLinks = document.querySelectorAll('#mobile-navbar a');

// Selecionar os elementos dos slides
const slides = document.querySelectorAll('.banner');
const dots = document.querySelectorAll('.dot');
let slideIndex = 1;

function showSlides() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }

    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 3000);
}

// Ativar menu mobile
menuBtn.addEventListener('click', () => {
    mobileNavbar.classList.add('menu-active');
    document.body.style.overflow = 'hidden'; // Previne rolagem quando menu está aberto
});

// Desativar menu mobile
closeMenuBtn.addEventListener('click', () => {
    mobileNavbar.classList.remove('menu-active');
    document.body.style.overflow = ''; // Restaura rolagem
});

// Fechar menu ao clicar em qualquer link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNavbar.classList.remove('menu-active');
        document.body.style.overflow = '';
    });
});

// Inicialização do slides
showSlides();