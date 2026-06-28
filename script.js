// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle Mobile Navigation Menu
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active-menu');
            
            // Accessibility (WCAG Compliance) update
            const isOpen = navLinks.classList.contains('active-menu');
            menuToggle.setAttribute('aria-expanded', isOpen);
            
            // Icon change effect
            menuToggle.innerHTML = isOpen ? '✕' : '☰';
        });
    }

    // Highlighting current active page (Optional feature for UX)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});