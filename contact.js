// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    contactForm.style.display = 'none';
                    formSuccess.style.display = 'block';
                    contactForm.reset();
                    
                    setTimeout(function() {
                        contactForm.style.display = 'block';
                        formSuccess.style.display = 'none';
                    }, 5000);
                } else {
                    alert('Oops! There was a problem submitting your form');
                }
            })
            .catch(error => {
                alert('Oops! There was a problem submitting your form');
                console.error('Error:', error);
            });
        });

        console.log('Contact form initialized');
    }
});