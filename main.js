// ANIMACIONES AL SCROLLEAR

AOS.init();

// DECLARACIÓN DE VARIABLES

let nav = document.querySelector("#nav");
let header = document.querySelector("#header")
let burguer = document.querySelector("#burguer")
let scrolldown = document.querySelector("#scroll-down")

// SCROLL DOWN

window.onscroll = function () {
    let y1 = window.scrollY;

    // Manejo del primer fragmento de código
    if (y1 > 5) {
        header.classList.add("blur");
    } else {
        header.classList.remove("blur");
    }

    // Manejo del segundo fragmento de código
    let y2 = window.scrollY;
    if (y2 > 10) {
        scrolldown.classList.add("goodbye");
    } else {
        scrolldown.classList.remove("goodbye");
    }
};

// MENÚ HAMBURGUESA

burguer.addEventListener("click", () => {
    burguer.classList.toggle("active");
    nav.classList.toggle("visible");
    header.classList.toggle("mobile");
});

/* burger close */
let navButtons = document.querySelectorAll(".nav-button, .nav-button2");

navButtons.forEach((button) => {
    button.addEventListener("click", () => {
        burguer.classList.remove("active");
        nav.classList.remove("visible");
        header.classList.remove("mobile");
    });
});


// BLUR DEL NAVBAR AL SCROLLEAR

// window.onscroll = function () {
//     let y = window.scrollY;
//     if (y > 5) {
//         header.classList.add("blur");
//     } else {
//         header.classList.remove("blur");
//     }
// };

// ANIMACIÓN DE TIPEO EN TÍTULO

