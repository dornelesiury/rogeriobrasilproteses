const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = items.length;
let timer;

function update(direction) {

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if (direction > 0) {
        active = active + 1

        if (active === total) {
            active = 0
        }
    } else if (direction < 0) {
        active = active - 1

        if (active < 0) {
            active = total - 1
        }
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')
    
}

function startAutoScroll() {
    clearInterval(timer);
    timer = setInterval(() => {
        update(1);
    }, 5000);
}

startAutoScroll();

prevButton.addEventListener('click', function () {
    update(-1);
    startAutoScroll(); // Reseta o timer ao interagir manualmente
})

nextButton.addEventListener('click', function () {
    update(1);
    startAutoScroll(); // Reseta o timer ao interagir manualmente
})

// Lógica do Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

const closeMenu = () => {
    navMenu.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
};

menuToggle.addEventListener('click', (event) => {
    navMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
    event.stopPropagation(); // Impede que o clique no botão se propague para o document e feche o menu imediatamente
});

// Fecha o menu ao clicar em qualquer link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    // Se o menu estiver aberto e o clique não foi dentro do navMenu nem no menuToggle
    if (navMenu.classList.contains('active') && !navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
    }
});

// Lógica do Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Fecha o menu ao clicar em qualquer link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-xmark');
    });
});