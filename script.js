const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

    const typed = new Typed('#element', {
      strings: ['Web Developer,', 'UI/UX Designer,', 'video editor,', 'Microsoft Professional,', 'AI Learner',],
      typeSpeed: 50,
    });

document.getElementById('darkBtn').onclick = () => document.body.classList.remove("light");
document.getElementById('lightBtn').onclick = () => document.body.classList.add("light");
