 
 const sections = document.querySelectorAll('section');
 const navItems = document.querySelectorAll('.mobile-nav-item');
 
 window.addEventListener('scroll', () => {
     let current = '';
     
     sections.forEach(section => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;
         if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
             current = section.getAttribute('id');
         }
     });
     
     navItems.forEach(item => {
         item.classList.remove('active');
         if (item.getAttribute('href').substring(1) === current) {
             item.classList.add('active');
         }
     });
 });

 
