
// Création d'étoiles animées
        function createStars() {
            const container = document.getElementById('stars-container');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'absolute rounded-full bg-white';
                
                // Taille aléatoire
                const size = Math.random() * 3;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                // Position aléatoire
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                
                // Animation
                star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite alternate`;
                
                container.appendChild(star);
            }
        }

        // Ajout du CSS pour l'animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes twinkle {
                0% { opacity: 0.2; }
                100% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        // Initialisation
        document.addEventListener('DOMContentLoaded', createStars);

         // Animation des barres de progression
  document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  });



   