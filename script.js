// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;

// Create mobile menu
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';
mobileMenu.innerHTML = `
  <button class="close-menu" aria-label="Close menu">
    <i class="fas fa-times"></i>
  </button>
  <ul>
    <li><a href="#services">Services</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#team">Team</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
`;
body.appendChild(mobileMenu);

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  body.style.overflow = 'hidden';
});

// Close mobile menu
const closeMenu = document.querySelector('.close-menu');
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  body.style.overflow = '';
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    body.style.overflow = '';
  });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!firstName || !lastName || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you would typically send the form data to a server
    // For this example, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add scroll event listener for header background
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = 'var(--shadow)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.card, .section-header, .about-content, .team-member');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Initialize animation styles
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.card, .section-header, .about-content, .team-member');
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Trigger initial animation
  animateOnScroll();
  
  // Add scroll event listener for animations
  window.addEventListener('scroll', animateOnScroll);
});