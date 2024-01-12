console.log("hola")
const dataCarrusel= [
  {
    img1:"./img/img_seccion3/logo_caso1.png",
    img2:"./img/img_seccion3/retrato_caso1.png",
    contenido:'"Estoy muy agradecido con el trabajo de Selftech. Automatizaron varios procesos en mi empresa de manera muy eficaz, lo...',
    autor: "Giovanni Rimini de ",
    empresa:"Ricoseller"
  },
  {
    img1:"./img/img_seccion3/logo_caso2.png",
    img2:"./img/img_seccion3/retrato_caso2.png",
    contenido:'"Con SelfTech AI he llegado al exito en mi  emprendimiento, ahora tengo más clientes satisfechos".',
    autor: "Pablo Hernandez de ",
    empresa:"Mandala Garden"
  },
  {
    img1:"./img/img_seccion3/logo_caso3.png",
    img2:"./img/img_seccion3/retrato_caso3.png",
    contenido:'"La nueva era de la tecnología llego y no podría estar más satisfecho con el servicio de Selftech, ahora mi empresa es lider en sus servicios".',
    autor: "Andres Soto de ",
    empresa:"Freedelivery"
  },
]
const img_caso_logo = document.getElementById("img_caso_logo") 
const img_caso_retrato = document.getElementById("img_caso_retrato") 
const text_contenido = document.getElementById("text_contenido") 
const text_autor = document.getElementById("text_autor") 
const text_empresa = document.getElementById("text_empresa") 

const inicializar_carrusel= ()=>{
  img_caso_logo.src=dataCarrusel[0].img1
  img_caso_retrato.src=dataCarrusel[0].img2
  text_contenido.innerHTML=dataCarrusel[0].contenido
  text_autor.innerHTML=dataCarrusel[0].autor
  text_empresa.innerHTML=dataCarrusel[0].empresa
}


inicializar_carrusel()


