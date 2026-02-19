const projects = [
    {
        title: "E-Commerce Platform",
        description: "Full-featured online shopping platform with cart and payment integration",
        tech: ["HTML", "CSS", "JavaScript", "Node.js"],
        icon: "🛒",
        demo: "#",
        code: "#"
    },
    {
        title: "Task Manager App",
        description: "Productivity app with drag-and-drop and real-time updates",
        tech: ["React", "Firebase", "CSS"],
        icon: "✅",
        demo: "#",
        code: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather app with forecasts and location data",
        tech: ["JavaScript", "API", "CSS"],
        icon: "🌤️",
        demo: "#",
        code: "#"
    },
    {
        title: "Social Media App",
        description: "Social platform with posts, likes, and user profiles",
        tech: ["React", "Node.js", "MongoDB"],
        icon: "📱",
        demo: "#",
        code: "#"
    },
    {
        title: "Portfolio CMS",
        description: "Content management system for portfolio websites",
        tech: ["JavaScript", "Express", "SQL"],
        icon: "📝",
        demo: "#",
        code: "#"
    },
    {
        title: "Fitness Tracker",
        description: "Track workouts and progress with charts",
        tech: ["React", "Chart.js", "CSS"],
        icon: "💪",
        demo: "#",
        code: "#"
    }
];

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <div class="project-img">${project.icon}</div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tech.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demo}" class="project-link link-demo">Live Demo</a>
                    <a href="${project.code}" class="project-link link-code">Code</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
}

const contactForm = document.querySelector('.contact-form');
const formMessage = document.querySelector('.form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();
    
    if (!name || !email || !message) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email', 'error');
        return;
    }
    
    showMessage('Message sent successfully!', 'success');
    contactForm.reset();
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

window.addEventListener('load', renderProjects);
