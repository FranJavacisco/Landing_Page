Funcionalidades de Landing Page en JavaScript
Este repositorio contiene un proyecto de JavaScript que implementa una landing page interactiva y altamente optimizada, diseñada para ofrecer una experiencia de usuario atractiva y dinámica. El código utiliza enfoques modernos, con una estructura orientada a objetos y modular para facilitar su mantenimiento y extensibilidad. A continuación, se detallan las funcionalidades principales:

Características
1. Animaciones de Scroll
Integración con la biblioteca AOS para agregar animaciones suaves al desplazarse.
Configuración personalizable de efectos y duraciones.
2. Chat Widget
Funcionalidad completa:
Apertura y cierre del chat con animaciones.
Sistema de mensajería simulado para interacciones básicas.
Respuestas automáticas para mejorar la experiencia del usuario.
Interfaz de usuario estilizada con diseño moderno.
3. Modal de Oferta
Aparece automáticamente después de 5 segundos en la primera visita (solo una vez por sesión).
Opciones de cierre mejoradas:
Botón de cierre (X).
Clic fuera del modal.
Presionando la tecla ESC.
Prevención de cierre accidental al interactuar con el contenido interno.
Manejo eficiente del scroll del body para bloquearlo al abrir y restaurarlo al cerrar.
Estilos y transiciones optimizados, con efectos hover y posicionamiento mejorado.
4. Navegación
Barra de navegación con efecto sticky que permanece visible al desplazarse hacia arriba.
Ocultamiento automático al hacer scroll hacia abajo.
Smooth scroll en los enlaces internos para una navegación fluida.
5. CTA Flotante
Aparición y desaparición controlada por la posición del scroll.
Animaciones suaves que garantizan una transición visual agradable.
6. Efectos Parallax
Implementación de efectos de profundidad al hacer scroll.
Velocidad y comportamiento configurables para cada elemento.
7. Formulario de Contacto
Simulación del proceso de envío con feedback visual para el usuario.
Validación básica de campos para evitar datos incompletos.
Diseño limpio e intuitivo.
8. Microinteracciones
Efectos hover en tarjetas de características.
Animaciones atractivas en los botones de llamada a la acción (CTA).
Transiciones suaves en todos los elementos interactivos.
9. Optimización del Código
Uso de ES6+ para mayor eficiencia y legibilidad:
Clases y módulos.
Gestión eficiente de eventos para reducir el impacto en el rendimiento.
Animaciones optimizadas para navegadores modernos.
Comentarios explicativos para facilitar la comprensión y modificación.
Organización del Código
Encapsulación: Cada funcionalidad está implementada en su propia clase.
Modularidad: Facilita agregar o modificar características específicas.
Mantenibilidad: Estructura clara que permite una rápida identificación de problemas y mejoras.
Mejora del Modal
Gestión del estado visible/oculto:
Uso de display: none/flex junto con transiciones suaves.
Control del atributo hidden para accesibilidad.
Prevención de problemas de eventos:
Uso adecuado de stopPropagation() para evitar propagación no deseada.
Cómo Contribuir
Abre un pull request con mejoras, sugerencias o nuevas funcionalidades.
Reporta errores o problemas en la sección de Issues.
Instalación
Clona este repositorio:
bash
Copiar código
git clone https://github.com/tuusuario/landing-page-js.git
Abre el archivo index.html en tu navegador para probar las funcionalidades.
Este proyecto está diseñado para mostrar las mejores prácticas en el desarrollo de interfaces web dinámicas y funcionales. Si tienes alguna sugerencia o pregunta, ¡no dudes en abrir un issue o contactarme!
