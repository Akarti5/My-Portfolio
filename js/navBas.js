 // Add active class to current section in mobile nav
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

 // Handle CV download click
 document.getElementById('download-cv').addEventListener('click', function(e) {
     e.preventDefault();
     // Add your CV download logic here
     alert('Downloading CV...');
     // Example: window.location.href = 'path-to-your-cv.pdf';
 });