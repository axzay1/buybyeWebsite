// Buybye Landing Page - Interactive JavaScript

// Contact Button Interaction
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    
    // Add click handler for contact button
    contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a simple alert for now (can be replaced with a modal or form later)
        const userChoice = confirm('Would you like to get in touch with Buybye?\n\nClick OK to send an email, or Cancel to close this message.');
        
        if (userChoice) {
            // Open email client with pre-filled subject
            window.location.href = 'mailto:contact@buybye.com?subject=Inquiry about Buybye';
        }
    });

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
