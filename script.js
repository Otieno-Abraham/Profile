document.addEventListener('DOMContentLoaded', function() {
    // ===== MOBILE MENU TOGGLE =====
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            const expanded = navLinks.classList.toggle('active');
            this.innerHTML = expanded ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // ===== SMOOTH SCROLLING =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks) navLinks.classList.remove('active');
                if (mobileMenu) mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // ===== ACTIVE NAVIGATION HIGHLIGHTING =====
    const sections = document.querySelectorAll('section[id]');
    const navLinkItems = document.querySelectorAll('.nav-links a');

    if (sections.length && navLinkItems.length) {
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinkItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ===== BACK TO TOP BUTTON =====
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== COPY EMAIL FUNCTIONALITY =====
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        const emailText = item.textContent;
        if (emailText.includes('hello@abrahamotieno.com')) {
            item.style.cursor = 'pointer';
            item.title = 'Click to copy email';
            item.addEventListener('click', function() {
                const email = 'hello@abrahamotieno.com';
                navigator.clipboard.writeText(email).then(() => {
                    const originalParagraph = this.querySelector('p');
                    if (originalParagraph) {
                        const originalText = originalParagraph.textContent;
                        originalParagraph.textContent = 'Email copied!';
                        setTimeout(() => {
                            originalParagraph.textContent = originalText;
                        }, 2000);
                    }
                });
            });
        }
    });
    
    // NOTE: Form validation has been REMOVED because Formspree now handles the form.
    // The form uses action="https://formspree.io/f/mpqkbaaj" method="POST"
});
