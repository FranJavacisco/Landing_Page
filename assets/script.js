// Inicialización de la biblioteca AOS para animaciones de scroll
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Elementos DOM
const chat = {
    widget: document.querySelector('.chat-widget'),
    toggle: document.getElementById('chat-toggle'),
    container: document.querySelector('.chat-container'),
    closeBtn: document.getElementById('chat-close'),
    input: document.querySelector('.chat-container input'),
    messages: document.querySelector('.chat-messages')
};

const modal = {
    container: document.getElementById('offer-modal'),
    closeBtn: document.querySelector('.modal-close'),
    shown: false
};

const nav = document.querySelector('nav');
const floatingCTA = document.querySelector('.floating-cta');

// Control de navegación sticky
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Navegación sticky con efecto de ocultamiento
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;

    // Mostrar/ocultar CTA flotante
    if (currentScroll > 300) {
        floatingCTA.style.transform = 'translate(-50%, 0)';
    } else {
        floatingCTA.style.transform = 'translate(-50%, 100px)';
    }
});

// Funcionalidad del Chat
class ChatWidget {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Toggle del chat
        chat.toggle.addEventListener('click', () => this.toggleChat());
        chat.closeBtn.addEventListener('click', () => this.toggleChat());

        // Envío de mensajes
        chat.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && chat.input.value.trim()) {
                this.sendMessage(chat.input.value.trim());
                chat.input.value = '';
            }
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        chat.container.hidden = !this.isOpen;
    }

    sendMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message user-message';
        messageElement.textContent = text;
        chat.messages.appendChild(messageElement);
        chat.messages.scrollTop = chat.messages.scrollHeight;

        // Simular respuesta automática
        setTimeout(() => {
            const response = document.createElement('div');
            response.className = 'message bot-message';
            response.textContent = '¡Gracias por tu mensaje! Un agente se pondrá en contacto contigo pronto.';
            chat.messages.appendChild(response);
            chat.messages.scrollTop = chat.messages.scrollHeight;
        }, 1000);
    }
}





// Funcionalidad del Modal de Oferta

// Funcionalidad del Modal de Oferta
class OfferModal {
    constructor() {
        this.modal = document.getElementById('offer-modal');
        this.closeBtn = document.querySelector('.modal-close');
        this.modalContent = document.querySelector('.modal-content');
        this.setupEventListeners();
        this.checkShowModal();
    }

    setupEventListeners() {
        // Cierre al hacer clic en el botón X
        this.closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.hideModal();
        });

        // Cierre al hacer clic fuera del modal
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });

        // Prevenir que los clics dentro del contenido cierren el modal
        this.modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Cerrar con la tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.hidden) {
                this.hideModal();
            }
        });
    }

    showModal() {
        if (!localStorage.getItem('modalShown')) {
            this.modal.hidden = false;
            this.modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Previene el scroll del body
            localStorage.setItem('modalShown', 'true');
        }
    }

    hideModal() {
        this.modal.style.display = 'none';
        this.modal.hidden = true;
        document.body.style.overflow = ''; // Restaura el scroll del body
    }

    checkShowModal() {
        setTimeout(() => this.showModal(), 5000);
    }
}


// Parallax Effect
class ParallaxEffect {
    constructor() {
        this.setupParallax();
    }

    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.parallax').forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// Formulario de Contacto
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(this.form);
        
        // Simulación de envío de datos
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        setTimeout(() => {
            // Simular respuesta exitosa
            submitButton.textContent = '¡Enviado!';
            this.form.reset();
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        }, 1500);
    }
}

// Microinteracciones
class Microinteractions {
    constructor() {
        this.setupHoverEffects();
    }

    setupHoverEffects() {
        // Efecto hover en las feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                const icon = e.currentTarget.querySelector('i');
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            });

            card.addEventListener('mouseleave', (e) => {
                const icon = e.currentTarget.querySelector('i');
                icon.style.transform = 'scale(1) rotate(0)';
            });
        });

        // Efecto hover en los botones CTA
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
            });

            button.addEventListener('mouseleave', (e) => {
                e.currentTarget.style.transform = 'scale(1)';
            });
        });
    }
}

// Smooth Scroll
class SmoothScroll {
    constructor() {
        this.setupSmoothScroll();
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Inicialización de todas las funcionalidades
document.addEventListener('DOMContentLoaded', () => {
    new ChatWidget();
    new OfferModal();
    new ParallaxEffect();
    new ContactForm();
    new Microinteractions();
    new SmoothScroll();

    // Estilos adicionales para el chat
    const style = document.createElement('style');
    style.textContent = `
        .message {
            padding: 10px;
            margin: 5px;
            border-radius: 10px;
            max-width: 80%;
        }
        .user-message {
            background: #e3f2fd;
            margin-left: auto;
        }
        .bot-message {
            background: #f5f5f5;
            margin-right: auto;
        }
        .chat-messages {
            padding: 10px;
            height: 300px;
            overflow-y: auto;
        }
        .chat-header {
            padding: 10px;
            background: var(--primary-color);
            color: white;
            border-radius: 10px 10px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    `;
    document.head.appendChild(style);
});