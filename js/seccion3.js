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
const casos_exito_movile_id = document.getElementById("casos_exito_movile_id")
const casos_contenido_movil_mas = document.getElementById("casos_contenido_movil_mas")
const casos_exito_contenido_leer_id = document.getElementById("casos_exito_contenido_leer_id")


const casos_exito_box_desktop = document.getElementById("casos_exito_box_desktop")
const casos_contenido_desktop = document.getElementById("casos_contenido_desktop")
const casos_exito_leer_mas = document.getElementById("casos_contenido_desktop_mas")
const casos_exito_contenido_leer_desktop_id = document.getElementById("casos_exito_contenido_leer_desktop_id")



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

    casos_exito_contenido_leer_id.innerText = truncarTexto(elemento.innerText, 80)
    casos_exito_contenido_leer_desktop_id.innerText = truncarTexto(elemento.innerText, 80)


  })
  text_autor.forEach((elemento) => {
    elemento.innerHTML = dataCarrusel[posicion].autor
  })
  text_empresa.forEach((elemento) => {
    elemento.innerHTML = dataCarrusel[posicion].empresa
  })


}

function resetear_estilos_carrusel() {
  casos_contenido_movil.style.overflow="hidden"
  casos_exito_movile_id.style.height = "";
  casos_exito_box_desktop.style.height = "";
  casos_contenido_desktop.style.overflow="hidden"
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


function iniciar() {
  mostrarLeerMas(false)
  cargar_carrusel(posicion_carrusel)

}

function mostrarLeerMas(mostrar) {
  console.log(mostrar)

  casos_contenido_movil.style.display = mostrar ? "none" : "block"
  casos_contenido_movil_mas.style.display = mostrar ? "flex" : "none"
  casos_exito_leer_mas.style.display = mostrar ? "flex" : "none"
  casos_contenido_desktop.style.display = mostrar ? "none" : "block"
}

function leer_mas() {



  mostrarLeerMas(false)
  const incremento_caja = casos_contenido_movil.scrollHeight - casos_contenido_movil.clientHeight
  
  actualizarAlturaCasosExito(incremento_caja,casos_exito_movile_id)
  const incremento_cajadesktop = casos_contenido_desktop.scrollHeight - casos_contenido_desktop.clientHeight

  actualizarAlturaCasosExito(incremento_cajadesktop,casos_exito_box_desktop)


  casos_contenido_movil.style.overflow = "visible"
  casos_contenido_desktop.style.overflow = "visible"

}

function actualizarAlturaCasosExito(incremento_caja,caja_exito){

  const casos_exito_movile_styles = window.getComputedStyle(caja_exito);
  const alturaActual = casos_exito_movile_styles.getPropertyValue("height");

  // Parsea la altura actual a un número (removiendo "px" al final)
  const alturaActualNum = parseFloat(alturaActual.replace("px", ""));

  // Calcula la nueva altura sumando el incremento
  const nuevaAltura = alturaActualNum + incremento_caja;

  // Asigna la nueva altura al elemento
  caja_exito.style.height = nuevaAltura + "px";
}
iniciar()
window.addEventListener('resize', function() {
  resetear_estilos_carrusel()
  cargar_carrusel(posicion_carrusel)
});
const formulario_mano_animar = document.getElementById("formulario_mano_animar")
let ultimaDireccionScroll = '';
let ultimoScroll = 0
window.addEventListener("scroll", function(){
  const desplazamientoVertical = 100;
    if (ultimaDireccionScroll !== 'arriba') {
      // Aplica desplazamiento vertical si hay movimiento hacia arriba
      formulario_mano_animar.style.transform = `translateY(${desplazamientoVertical}px)`;
      ultimaDireccionScroll = 'arriba';
    } else {
      // Detiene el desplazamiento si no hay movimiento hacia arriba
      formulario_mano_animar.style.transform = 'translateY(0)';
      ultimaDireccionScroll = 'abajo';
    }
  
})

