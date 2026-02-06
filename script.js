// Buybye Landing Page - Interactive JavaScript

// Carousel functionality wrapped in IIFE
(function() {
    // Constants
    const FLIP_ANIMATION_DURATION = 1000; // Must match CSS animation duration
    const TRANSITION_HALFWAY_DELAY = FLIP_ANIMATION_DURATION / 2;
    
    // Carousel State
    let currentSlide = 1; // Using 1-based indexing to match HTML data-slide attributes
    let isFlipping = false;
    let flipDirection = 'normal'; // 'normal' or 'reverse'

    // Contact Button Interaction
    document.addEventListener('DOMContentLoaded', function() {
        const contactBtn = document.getElementById('contactBtn');
        const snackbar = document.getElementById('snackbar');
        const dots = document.querySelectorAll('.dot');
        const centralMessage = document.querySelector('.central-message');
        
        // Add click handler for contact button
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Email address to copy
            const email = 'axzay@buybye.in';
            
            // Copy email to clipboard
            navigator.clipboard.writeText(email).then(function() {
                // Show snackbar with success message
                showSnackbar('email id copied to clipboard');
            }).catch(function(err) {
                // Fallback for older browsers or if clipboard API fails
                console.error('Failed to copy email:', err);
                showSnackbar('Failed to copy email');
            });
        });
        
        // Function to show snackbar
        function showSnackbar(message) {
            snackbar.textContent = message;
            snackbar.className = 'snackbar show';
            
            // Hide snackbar after 3 seconds
            setTimeout(function() {
                snackbar.className = snackbar.className.replace('show', '');
            }, 3000);
        }

        // Carousel Navigation - Dots
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const targetSlide = parseInt(this.getAttribute('data-slide'));
                if (targetSlide !== currentSlide && !isFlipping) {
                    goToSlide(targetSlide);
                }
            });
        });

        // Function to go to a specific slide
        function goToSlide(slideNumber) {
            if (isFlipping) return;
            
            isFlipping = true;
            const slides = document.querySelectorAll('.carousel-slide');
            const currentSlideElement = document.querySelector(`.carousel-slide[data-slide="${currentSlide}"]`);
            const targetSlideElement = document.querySelector(`.carousel-slide[data-slide="${slideNumber}"]`);
            
            // Get sections for flip animation
            const currentTopSection = currentSlideElement.querySelector('.buying-section');
            const currentBottomSection = currentSlideElement.querySelector('.selling-section');
            
            // Add flip animation classes
            if (flipDirection === 'normal') {
                currentTopSection.classList.add('flipping');
                currentBottomSection.classList.add('flipping');
            } else {
                currentTopSection.classList.add('flipping-reverse');
                currentBottomSection.classList.add('flipping-reverse');
            }
            
            // Toggle flip direction for next transition
            flipDirection = flipDirection === 'normal' ? 'reverse' : 'normal';
            
            // Wait for animation to reach halfway point
            setTimeout(() => {
                // Hide current slide
                currentSlideElement.classList.remove('active');
                
                // Show target slide
                targetSlideElement.classList.add('active');
                
                // Update central message visibility and animation
                if (slideNumber === 1) {
                    centralMessage.classList.remove('hidden');
                    centralMessage.classList.remove('minimized');
                } else {
                    centralMessage.classList.add('minimized');
                }
                
                // Update dots
                dots.forEach(dot => dot.classList.remove('active'));
                document.querySelector(`.dot[data-slide="${slideNumber}"]`).classList.add('active');
                
                currentSlide = slideNumber;
            }, TRANSITION_HALFWAY_DELAY);
            
            // Remove flip animation classes after animation completes
            setTimeout(() => {
                currentTopSection.classList.remove('flipping', 'flipping-reverse');
                currentBottomSection.classList.remove('flipping', 'flipping-reverse');
                isFlipping = false;
            }, FLIP_ANIMATION_DURATION);
        }

        // Auto-advance carousel every 6 seconds
        setInterval(() => {
            const nextSlide = currentSlide === 3 ? 1 : currentSlide + 1;
            goToSlide(nextSlide);
        }, 6000);

        // Add subtle parallax effect on mouse move (only on slide 1)
        document.addEventListener('mousemove', function(e) {
            if (currentSlide === 1) {
                const x = (window.innerWidth - e.pageX * 2) / 100;
                const y = (window.innerHeight - e.pageY * 2) / 100;
                
                centralMessage.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
            }
        });

        // Add keyboard accessibility for contact button
        contactBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                contactBtn.click();
            }
        });

        // Keyboard navigation for carousel
        document.addEventListener('keydown', function(e) {
            if (isFlipping) return;
            
            if (e.key === 'ArrowLeft') {
                const prevSlide = currentSlide === 1 ? 3 : currentSlide - 1;
                goToSlide(prevSlide);
            } else if (e.key === 'ArrowRight') {
                const nextSlide = currentSlide === 3 ? 1 : currentSlide + 1;
                goToSlide(nextSlide);
            }
        });

        // Log page load for analytics (placeholder)
        console.log('Buybye Landing Page Loaded Successfully');
    });

    // Add smooth entrance animation for sections
    window.addEventListener('load', function() {
        const activeSlide = document.querySelector('.carousel-slide.active');
        const sections = activeSlide.querySelectorAll('.buying-section, .selling-section');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            setTimeout(() => {
                section.style.transition = 'opacity 0.6s ease-in';
                section.style.opacity = '1';
            }, index * 200);
        });
    });
})();
