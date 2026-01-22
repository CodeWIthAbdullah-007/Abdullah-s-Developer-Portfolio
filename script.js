const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

new Typed('#element', {
    strings: ['Web Developer', 'Web Designer', 'UI / UX Designer', 'Video Editor'],
    typeSpeed: 60,
    loop: true
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.getElementById('darkBtn').onclick = () => document.body.classList.remove("light");
document.getElementById('lightBtn').onclick = () => document.body.classList.add("light");
