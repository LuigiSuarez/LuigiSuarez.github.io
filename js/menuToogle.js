document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelector('.header');
  var navItemTextos = document.querySelectorAll('.nav__item_texto');
  var navLista = document.querySelector('.nav__lista');
  var toggleBtn = document.getElementById('toggle');

  nav.addEventListener('mouseenter', function() {
    navItemTextos.forEach(function(itemTexto) {
      itemTexto.style.display = 'inline';
    });
  });

  nav.addEventListener('mouseleave', function() {
    navItemTextos.forEach(function(itemTexto) {
      itemTexto.style.display = 'none';
      
    });
  });

  toggleBtn.addEventListener('click', function() {
    if (window.innerWidth <= 1024) {
      if (window.getComputedStyle(navLista).display === 'block') {
        navLista.style.display = 'none';
        
      } else {
        navLista.style.display = 'block';
        
      }
      nav.addEventListener('mouseleave', function() {
        navItemTextos.forEach(function(itemTexto) {
          itemTexto.style.display = 'inline';
          
        });
      });
    }
    
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth <= 1024) {
      navLista.style.display = 'none';
    } else {
      navLista.style.display = 'block';
    }

   
  });

  // Nueva funcionalidad: cerrar el menú al hacer clic fuera de él
  document.addEventListener('click', function(event) {
    if (window.innerWidth <= 1024) {
      // Verificar si el clic ocurrió fuera del área del menú
      if (!nav.contains(event.target) && !toggleBtn.contains(event.target)) {
        navLista.style.display = 'none';
      }
    }
  });
});