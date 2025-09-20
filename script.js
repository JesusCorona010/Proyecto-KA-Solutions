// Crear partículas animadas
function createParticles() {
  const container = document.getElementById("particles");
  const particleCount = 100;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Tamaño aleatorio de partícula
    const size = Math.random() * 4 + 1;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    // Posición inicial aleatoria
    particle.style.left = Math.random() * 100 + "vw";

    // Duración de animación aleatoria
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";

    container.appendChild(particle);
  }
}

// Efectos de hover para botones
function initializeButtonEffects() {
  document
    .querySelectorAll(".cta-button, .section-button")
    .forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px)";
        this.style.boxShadow = "0 10px 30px rgba(0, 212, 255, 0.3)";
      });

      button.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "none";
      });
    });
}

// Smooth scroll para navegación
function initializeNavigation() {
  document
    .querySelectorAll(".nav-menu li, .cta-button, .section-button")
    .forEach((item) => {
      item.addEventListener("click", function () {
        // Aquí puedes agregar lógica de navegación específica
        console.log("Navegando a:", this.textContent);

        // Ejemplo de scroll suave a secciones
        if (
          this.classList.contains("cta-button") ||
          this.classList.contains("section-button")
        ) {
          // Scroll a la segunda sección
          document.querySelector(".second-section").scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
}

// Efecto parallax sutil en scroll
function initializeParallaxEffect() {
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const particles = document.querySelectorAll(".particle");

    particles.forEach((particle, index) => {
      const speed = ((index % 5) + 1) * 0.1;
      particle.style.transform = `translateY(${scrolled * speed}px)`;
    });

    // Efecto parallax en el hero content
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
}

// Animación de typing para el terminal
function animateTerminalText() {
  const codeLines = document.querySelectorAll(".code-line");

  codeLines.forEach((line, index) => {
    setTimeout(
      () => {
        line.style.opacity = "1";
      },
      (index + 1) * 500
    );
  });
}

// Intersection Observer para animaciones al hacer scroll
function initializeScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("second-section")) {
            animateTerminalText();
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observar la segunda sección
  const secondSection = document.querySelector(".second-section");
  if (secondSection) {
    observer.observe(secondSection);
  }
}

// Función para cambiar indicadores activos
function updateIndicators() {
  const indicators = document.querySelectorAll(".indicator");
  let currentActive = 0;

  setInterval(() => {
    // Remover clase active de todos
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // Agregar clase active al siguiente
    indicators[currentActive].classList.add("active");

    // Incrementar contador
    currentActive = (currentActive + 1) % indicators.length;
  }, 3000); // Cambiar cada 3 segundos
}

// Función para manejar el menú responsive
function initializeResponsiveMenu() {
  // Aquí puedes agregar lógica para un menú hamburguesa en móviles
  const navMenu = document.querySelector(".nav-menu");

  // Detectar clicks fuera del menú para cerrarlo (si implementas menú móvil)
  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target)) {
      // Cerrar menú si está abierto
    }
  });
}

// Event Listeners para cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar todas las funciones
  createParticles();
  initializeButtonEffects();
  initializeNavigation();
  initializeParallaxEffect();
  initializeScrollAnimations();
  updateIndicators();
  initializeResponsiveMenu();

  // Mensaje de bienvenida en la consola
  console.log("Montserrat Website cargado correctamente");
  console.log("Desarrolladndo ideas");
});

// Función para optimizar el rendimiento
function optimizePerformance() {
  // Throttle para el evento scroll
  let ticking = false;

  function updateOnScroll() {
    // Lógica de scroll optimizada
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  });
}

// Llamar optimización
optimizePerformance();

const trabajos = [
  {
    titulo: "Diseño de Logo",
    descripcion: "Un logo minimalista para una marca de ropa.",
    imagen: "assets/pictures/proyectoweb.jpg",
  },
  {
    titulo: "Sitio Web",
    descripcion: "Página web responsive para un restaurante.",
    imagen: "assets/pictures/proyectoweb.jpg",
  },
  {
    titulo: "Aplicación Móvil",
    descripcion: "App de pedidos de comida en Flutter.",
    imagen: "assets/pictures/proyectoweb.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const galeria = document.getElementById("galeria");

  trabajos.forEach((trabajo) => {
    const div = document.createElement("div"); // crea un <div>
    div.className = "item"; // se le asigna la clase item para los estilos
    div.innerHTML = `
            <img src="${trabajo.imagen}" alt="${trabajo.titulo}">
            <h3>${trabajo.titulo}</h3>
            <p>${trabajo.descripcion}</p>
        `;
    galeria.appendChild(div);
  });
});
