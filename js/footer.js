// footer.js
document.addEventListener("DOMContentLoaded", () => {
    fetch('code/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      })
      .catch(error => {
        console.error('Erreur lors du chargement du footer :', error);
      });
  });
  