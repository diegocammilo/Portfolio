document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

window.addEventListener('scroll', ()=>{
    const pagetop=window.pageYOffset<=0;
    const containerscroll=document.querySelector('.containerscroll');
    containerscroll.style.display=pagetop?'none':'block';
},false)