// Inicializar partículas
if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00ff9d" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00b7ff",
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
}

// Cambiar navbar al hacer scroll
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Animaciones al aparecer elementos
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Para las barras de habilidades
            if (entry.target.classList.contains('skill-progress')) {
                const width = entry.target.getAttribute('data-percent');
                entry.target.style.width = width;
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos comunes
document.querySelectorAll('.service-card, .project-card, .community-card, .about-img, .about-content, .contact-info, .contact-form').forEach(element => {
    observer.observe(element);
});

// Observar barras de habilidades
document.querySelectorAll('.skill-progress').forEach(progress => {
    observer.observe(progress);
});

// Animación de botones al pasar el mouse
document.querySelectorAll('.btn, .community-btn, .submit-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Validación del formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;

        // Validar nombre
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (!name.value.trim()) {
            nameError.style.display = 'block';
            valid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Validar email
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value)) {
            emailError.style.display = 'block';
            valid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Validar mensaje
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (!message.value.trim()) {
            messageError.style.display = 'block';
            valid = false;
        } else {
            messageError.style.display = 'none';
        }

        if (valid) {
            // Aquí iría la lógica para enviar el formulario
            alert('¡Formulario enviado con éxito!');
            contactForm.reset();
        }
    });
}