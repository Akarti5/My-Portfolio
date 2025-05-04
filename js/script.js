        // Simple animation for floating elements
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover effect to buttons
            const buttons = document.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('mouseover', function() {
                    this.style.transform = 'scale(1.05)';
                });
                button.addEventListener('mouseout', function() {
                    this.style.transform = 'scale(1)';
                });
            });
            
            // Dot navigation for testimonials
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    // Remove active class from all dots
                    dots.forEach(d => d.classList.remove('active'));
                    // Add active class to clicked dot
                    this.classList.add('active');
                    
                    // Implement testimonial sliding if desired
                    // This would require additional code to slide the testimonial cards
                });
            });
            
            // Random movement for floating elements
            const floatingElements = document.querySelectorAll('.floating');
            floatingElements.forEach(element => {
                // Add slight random movement
                setInterval(() => {
                    const randomX = Math.random() * 10 - 5;
                    const randomY = Math.random() * 10 - 5;
                    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
                }, 2000);
            });
        });