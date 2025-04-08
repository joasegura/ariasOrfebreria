// Smooth Scroll
document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Smooth scroll al top
document.querySelector('.navbar-brand').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// Efecto hover para items de galería
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mousemove', function(e) {
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;
        this.style.transform = `perspective(1000px) rotateX(${(y - this.offsetHeight/2)/20}deg) rotateY(${-(x - this.offsetWidth/2)/20}deg)`;
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Inicializar Masonry para la galería
const masonry = new Masonry(document.querySelector('.gallery-grid'), {
    itemSelector: '.col',
    percentPosition: true
});

// Modal de imágenes
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', function() {
        document.querySelector('.modal-img').src = this.src;
    });
});

// Scrollspy mejorado
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.hash === `#${id}`) {
                    link.classList.add('active');
                    history.replaceState(null, null, `#${id}`);
                }
            });
        }
    });
});

// Efecto de carga suave
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Ajuste dinámico del margen superior
window.addEventListener('resize', adjustCarouselMargin);
window.addEventListener('load', adjustCarouselMargin);

function adjustCarouselMargin() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    document.querySelector('header').style.marginTop = `${navbarHeight}px`;
}

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Activar elementos del navbar al scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            const currentId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.href.includes(currentId)) {
                    link.classList.add('active');
                }
            });
        }
    });
});