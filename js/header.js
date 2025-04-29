// header.js
document.addEventListener("DOMContentLoaded", () => {
    fetch('code/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
  
        // Attacher les événements après insertion
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
  
        if (menuToggle && navLinks) {
          menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            menuToggle.classList.toggle('open');
          });
        }
      })
      .catch(error => {
        console.error('Erreur lors du chargement du header :', error);
      });
  });
  