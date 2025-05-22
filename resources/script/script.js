console.log("Script carregado!");

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('hamburguer');
  const menu = document.getElementById('menu');

  if (btn && menu) {
    btn.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  } else {
    console.warn('Elemento não encontrado.');
  }
});