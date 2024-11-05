document.addEventListener('DOMContentLoaded', (event) => {
    try {
        // Navigation functionality
        const hamburger = document.querySelector('.hamburger');
        const navUl = document.querySelector('nav ul');
        
        if (!hamburger || !navUl) {
            throw new Error('Required navigation elements not found');
        }

        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('show');
            hamburger.setAttribute('aria-expanded', 
                hamburger.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
            );
        });

        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('show');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

    } catch (error) {
        console.error('Initialization error:', error);
    }
});
