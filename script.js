 // Intersection Observer for fade-up elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Trigger skill bars
        const fills = e.target.querySelectorAll('.skill-fill');
        fills.forEach(f => {
          f.style.width = f.dataset.width + '%';
        });
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Also trigger any skill fills that come into view later
  document.querySelectorAll('.skill-fill').forEach(f => {
    const bar = f.closest('.skills-cols');
    if (bar) {
      const barObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            f.style.width = f.dataset.width + '%';
          }
        });
      }, { threshold: 0.2 });
      barObs.observe(f);
    }
  });

  // Hero card animation on load
  window.addEventListener('load', () => {
    document.querySelector('.hero-card').classList.add('visible');
  });
  

    // ── BACK TO TOP ──
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Scroll to top ends here