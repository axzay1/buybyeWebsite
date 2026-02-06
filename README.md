# Buybye - Landing Page

## Overview
Buybye is a striking, full-screen landing page that conveys the core message: **"To buy something, you have to sell something"**

This landing page features a split-screen design that visually represents the dual nature of buying and selling, creating an immediate and memorable impression on visitors.

## Features

### Design
- **Full-screen layout** (100vh) with no scrolling required
- **Split-screen design**: Top half for buying, bottom half for selling
- **Responsive design** that adapts to desktop, tablet, and mobile devices
- **Modern aesthetics** with gradient backgrounds and smooth animations
- **Central message** prominently displayed in the middle of the screen
- **Floating contact button** for easy user engagement

### Visual Elements
- **Buying Section (Top)**: Purple gradient background with emojis (🛍️, ✨, 💳) representing the excitement of purchasing
- **Selling Section (Bottom)**: Pink-red gradient background with emojis (👋, 📦, 💸) representing decluttering and selling
- **Interactive hover effects** on sections
- **Floating animations** on icons
- **Subtle parallax effect** on mouse movement

## Technical Stack
- **HTML5**: Clean semantic structure
- **CSS3**: Modern styling with gradients, animations, and flexbox
- **Vanilla JavaScript**: Lightweight interactive elements
- No frameworks or dependencies required

## File Structure
```
buybyeWebsite/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive JavaScript
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/axzay1/buybyeWebsite.git
   cd buybyeWebsite
   ```

2. Open the landing page:
   - Simply open `index.html` in your web browser
   - Or use a local server (optional):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. Visit `http://localhost:8000` in your browser

## Usage
The landing page is ready to use out of the box. Simply:
1. Open `index.html` in any web browser
2. Experience the full-screen split design
3. Click the "Contact Us" button to get in touch

## Customization

### Changing Colors
Edit `styles.css` to modify the gradient backgrounds:
```css
/* Buying section gradient */
.buying-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Selling section gradient */
.selling-section {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Changing Content
Edit `index.html` to modify text, emojis, or messaging:
- Section titles and descriptions
- Icon emojis
- Core message text

### Modifying Interactions
Edit `script.js` to customize:
- Contact button behavior
- Animation effects
- Event handlers

## Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- **Lightweight**: No external dependencies
- **Fast loading**: All assets inline or minimal external files
- **Optimized**: CSS animations using GPU acceleration
- **Responsive**: Adapts smoothly to all screen sizes

## Design Philosophy
The landing page embodies the Buybye concept:
1. **Duality**: Split design represents buying and selling as two sides of the same coin
2. **Balance**: Equal emphasis on both activities
3. **Clarity**: Immediate understanding of the core message
4. **Engagement**: Interactive elements encourage user interaction

## License
[Add your license here]

## Contact
For inquiries, please use the "Contact Us" button on the landing page or reach out through GitHub issues.

---

**Built with ❤️ for the Buybye community**
