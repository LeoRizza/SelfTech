let nav = document.querySelector("#nav");
let abrir = document.querySelector("#abrir")
let cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
    abrir.classList.add("ocultar");
    cerrar.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.classList.remove("ocultar");
    cerrar.classList.remove("visible");
})


$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.header').addClass("blur");
    } else {
        $(".header").removeClass("blur");
    }
});
