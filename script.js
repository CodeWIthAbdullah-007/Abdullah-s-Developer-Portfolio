new Typed('#element',{
    strings:['Web Developer','Web Designer','UI / UX Designer','Video Editor'],
    typeSpeed:60,
    loop:true
});

document.getElementById('darkBtn').onclick=()=>document.body.classList.remove("light");
document.getElementById('lightBtn').onclick=()=>document.body.classList.add("light");
