// Funzione per mostrare o nascondere gli elementi in base allo scroll
function updateElementVisibility() {
    const hiddenElements = document.querySelectorAll('.fade, .fade1');
    
    hiddenElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      if ((elementTop+100) < windowHeight && elementBottom > 0) {
        element.classList.remove('fade');
        element.classList.add('fade1');
      } else {
        element.classList.remove('fade1');
        element.classList.add('fade');
      }
    });


  }
  
  // Aggiungi l'evento di scroll per chiamare la funzione
  window.addEventListener('scroll', updateElementVisibility);
  
  // Chiamare la funzione una volta all'inizio per verificare lo stato iniziale degli elementi
  updateElementVisibility();
