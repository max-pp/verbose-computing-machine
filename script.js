document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navUl = document.querySelector('nav ul.menu');
  const navLinks = document.querySelectorAll('nav ul.menu a');

  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
      navUl.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navUl.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navUl.contains(e.target) && e.target !== menuToggle && navUl.classList.contains('active')) {
        navUl.classList.remove('active');
      }
    });
  }
});