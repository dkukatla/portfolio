// ── Scroll Reveal (Intersection Observer) ────────────
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  reveals.forEach((el) => observer.observe(el));
}

// ── Navbar Scroll Effect ─────────────────────────────
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// ── Active Nav Link ──────────────────────────────────
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));
}

// ── Mobile Menu ──────────────────────────────────────
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on link click
  navLinks.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Back to Top ──────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Contact Form ─────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit span');
    if (btn) {
      btn.textContent = 'Message Sent! ✓';
      setTimeout(() => {
        btn.textContent = 'Send Message';
        form.reset();
      }, 3000);
    }
  });
}

// ── Futuristic Pointer + Parallax ────────────────────
function initFuturisticMotion() {
  const body = document.body;
  const orbs = document.querySelectorAll('.gradient-orb[data-depth]');

  const updatePointer = (x, y) => {
    const px = `${(x / window.innerWidth) * 100}%`;
    const py = `${(y / window.innerHeight) * 100}%`;
    body.style.setProperty('--pointer-x', px);
    body.style.setProperty('--pointer-y', py);
  };

  window.addEventListener('mousemove', (event) => {
    updatePointer(event.clientX, event.clientY);

    orbs.forEach((orb) => {
      const depth = Number(orb.getAttribute('data-depth') || 0);
      const moveX = (event.clientX - window.innerWidth / 2) * depth;
      const moveY = (event.clientY - window.innerHeight / 2) * depth;
      orb.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  }, { passive: true });
}

// ── Init ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initNavbarScroll();
  initActiveNavLink();
  initMobileMenu();
  initBackToTop();
  initContactForm();
  initFuturisticMotion();
});
