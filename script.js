new Typed('#element', {
    strings: ['Web Developer', 'Web Designer', 'UI / UX Designer', 'Video Editor'],
    typeSpeed: 60,
    loop: true
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.getElementById('darkBtn').onclick = () => document.body.classList.remove("light");
document.getElementById('lightBtn').onclick = () => document.body.classList.add("light");
