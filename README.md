# Chrisha Willer M - Portfolio Website

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript.

## 🚀 Tech Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with animations and responsive design
- **JavaScript** - Interactive functionality and smooth user experience
- **Font Awesome** - Icons for social links and UI elements

## ✨ Features

### 🎨 Design & Animations
- **Smooth CSS animations** with keyframes
- **Hover effects** with transforms and shadows
- **Gradient backgrounds** and modern color schemes
- **Responsive design** for all device sizes
- **Smooth scrolling** navigation

### 🎠 Pure CSS Carousel
- **Auto-rotating certifications** carousel
- **Manual navigation** with indicator dots
- **Smooth transitions** using CSS transforms
- **Touch-friendly** controls

### 📱 Interactive Elements
- **Mobile hamburger menu** with smooth transitions
- **Scroll progress bar** at the top
- **Active navigation** highlighting based on scroll position
- **Form validation** and submission handling
- **Intersection Observer** for scroll-based animations

### 📧 Contact Form
- **Ready for EmailJS integration**
- **Form validation** with required fields
- **Success/error handling**
- **Responsive form layout**

## 🏗️ Project Structure

\`\`\`
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
└── README.md          # Project documentation
\`\`\`

## 🚀 Getting Started

### Option 1: Direct File Opening
1. Download all files to a folder
2. Open `index.html` in your web browser
3. The portfolio will load immediately

### Option 2: Local Server (Recommended)
1. Install Node.js if not already installed
2. Run: `npm install -g live-server`
3. Navigate to the project folder
4. Run: `live-server --port=3000`
5. Open `http://localhost:3000` in your browser

### Option 3: Using npm scripts
1. Run: `npm install` (installs live-server)
2. Run: `npm start`
3. Portfolio opens automatically in your browser

## 📧 EmailJS Integration

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Replace the form submission code in `script.js`:

\`\`\`javascript
// Replace the existing form handler with:
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm, 'YOUR_PUBLIC_KEY')
    .then(() => {
        alert(`Thank you ${name}! Your message has been sent successfully.`);
        contactForm.reset();
    })
    .catch(() => {
        alert('Sorry, there was an error sending your message.');
    });
\`\`\`

## 🌐 Deployment Options

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory
3. Follow the prompts for deployment

### Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly

### GitHub Pages
1. Push code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `username.github.io/repository-name`

### Other Static Hosts
- **Firebase Hosting**
- **Surge.sh**
- **Render**
- **Any web server** (just upload the files)

## 🎨 Customization

### Colors
Update the CSS custom properties in `styles.css`:
\`\`\`css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #8b5cf6;
    --text-color: #374151;
    --background-color: #ffffff;
}
\`\`\`

### Content
- Update personal information in `index.html`
- Replace placeholder images with your actual photos
- Modify project details and links
- Update social media links

### Animations
- Adjust animation durations in CSS
- Add new keyframe animations
- Modify hover effects and transitions

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔧 Performance Features

- **Optimized images** with proper sizing
- **Minimal dependencies** (only Font Awesome CDN)
- **Efficient CSS** with no unused styles
- **Smooth animations** with CSS transforms
- **Lazy loading** ready for images

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built with ❤️ using vanilla web technologies**
