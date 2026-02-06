// Buybye Landing Page - Interactive JavaScript

// Contact Button Interaction
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const snackbar = document.getElementById('snackbar');
    
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

    // Add subtle parallax effect on mouse move
    document.addEventListener('mousemove', function(e) {
        const centralMessage = document.querySelector('.central-message');
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        
        centralMessage.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });

    // Add keyboard accessibility for contact button
    contactBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            contactBtn.click();
        }
    });

    // Log page load for analytics (placeholder)
    console.log('Buybye Landing Page Loaded Successfully');
});

// Add smooth entrance animation for sections
window.addEventListener('load', function() {
    const sections = document.querySelectorAll('.buying-section, .selling-section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        setTimeout(() => {
            section.style.transition = 'opacity 0.6s ease-in';
            section.style.opacity = '1';
        }, index * 200);
    });
});
