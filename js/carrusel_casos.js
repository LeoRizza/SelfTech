console.log("hola")
const dataCarrusel = [
  {
    img1: "./img/img_seccion3/logo_caso1.png",
    img2: "./img/img_seccion3/retrato_caso1.png",
    contenido: 'Estoy muy agradecido con el trabajo de Selftech.  Automatizaron varios procesos en mi empresa de manera muy eficaz, lo mejor que es una gran empresa, muy confiable. Estoy muy agradecido con el trabajo de Selftech.  Automatizaron varios procesos en mi empresa de manera muy eficaz, lo mejor que es una gran empresa, muy confiable',
    autor: "Giovanni Rimini de ",
    empresa: "Ricoseller"
  },
  {
    img1: "./img/img_seccion3/logo_caso2.png",
    img2: "./img/img_seccion3/retrato_caso2.png",
    contenido: 'Con SelfTech AI he llegado al exito en mi  emprendimiento, ahora tengo más clientes satisfechos.',
    autor: "Pablo Hernandez de ",
    empresa: "Mandala Garden"
  },
  {
    img1: "./img/img_seccion3/logo_caso3.png",
    img2: "./img/img_seccion3/retrato_caso3.png",
    contenido: 'La nueva era de la tecnología llego y no podría estar más satisfecho con el servicio de Selftech, ahora mi empresa es lider en sus servicios.',
    autor: "Andres Soto de ",
    empresa: "Freedelivery"
  },
]
const img_caso_logo = document.querySelectorAll(".img_caso_logo")
const img_caso_retrato = document.querySelectorAll(".img_caso_retrato")
const text_contenido = document.querySelectorAll(".caso_text_contenido")
const text_autor = document.querySelectorAll(".caso_text_autor")
const text_empresa = document.querySelectorAll(".caso_text_empresa")
const casos_contenido_movil = document.getElementById("casos_contenido_movil")
const casos_contenido_desktop = document.getElementById("casos_contenido_desktop")
let posicion_carrusel = 0


const cargar_carrusel = (posicion) => {
  img_caso_logo.forEach((elemento) => {
    elemento.src = dataCarrusel[posicion].img1
  })
  img_caso_retrato.forEach((elemento) => {
    elemento.src = dataCarrusel[posicion].img2
  })
  text_contenido.forEach((elemento) => {
    elemento.innerHTML = `"${dataCarrusel[posicion].contenido}"`
    console.log(elemento.scrollHeight)
    console.log(elemento.clientHeight)
    if (elemento.scrollHeight > elemento.clientHeight) {
      mostrarLeerMas(true)
    }
    const casos_exito_contenido_leer_id= document.getElementById("casos_exito_contenido_leer_id")
    casos_exito_contenido_leer_id.innerText = truncarTexto(elemento.innerText,80)


  })
  text_autor.forEach((elemento) => {
    elemento.innerHTML = dataCarrusel[posicion].autor
  })
  text_empresa.forEach((elemento) => {
    elemento.innerHTML = dataCarrusel[posicion].empresa
  })


}

function resetear_estilos_carrusel(){
  casos_contenido_movil.style.overflow
  casos_exito_movile_id.style.height = "";
  mostrarLeerMas(false)
}

function retroceder_carrusel() {
  console.log("retroceder")
  resetear_estilos_carrusel()
  posicion_carrusel--
  if (posicion_carrusel < 0) posicion_carrusel = dataCarrusel.length - 1
  cargar_carrusel(posicion_carrusel)
}

function avanzar_carrusel() {
  console.log("avanzar")
  resetear_estilos_carrusel()
  posicion_carrusel++
  if (posicion_carrusel >= dataCarrusel.length) posicion_carrusel = 0
  cargar_carrusel(posicion_carrusel)
}

function truncarTexto(texto, limite) {
  if (texto.length > limite) {
    // Buscar el primer espacio después del límite
    var indiceEspacio = texto.indexOf(' ', limite);

    // Truncar el texto y agregar "..."
    if (indiceEspacio !== -1) {
      texto = texto.substring(0, indiceEspacio) + '...';
    } else {
      // Si no hay espacio después del límite, simplemente truncar
      texto = texto.substring(0, limite) + '...';
    }
  }
  return texto;
}


function iniciar(){
  mostrarLeerMas(false)
  cargar_carrusel(posicion_carrusel)

}

function mostrarLeerMas(mostrar){
  console.log(mostrar)
  const casos_contenido_movil_mas = document.getElementById("casos_contenido_movil_mas")  
  casos_contenido_movil.style.display=mostrar?"none":"block"
  casos_contenido_movil_mas.style.display=mostrar?"flex":"none"

}

function leer_mas(){



  mostrarLeerMas(false)
  const incremento_caja=casos_contenido_movil.scrollHeight - casos_contenido_movil.clientHeight

  const casos_exito_movile_id = document.getElementById("casos_exito_movile_id")
  const casos_exito_movile_styles = window.getComputedStyle(casos_exito_movile_id);
  const alturaActual = casos_exito_movile_styles.getPropertyValue("height");

  // Parsea la altura actual a un número (removiendo "px" al final)
  const alturaActualNum = parseFloat(alturaActual.replace("px", ""));

  // Calcula la nueva altura sumando el incremento
  const nuevaAltura = alturaActualNum + incremento_caja;

  // Asigna la nueva altura al elemento
  casos_exito_movile_id.style.height = nuevaAltura + "px";
  casos_contenido_movil.style.overflow="visible"

}
iniciar()
