document.addEventListener('DOMContentLoaded', () => {
    // Basic Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phone = contactForm.querySelector('input[type="tel"]').value;
            if (phone.length < 10) {
                alert('Please enter a valid 10-digit mobile number');
                return;
            }
            alert('Thank you! Our agent will contact you within 24 hours to schedule your site visit.');
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
            alert('Success! We have received your inquiry. An agent will call you shortly.');
            detailsForm.reset();
        });
    }

    // Header transparency on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Simple Filter Interactivity on Properties Page
    const filterItems = document.querySelectorAll('.filter-item');
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            filterItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            // In a real app, this would trigger a data refetch or filtering logic
            console.log('Filtering by:', item.textContent);
        });
    });
});
