document.addEventListener('DOMContentLoaded', function() {
  // Obtén el elemento del nav
  var nav = document.querySelector('.header');

  // Obtén la lista de elementos con la clase 'nav__item_texto'
  var navItemTextos = document.querySelectorAll('.nav__item_texto');

  // Agrega el evento 'mouseenter' al nav
  nav.addEventListener('mouseenter', function() {
    // Itera sobre cada elemento y cambia el estilo a 'display: inline'
    navItemTextos.forEach(function(itemTexto) {
      itemTexto.style.display = 'inline';
    });
  });

  // Agrega el evento 'mouseleave' al nav
  nav.addEventListener('mouseleave', function() {
    // Itera sobre cada elemento y cambia el estilo a 'display: none'
    navItemTextos.forEach(function(itemTexto) {
      itemTexto.style.display = 'none';
    });
  });

  // Obtener la lista y el botón de toggle
  var navLista = document.querySelector('.nav__lista');
  var toggleBtn = document.getElementById('toggle');

  // Establecer el estado inicial de la lista como 'none' si la pantalla es menor o igual a 1024
  if (window.innerWidth <= 1024) {
    navLista.style.display = 'none';
  }

  // Agregar un evento click al botón de toggle
  toggleBtn.addEventListener('click', function() {
    // Alternar la visibilidad de la lista
    if (window.innerWidth <= 1024) {
      if (window.getComputedStyle(navLista).display === 'block') {
        navLista.style.display = 'none';
      } else {
        navLista.style.display = 'block';
      }
    }
  });

  // Agregar un evento de redimensionamiento de la ventana
  window.addEventListener('resize', function() {
    // Verificar el tamaño de la pantalla y mostrar u ocultar la lista
    if (window.innerWidth <= 1024) {
      navLista.style.display = 'none';
    } else {
      navLista.style.display = 'block';
    }
  });
});