let typed = new Typed('.typed', {
    strings: ['fidelización', 'contención', 'optimización'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
});

// PARTICULAS ANIMADAS DE FONDO

particlesJS(
    {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": "#338b86"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
);

//Manos

document.addEventListener("DOMContentLoaded", function () {
    let manosI = document.querySelector('.manosI');
    let manosD = document.querySelector('.manosD');

    function handleScroll() {
        let manosIRect = manosI.getBoundingClientRect();
        let manosDRect = manosD.getBoundingClientRect();

        let rangoVerticalCentral = window.innerHeight * 0.1;
        let centroManosI = (manosIRect.top + manosIRect.bottom) / 2;
        let centroManosD = (manosDRect.top + manosDRect.bottom) / 2;

        if (centroManosI >= rangoVerticalCentral && centroManosI <= window.innerHeight + rangoVerticalCentral) {
            manosI.classList.add('animatedI');
        } else {
            manosI.classList.remove('animatedI');
        }

        if (centroManosD >= rangoVerticalCentral && centroManosD <= window.innerHeight + rangoVerticalCentral) {
            manosD.classList.add('animatedD');
        } else {
            manosD.classList.remove('animatedD');
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});

//ondas servicios

document.addEventListener("DOMContentLoaded", function () {
    let waveLeo1 = document.querySelector('.waveLeo1');
    let waveLeo2 = document.querySelector('.waveLeo2');

    const velocidadAnimacion = 0.001;
    const rangoMovimiento = 40;

    function animateWaves() {
        let scrollActual = window.scrollY;

        let desplazamiento1 = rangoMovimiento * Math.sin(velocidadAnimacion * scrollActual);
        waveLeo1.style.transform = `translateY(${desplazamiento1}px)`;
        waveLeo1.style.opacity = 1 - Math.abs(desplazamiento1 / rangoMovimiento);

        let desplazamiento2 = rangoMovimiento * Math.sin(velocidadAnimacion * scrollActual + Math.PI);
        waveLeo2.style.transform = `translateY(${desplazamiento2}px)`;
        waveLeo2.style.opacity = 1 - Math.abs(desplazamiento2 / rangoMovimiento);
    }

    function handleScroll() {
        animateWaves();
    }

    window.addEventListener('scroll', handleScroll);

    animateWaves();
});

/* mano formulario/calendly */
const formulario_mano_animar = document.getElementById("scroll-image");
let scrollActual = 0;

window.addEventListener("scroll", function () {
    const desplazamientoVertical = 100;
    const deltaScroll = scrollActual - window.scrollY;
    scrollActual = window.scrollY;

    if (deltaScroll > 0) {
        // Desplazamiento hacia arriba
        formulario_mano_animar.style.transform = `translateY(${desplazamientoVertical}px)`;
    } else if (deltaScroll < 0) {
        // Desplazamiento hacia abajo
        formulario_mano_animar.style.transform = `translateY(0)`;
    }
});

/* const formulario_mano_animar = document.getElementById("scroll-image");
let ultimaDireccionScroll = '';
let ultimoScroll = 0;

window.addEventListener("scroll", function () {
    const desplazamientoVertical = 100;

    if (ultimaDireccionScroll !== 'arriba') {
        formulario_mano_animar.style.transform = `translateY(${desplazamientoVertical}px)`;
        ultimaDireccionScroll = 'arriba';
    } else {
        formulario_mano_animar.style.transform = `translateY(0)`;
        ultimaDireccionScroll = 'abajo';
    }
}); */

/* 
document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.getElementById('image-container');
    const scrollImage = document.getElementById('scroll-image');

    document.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const containerHeight = imageContainer.offsetHeight;
        const imageHeight = scrollImage.offsetHeight;

        const maxTranslateY = containerHeight - imageHeight;

        let translateY = Math.min(0, Math.max(-scrollPosition / 2, -maxTranslateY));

        scrollImage.style.transform = `translateY(${translateY}px)`;
    });

    window.dispatchEvent(new Event('scroll'));
}); */


/* Carrusel */

const dataCarrusel = [
    {
        img1: "./img/img_seccion3/logo_caso1.png",
        img2: "./img/img_seccion3/retrato_caso1.png",
        contenido: 'Estoy muy agradecido con el trabajo de Selftech. Automatizaron varios procesos en mi empresa de manera muy eficaz, lo mejor que es una gran empresa, muy confiable. Estoy muy agradecido con el trabajo de Selftech. Automatizaron varios procesos en mi empresa de manera muy eficaz, lo mejor que es una gran empresa, muy confiable',
        autor: "Giovanni Rimini de ",
        empresa: "Ricoseller"
    },
    {
        img1: "./img/img_seccion3/logo_caso2.png",
        img2: "./img/img_seccion3/retrato_caso2.png",
        contenido: 'Con SelfTech AI he llegado al éxito en mi emprendimiento, ahora tengo más clientes satisfechos.',
        autor: "Pablo Hernandez de ",
        empresa: "Mandala Garden"
    },
    {
        img1: "./img/img_seccion3/logo_caso3.png",
        img2: "./img/img_seccion3/retrato_caso3.png",
        contenido: 'La nueva era de la tecnología llego y no podría estar más satisfecho con el servicio de Selftech, ahora mi empresa es líder en sus servicios.',
        autor: "Andres Soto de ",
        empresa: "Freedelivery"
    },
];

const img_caso_logo = document.querySelectorAll(".img_caso_logo");
const img_caso_retrato = document.querySelectorAll(".img_caso_retrato");
const text_contenido = document.querySelectorAll(".caso_text_contenido");
const text_autor = document.querySelectorAll(".caso_text_autor");
const text_empresa = document.querySelectorAll(".caso_text_empresa");
const casos_contenido_movil = document.getElementById("casos_contenido_movil");
const casos_exito_movile_id = document.getElementById("casos_exito_movile_id");
const casos_contenido_movil_mas = document.getElementById("casos_contenido_movil_mas");
const casos_exito_contenido_leer_id = document.getElementById("casos_exito_contenido_leer_id");
const text_contenido_leer_desktop = document.getElementById("casos_exito_contenido_leer_desktop_id");
const text_contenido_leer_movil = document.getElementById("casos_exito_contenido_leer_id");
const text_contenido_desktop = document.getElementById("casos_contenido_desktop");
const text_contenido_movil = document.getElementById("casos_contenido_movil");
const casos_exito_box_desktop = document.getElementById("casos_exito_box_desktop");
const casos_contenido_desktop = document.getElementById("casos_contenido_desktop");
const casos_exito_leer_mas = document.getElementById("casos_contenido_desktop_mas");
const casos_exito_contenido_leer_desktop_id = document.getElementById("casos_exito_contenido_leer_desktop_id");

let posicion_carrusel = 0;

const cerrarModal = () => {
    const modal = document.getElementById("casos_exito_modal");
    modal.style.display = "none";
    overlay.style.display = 'none';
};

const cargar_carrusel = (posicion) => {
    img_caso_logo.forEach((elemento) => {
        elemento.src = dataCarrusel[posicion].img1;
    });

    img_caso_retrato.forEach((elemento) => {
        elemento.src = dataCarrusel[posicion].img2;
    });

    const contenido = dataCarrusel[posicion].contenido;
    const textoTruncado = truncarTexto(contenido, 80);

    // Asignar texto truncado a los elementos correspondientes
    text_contenido_leer_desktop.innerHTML = textoTruncado;
    text_contenido_leer_movil.innerHTML = textoTruncado;
    text_contenido_desktop.innerHTML = textoTruncado;
    text_contenido_movil.innerHTML = textoTruncado;
    casos_contenido_movil.innerHTML = contenido;

    mostrarLeerMas(contenido.length > 80);

    if (contenido.length > 80) {
        text_contenido[0].innerHTML = `<span class="truncado">${textoTruncado}</span>`;
    } else {
        text_contenido[0].innerHTML = `<span class="truncado">${contenido}</span>`;
    }

    text_autor.forEach((elemento) => {
        elemento.innerHTML = dataCarrusel[posicion].autor;
    });

    text_empresa.forEach((elemento) => {
        elemento.innerHTML = dataCarrusel[posicion].empresa;
    });

};


function resetear_estilos_carrusel() {
    casos_contenido_movil.style.overflow = "hidden";
    casos_exito_movile_id.style.height = "";
    casos_exito_box_desktop.style.height = "";
    casos_contenido_desktop.style.overflow = "hidden";
    mostrarLeerMas(false);
}

function retroceder_carrusel() {
    resetear_estilos_carrusel();
    posicion_carrusel--;

    if (posicion_carrusel < 0) {
        posicion_carrusel = dataCarrusel.length - 1;
    }

    cargar_carrusel(posicion_carrusel);
}

function avanzar_carrusel() {
    resetear_estilos_carrusel();
    posicion_carrusel++;

    if (posicion_carrusel >= dataCarrusel.length) {
        posicion_carrusel = 0;
    }

    cargar_carrusel(posicion_carrusel);
}

function truncarTexto(texto, limite) {
    return texto.slice(0, limite) + (texto.length > limite ? '...' : '');
}

function iniciar() {
    mostrarLeerMas(false);
    cargar_carrusel(posicion_carrusel);
}

function mostrarLeerMas(mostrar) {
    casos_contenido_movil.style.display = mostrar ? "none" : "block";
    casos_contenido_movil_mas.style.display = mostrar ? "flex" : "none";
    casos_exito_leer_mas.style.display = mostrar ? "flex" : "none";
    casos_contenido_desktop.style.display = mostrar ? "none" : "block";
    casos_exito_contenido_leer_desktop_id.style.display = mostrar ? "block" : "none";
}

function leer_mas() {
    const contenidoCompleto = dataCarrusel[posicion_carrusel].contenido;

    const modalContenido = document.getElementById("casos_contenido_movil");
    modalContenido.innerHTML = contenidoCompleto;

    text_contenido[0].innerHTML = `<span class="truncado">${text_contenido}</span>`;

    const modal = document.getElementById("casos_exito_modal");
    modal.style.display = "block";
    overlay.style.display = 'block';

    const contenido = dataCarrusel[posicion].contenido;
    text_contenido.forEach((elemento) => {
        const textoTruncado = truncarTexto(contenido, 20);
        mostrarLeerMas(contenido.length > 20);
        if (contenido.length > 20) {
            elemento.innerHTML = `<span class="truncado">${textoTruncado}</span><span class="completo">${contenido}</span>`;
        } else {
            elemento.innerHTML = `<span class="truncado">${contenido}</span>`;
        }
    });


    mostrarLeerMas(true);

    // Permitir desplazamiento en el modal
    casos_contenido_movil.style.overflow = "visible";
    casos_contenido_desktop.style.overflow = "visible";
}

iniciar();

/* window.addEventListener('resize', function () {
    resetear_estilos_carrusel();
    cargar_carrusel(posicion_carrusel);
}); */
