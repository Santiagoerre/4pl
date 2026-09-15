// 1. MENÚ HAMBURGUESA (MÓVIL)

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });
}


// 2. FORMULARIO DE CONTACTO (SOLO EN contact.html)

const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (form && feedback) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const mensaje = document.getElementById('mensaje')?.value.trim() || '';

        if (!nombre || !email || !mensaje) {
            feedback.textContent = '⚠️ Por favor, completa todos los campos obligatorios.';
            feedback.className = 'form-feedback error';
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            feedback.textContent = '⚠️ Introduce un email válido (ej: nombre@empresa.com).';
            feedback.className = 'form-feedback error';
            return;
        }

        feedback.textContent = '📤 Enviando mensaje...';
        feedback.className = 'form-feedback';
        feedback.style.display = 'block';

        setTimeout(() => {
            feedback.textContent = '✅ ¡Mensaje enviado con éxito! Te responderemos en menos de 48h.';
            feedback.className = 'form-feedback exito';
            form.reset();
        }, 1500);
    });
}


// 3. DESTACAR ENLACE ACTIVO EN EL MENÚ (OPCIONAL)


const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});


function abrirModalLegal(tab) {
    document.getElementById('cogton-modal-legal').classList.add('active');
    cambiarTab(tab);
}

function cerrarModalLegal() {
    document.getElementById('cogton-modal-legal').classList.remove('active');
}

function cerrarModalLegalOverlay(event) {
    if (event.target.id === 'cogton-modal-legal') {
        cerrarModalLegal();
    }
}

function cambiarTab(tab) {
    document.getElementById('contenido-aviso').style.display = tab === 'aviso' ? 'block' : 'none';
    document.getElementById('contenido-privacidad').style.display = tab === 'privacidad' ? 'block' : 'none';
    document.getElementById('tab-aviso').classList.toggle('active', tab === 'aviso');
    document.getElementById('tab-privacidad').classList.toggle('active', tab === 'privacidad');
}