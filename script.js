emailjs.init('ZdJKUgS5zBMWMinIF');

const typed = new Typed('#element', {
  strings: ['Web Developer', 'UI/UX Designer', 'Freelancer', 'React Developer'],
  typeSpeed: 50, backSpeed: 30, loop: true, cursorChar: '|',
});

const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

if (window.matchMedia('(pointer: fine)').matches) {
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.top = mouseY + 'px';
    cursorDot.style.left = mouseX + 'px';
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.top = ringY + 'px';
    cursorRing.style.left = ringX + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const hoverElements = document.querySelectorAll('a, button, input, textarea, .skill-chip, .proj-card, .social-btn');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.classList.add('hovered');
      cursorDot.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.classList.remove('hovered');
      cursorDot.classList.remove('hovered');
    });
  });
}

const progressBar = document.getElementById('progress-bar');
const header = document.getElementById('header');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + '%';

  header.classList.toggle('scrolled', scrollTop > 50);

  backToTop.classList.toggle('visible', scrollTop > 400);
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

const skillSection = document.getElementById('skills');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.getAttribute('data-width') + '%';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
skillObserver.observe(skillSection);

const aboutSection = document.getElementById('about');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('[data-count]').forEach(counter => {
        const target = +counter.getAttribute('data-count');
        let count = 0;
        const updateCount = () => {
          const increment = target / 50;
          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count) + '+';
            setTimeout(updateCount, 40);
          } else {
            counter.innerText = target + '+';
          }
        };
        updateCount();
      });
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
countObserver.observe(aboutSection);

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 150)) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href').includes(current)) {
      a.classList.add('active');
    }
  });
});

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const btnDark = document.getElementById('btnDark');
  const btnLight = document.getElementById('btnLight');

  if (theme === 'dark') {
    btnDark.classList.add('active');
    btnLight.classList.remove('active');
  } else {
    btnLight.classList.add('active');
    btnDark.classList.remove('active');
  }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const icon = type === 'success' ? '<i class="bx bx-check-circle"></i>' : '<i class="bx bx-error-circle"></i>';

  toast.innerHTML = `${icon} <span>${message}</span>`;
  toast.className = `toast ${type} show`;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const btn = this.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;

  btn.innerHTML = 'Sending... <i class="bx bx-loader-alt bx-spin"></i>';
  btn.disabled = true;

  const params = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    to_email: 'mabdullahanwar85@gmail.com',
  };

  emailjs.send('service_portfolio', 'template_portfolio', params)
    .then(() => {
      showToast('Message sent successfully!');
      this.reset();
    })
    .catch((error) => {
      console.error('FAILED...', error);
      showToast('Failed to send message. Please try again.', 'error');
    })
    .finally(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
    });
});
