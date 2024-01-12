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
let posicion_carrusel = 0

const cargar_carrusel= (posicion)=>{
  img_caso_logo.src=dataCarrusel[posicion].img1
  img_caso_retrato.src=dataCarrusel[posicion].img2
  text_contenido.innerHTML=dataCarrusel[posicion].contenido
  text_autor.innerHTML=dataCarrusel[posicion].autor
  text_empresa.innerHTML=dataCarrusel[posicion].empresa
}

function retroceder_carrusel(){
  console.log("retroceder")
  posicion_carrusel--
  if(posicion_carrusel<0) posicion_carrusel=dataCarrusel.length-1
  cargar_carrusel(posicion_carrusel)  
}

function avanzar_carrusel(){
  console.log("avanzar")
  posicion_carrusel++
  if(posicion_carrusel>=dataCarrusel.length) posicion_carrusel=0
  cargar_carrusel(posicion_carrusel)
}

cargar_carrusel(0)


