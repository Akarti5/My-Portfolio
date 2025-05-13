        // Simple animation pour les elements flottants
        document.addEventListener('DOMContentLoaded', function() {
            
            const buttons = document.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('mouseover', function() {
                    this.style.transform = 'scale(1.05)';
                });
                button.addEventListener('mouseout', function() {
                    this.style.transform = 'scale(1)';
                });
            });
            
    
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    
                    dots.forEach(d => d.classList.remove('active'));
                
                    this.classList.add('active');
                    
                });
            });
            
            
            const floatingElements = document.querySelectorAll('.floating');
            floatingElements.forEach(element => {
                
                setInterval(() => {
                    const randomX = Math.random() * 10 - 5;
                    const randomY = Math.random() * 10 - 5;
                    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
                }, 2000);
            });
        });