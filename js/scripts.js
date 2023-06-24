document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('.scroll-link');
    
    for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        var offset = targetElement.offsetTop - 80;
        
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      });
    }
  });

  
document.addEventListener("DOMContentLoaded", function() {
        var scrollLinks = document.querySelectorAll('.scroll-link');
        var toggleBtn = document.getElementById('nav__toggle');
        var menu = document.querySelector('.nav__ul');
    
        // Agregar evento de clic a los enlaces de desplazamiento
        for (var i = 0; i < scrollLinks.length; i++) {
          scrollLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            var offset = targetElement.offsetTop - 80;
            
            window.scrollTo({
              top: offset,
              behavior: 'smooth'
            });
    
            menu.classList.remove("show"); // Cerrar el menú desplegable al hacer clic en un enlace
          });
        }
    
        // Agregar evento de clic al botón de toggle
        toggleBtn.addEventListener("click", function(event) {
          event.preventDefault(); 
          menu.classList.toggle("show");
        });
      });

  