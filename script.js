// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// Add to existing script.js
document.querySelector('.hamburger-menu').addEventListener('mouseleave', (e) => {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks.matches(':hover')) {
        navLinks.classList.remove('active');
    }
});

document.querySelector('.nav-links').addEventListener('mouseleave', (e) => {
    e.currentTarget.classList.remove('active');
});

document.querySelector('.scroll-down').addEventListener('click', function() {
    const container = document.querySelector('.text-scroll-container');
    const scrollHeight = container.scrollHeight - container.clientHeight;
    
    container.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
    });
});

function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add this to your existing script.js
function updateTimeline() {
    const sections = document.querySelectorAll('.company-section');
    
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        
        if (rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateTimeline);
window.addEventListener('resize', updateTimeline);

function scrollToWorkExperience() {
    const workSection = document.getElementById('projects');
    const navHeight = document.querySelector('nav').offsetHeight;
    const offset = workSection.offsetTop - navHeight - 20; // 20px extra padding
    
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

function scrollToEducation() {
    const educationSection = document.getElementById('education');
    const navHeight = document.querySelector('nav').offsetHeight;
    const offset = educationSection.offsetTop - navHeight + 100;  // Increased from 20px to 100px
    
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

function scrollToSection(sectionId, event) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('nav').offsetHeight;
    let offset;
    
    // Adjust offset based on section
    if (sectionId === 'work-experience') {
        offset = section.offsetTop - navHeight - 150;  // Increased from -100 to -150
    } else if (sectionId === 'pastimes') {
        offset = section.offsetTop - navHeight - 200;  // Increased to -200 for pastimes
    } else {
        offset = section.offsetTop - navHeight - 20;  // Keep original offset for other sections
    }
    
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const dropdown = document.querySelector('.mobile-dropdown');
    
    menuBtn.addEventListener('click', function() {
        dropdown.classList.toggle('active');
    });
}); 