document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phone = contactForm.querySelector('input[type="tel"]').value;
            if (phone.length < 10) {
                alert('Please enter a valid 10-digit mobile number');
                return;
            }
            alert('Thank you! Jeevan Kale will contact you shortly to schedule your site visit for this weekend.');
            contactForm.reset();
        });
    }

    const detailsForm = document.getElementById('details-form');
    if (detailsForm) {
        detailsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phone = detailsForm.querySelector('input[type="tel"]').value;
            if (phone.length < 10) {
                alert('Please enter a valid mobile number');
                return;
            }
            alert('Success! Your site visit request has been sent to Jeevan Kale.');
            detailsForm.reset();
        });
    }

    // Scroll effect for header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
