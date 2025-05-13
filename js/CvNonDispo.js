document.addEventListener('DOMContentLoaded', function() {
    
    const downloadButton = document.querySelector('.cta-button');
    
    // event de click
    downloadButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        //Style pour la notif 
        Toastify({
            text: "Pas encore disponible",
            duration: 3000,
            gravity: "bottom",
            position: "center",
            backgroundColor: "#3498db",
            stopOnFocus: true
        }).showToast();
    });
});