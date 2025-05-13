document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get all feature boxes
          const featureBoxes = entry.target.querySelectorAll('.features-box');
          
          // Add appear class to each box
          featureBoxes.forEach(box => {
            box.classList.add('appear');
          });
          
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% of the section is visible
    });
  
    // Start observing the experiences section
    const experiencesSection = document.getElementById('experiences');
    if (experiencesSection) {
      observer.observe(experiencesSection);
    }
  });