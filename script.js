
// script.js — TechPulse | DecodeLabs Frontend Project 2

//  Show / hide desktop CTA based on screen width 
function updateDesktopCTA() {
  const cta = document.getElementById('desktop-cta');
  if (!cta) return;
  cta.style.display = window.innerWidth > 640 ? 'inline-flex' : 'none';
}

updateDesktopCTA();
window.addEventListener('resize', updateDesktopCTA);


//  Active nav link highlight on scroll 
const sections  = document.querySelectorAll('section[id], nav[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => {
          const isActive = a.getAttribute('href') === '#' + entry.target.id;
          a.style.color = isActive
            ? 'var(--accent)'
            : 'var(--muted)';
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => observer.observe(s));


//  Animate stat numbers on scroll into view 
function animateCount(el, target, suffix, duration = 1200) {
  const isFloat   = target % 1 !== 0;
  const start     = performance.now();

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = eased * target;

    el.textContent = (isFloat ? current.toFixed(1) : Math.round(current)) + suffix;

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const statNums = document.querySelectorAll('.stat-num');

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el   = entry.target;
      const raw  = el.textContent.trim();
      const num  = parseFloat(raw);
      const suffix = raw.replace(/[\d.]/g, '');

      if (!isNaN(num)) animateCount(el, num, suffix);
      statObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);

statNums.forEach((n) => statObserver.observe(n));


//  Smooth reveal cards on scroll 
const revealItems = document.querySelectorAll(
  '.feat-card, .team-card, .sidebar-card, .article-main'
);

// Set initial state via JS so CSS stays clean
revealItems.forEach((el) => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      // Stagger by index within its parent
      const siblings = Array.from(entry.target.parentElement.children);
      const delay    = siblings.indexOf(entry.target) * 80;

      setTimeout(() => {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
      }, delay);

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((el) => revealObserver.observe(el));
