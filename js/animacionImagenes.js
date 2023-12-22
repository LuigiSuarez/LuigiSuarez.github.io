document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.seccion').forEach(function(section, index) {
    var overlay = section.querySelector('.sobre-mi__overlay');
    var imagen = section.querySelector('.sobre-mi__imagen');

    overlay.addEventListener('animationend', function() {
      overlay.classList.add('reveal-done');
    });

    imagen.addEventListener('animationend', function() {
      imagen.classList.add('zoom-done');
    });
  });
  
});