new Typed('#element', {
    strings: ['Web Developer', 'Web Designer', 'UI / UX Designer', 'Video Editor'],
    typeSpeed: 60,
    loop: true
});

const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) { el.classList.add("active") }
    });
});

document.getElementById('darkBtn').onclick = () => document.body.classList.remove("light");
document.getElementById('lightBtn').onclick = () => document.body.classList.add("light");
