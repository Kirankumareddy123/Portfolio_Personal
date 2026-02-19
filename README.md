# 🌟 Personal Portfolio Website

A modern, responsive, and visually stunning portfolio website built with pure HTML, CSS, and JavaScript. Features a vibrant dark theme with colorful gradients and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Vibrant Dark Theme** - Eye-catching cyan, magenta, and yellow color scheme
- 🌈 **Stunning Animations** - Floating elements, gradient rotations, and smooth transitions
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight** - No frameworks, pure vanilla JavaScript
- 🎯 **Smooth Navigation** - Seamless scrolling between sections
- 📧 **Contact Form** - Functional form with validation
- 🖼️ **Profile Picture** - Animated profile image with glowing effects
- 🚀 **Modern UI/UX** - Clean, professional, and attractive design

## 🎭 Sections

1. **Home** - Hero section with animated profile picture
2. **About** - Personal information and background
3. **Skills** - Technical skills showcase with hover effects
4. **Projects** - Featured projects with live demo links
5. **Contact** - Contact form and social media links

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, gradients, animations
- **JavaScript (ES6+)** - DOM manipulation, form validation
- **Google Fonts** - Poppins font family

## 📁 Project Structure

```
Portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── image.jpg           # Profile picture (add your own)
└── README.md           # Project documentation
```

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio
```

### 2. Add Your Profile Picture

- Save your photo as `image.jpg` in the Portfolio folder
- Or update the image path in `index.html` (lines 44 and 58)

### 3. Customize Content

Edit `index.html` to update:
- Your name and title
- About section details
- Skills and technologies
- Contact information
- Social media links

### 4. Update Projects

Edit `script.js` to add your projects:

```javascript
const projects = [
    {
        title: "Your Project",
        description: "Project description",
        tech: ["HTML", "CSS", "JS"],
        icon: "🚀",
        demo: "https://your-demo-link.com",
        code: "https://github.com/your-repo"
    }
];
```

### 5. Open in Browser

Simply open `index.html` in your web browser or use Live Server in VS Code.

## 🌐 Deploy to GitHub Pages

### Step 1: Create Repository

1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Make it **Public**
4. Click "Create repository"

### Step 2: Upload Files

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in sidebar
3. Source: **Deploy from branch**
4. Branch: **main** → **/ (root)**
5. Click **Save**

### Step 4: Access Your Site

Your portfolio will be live at:
```
https://YOUR-USERNAME.github.io/portfolio
```

## 🎨 Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #00f5ff;      /* Cyan */
    --secondary: #ff00ff;    /* Magenta */
    --accent: #ffff00;       /* Yellow */
    --dark: #0a0e27;         /* Background */
}
```

### Modify Animations

Adjust animation timing in `styles.css`:

```css
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}
```

### Update Resume Link

Change the CV download link in `index.html`:

```html
<a href="path/to/your/resume.pdf" class="btn btn-primary">Download CV</a>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 600px - 968px
- **Mobile**: < 600px

## ✅ Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🎯 Key Animations

- **Float Animation** - Profile picture floating effect
- **Gradient Rotation** - Rotating gradient border
- **Slide In** - Content slides in on page load
- **Hover Effects** - Cards lift and glow on hover
- **Pulse Effect** - Background pulsing animation
- **Shimmer Effect** - Light sweep across elements

## 📧 Contact Form

The contact form includes:
- Name validation
- Email format validation
- Message length validation
- Success/error messages
- Form reset after submission

## 🔧 Troubleshooting

**Profile picture not showing?**
- Check file name matches exactly: `image.jpg`
- Ensure image is in the Portfolio folder
- Try hard refresh: `Ctrl + Shift + R`

**Animations not working?**
- Clear browser cache
- Check browser console for errors
- Ensure JavaScript is enabled

**Mobile menu not working?**
- Verify JavaScript file is loaded
- Check hamburger icon is visible on mobile

## 📝 To-Do / Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add project filtering
- [ ] Integrate backend for contact form
- [ ] Add testimonials section
- [ ] Include certifications
- [ ] Add loading animation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kiran Kumar Reddy**

- GitHub: [@Kirankumareddy123](https://github.com/Kirankumareddy123)
- LinkedIn: [Kiran Kumar Reddy](https://www.linkedin.com/in/kiran-kumar-reddy-7869502ba)
- Email: kiranreddy1695@gmail.com

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

## 📸 Screenshots

### Desktop View
![Desktop](https://via.placeholder.com/800x400/0a0e27/00f5ff?text=Desktop+View)

### Mobile View
![Mobile](https://via.placeholder.com/400x800/0a0e27/00f5ff?text=Mobile+View)

---

**Built with ❤️ using HTML, CSS, and JavaScript**

*Last Updated: January 2024*
