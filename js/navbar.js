document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbarMobDeploy");
//   const navbarFixed = document.getElementById("navbarMobDeployFixed");
  const hambLink = document.getElementById('hambLink');
//   const hambLinkFixed = document.getElementById('hambLinkFixed');
  const navWrapper = navbar.querySelector('ul');
//   const navWrapperFixed = navbarFixed.querySelector('ul');
const closeBtns = document.querySelectorAll(".closeBtn");

  const toggleNavBar = (navbarElement, hambLink) => {
      hambLink.classList.toggle("active");
      navbarElement.classList.toggle("open");
  };

  hambLink.addEventListener('click', () => toggleNavBar(navbar, hambLink));
//   hambLinkFixed.addEventListener('click', () => toggleNavBar(navbarFixed, hambLinkFixed));

  navWrapper.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
          toggleNavBar(navbar, hambLink);
      }
  });

//   navWrapperFixed.addEventListener('click', (event) => {
//       if (event.target.tagName === 'A') {
//           toggleNavBar(navbarFixed, hambLinkFixed);
//       }
//   });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleNavBar(navbar, hambLink); // Cierra el menú
      location.href = '#postular'; // Redirige a la sección deseada
    });
  });
});