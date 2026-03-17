// Animate counter numbers
function animateCounters() {
   const counters = document.querySelectorAll('.stat-number');

   if (!counters.length) return;

   counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const increment = target / 200;
      let current = 0;

      const timer = setInterval(() => {
         current += increment;
         counter.textContent = Math.floor(current);

         if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
         }
      }, 10);
   });
}


// Countdown timer
function updateCountdown() {

   const daysEl = document.getElementById('days');
   const hoursEl = document.getElementById('hours');
   const minutesEl = document.getElementById('minutes');
   const secondsEl = document.getElementById('seconds');

   if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

   const eventDate = new Date('2026-11-14T09:00:00');
   const now = new Date();
   const diff = eventDate - now;

   if (diff > 0) {

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = days.toString().padStart(2, '0');
      hoursEl.textContent = hours.toString().padStart(2, '0');
      minutesEl.textContent = minutes.toString().padStart(2, '0');
      secondsEl.textContent = seconds.toString().padStart(2, '0');
   }
}


// Create neural network animation
function createNeuralNetwork() {

   const container = document.getElementById('neuralNetwork');
   if (!container) return;

   const nodes = 20;

   for (let i = 0; i < nodes; i++) {

      const node = document.createElement('div');
      node.className = 'node';
      node.style.left = Math.random() * 100 + '%';
      node.style.top = Math.random() * 100 + '%';
      node.style.animationDelay = Math.random() * 2 + 's';

      container.appendChild(node);

      if (i > 0 && Math.random() > 0.5) {

         const connection = document.createElement('div');
         connection.className = 'connection';
         connection.style.left = Math.random() * 100 + '%';
         connection.style.top = Math.random() * 100 + '%';
         connection.style.width = Math.random() * 200 + 50 + 'px';
         connection.style.animationDelay = Math.random() * 3 + 's';

         container.appendChild(connection);
      }
   }
}


// Create floating particles
function createParticles() {

   const container = document.getElementById('particles');
   if (!container) return;

   const particleCount = 50;

   for (let i = 0; i < particleCount; i++) {

      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (10 + Math.random() * 4) + 's';

      container.appendChild(particle);
   }
}


// Mobile menu toggle
function toggleMenu() {

   const mobileMenu = document.querySelector('.mobile-menu');
   const mobileNav = document.getElementById('mobileNav');

   if (!mobileMenu || !mobileNav) return;

   mobileMenu.classList.toggle('active');
   mobileNav.classList.toggle('active');

   document.body.style.overflow =
      mobileNav.classList.contains('active') ? 'hidden' : 'auto';
}


function closeMenu() {

   const mobileMenu = document.querySelector('.mobile-menu');
   const mobileNav = document.getElementById('mobileNav');

   if (!mobileMenu || !mobileNav) return;

   mobileMenu.classList.remove('active');
   mobileNav.classList.remove('active');
   document.body.style.overflow = 'auto';
}


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

   anchor.addEventListener('click', function (e) {

      const target = document.querySelector(this.getAttribute('href'));

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
});


// Header scroll effect
window.addEventListener('scroll', () => {

   const header = document.querySelector('header');

   if (!header) return;

   if (window.scrollY > 100) {
      header.style.background = 'rgba(10,10,15,0.95)';
   } else {
      header.style.background = 'rgba(10,10,15,0.9)';
   }
});


// Scroll animations
const observerOptions = {
   threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {

   entries.forEach(entry => {

      if (entry.isIntersecting) {
         entry.target.classList.add('animated');
      }
   });

}, observerOptions);


function initScrollAnimations() {

   const elements = document.querySelectorAll('.animate-on-scroll');

   if (!elements.length) return;

   elements.forEach(el => {
      observer.observe(el);
   });
}


// Page load
window.addEventListener('load', () => {

   animateCounters();
   createNeuralNetwork();
   createParticles();
   updateCountdown();
   initScrollAnimations();

   setInterval(updateCountdown, 1000);

});




