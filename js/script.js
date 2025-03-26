document.addEventListener("DOMContentLoaded", () => {
  // Const de funcion "Navbar Deployer"
  const navbar = document.getElementById("navbarMobDeploy");
  const navbarFixed = document.getElementById("navbarMobDeployFixed");
  const hambLink = document.getElementById('hambLink');
  const hambLinkFixed = document.getElementById('hambLinkFixed');
  const navWrapper = navbar.querySelector('ul');
  const navWrapperFixed = navbarFixed.querySelector('ul');
  const closeBtns = document.querySelectorAll(".closeBtn");

  // Const de funcion "Navbar Show"
  const inicio = document.getElementById('inicio');
  const navbarClassFixed = document.querySelector('.navbar-fixed');

  // Const del Form Changer
  const btnPersona = document.getElementById("btnPersona");
  const btnEmpresa = document.getElementById("btnEmpresa");
  const formPersona = document.getElementById("formPersona");
  const formEmpresa = document.getElementById("formEmpresa");

  // Navbar Deployer: Funcion de deploy de navbar (aplica para normal y fixed)
  const toggleNavBar = (navbarElement, hambLink) => {
    hambLink.classList.toggle("active");
    navbarElement.classList.toggle("open");
  };

  hambLink.addEventListener('click', () => toggleNavBar(navbar, hambLink));
  hambLinkFixed.addEventListener('click', () => toggleNavBar(navbarFixed, hambLinkFixed));

  // Navbar Deployer: Evento que cierra navbar al hacer click
  navWrapper.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      toggleNavBar(navbar, hambLink);
    }
  });

  navWrapperFixed.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      toggleNavBar(navbarFixed, hambLinkFixed);
    }
  });

  // Cierra el menu y envia a #postular en boton (presente en ambas navbar mobile)
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleNavBar(navbar, hambLink);
      location.href = '#inscripcion';
    });
  });

  let isInicioOutOfView = false;  // Booleano que se creará

  // Navbar Show: Funcion que hace aparecer y desaparecer el .navbar-fixed
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbarClassFixed.classList.add('show');
        isInicioOutOfView = true;
      } else {
        isInicioOutOfView = false;
        navbarClassFixed.classList.remove('show');
        hambLinkFixed.classList.remove("active");
        navbarFixed.classList.remove("open");
      }
    });
  });

  // Ejecuta el observer al pasar por inicio para el deloy del menu
  observer.observe(inicio);

  // Navbar Hide on Sroll: Funcion que hace desaparecer el navbar en scroll down
  let lastScrollTop = 0;

  const handleScroll = () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (isInicioOutOfView) {
      if (currentScroll > lastScrollTop) {
        navbarClassFixed.classList.remove('show');
      } else {
        navbarClassFixed.classList.add('show');
      }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  };

  // Debounce para mejorar el rendimiento
  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  window.addEventListener('scroll', debounce(handleScroll, 10));

  // Form Changer
  function toggleClass(element, className, condition) {
    element.classList.toggle(className, condition);
  }

  function toggleForms(activeBtn, inactiveBtn, activeForm, inactiveForm) {
    toggleClass(activeBtn, "btn-active-pink", true);
    toggleClass(inactiveBtn, "btn-active-pink", false);

    toggleClass(activeForm, "show", true);
    toggleClass(activeForm, "hide", false);

    toggleClass(inactiveForm, "hide", true);
    toggleClass(inactiveForm, "show", false);
  }

  // Event listeners para los botones
  btnPersona.addEventListener("click", () => {
    toggleForms(btnPersona, btnEmpresa, formPersona, formEmpresa);
  });

  btnEmpresa.addEventListener("click", () => {
    toggleForms(btnEmpresa, btnPersona, formEmpresa, formPersona);
  });
});

// Autofecha
document.getElementById('current-year').textContent = new Date().getFullYear();