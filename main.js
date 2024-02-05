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
    // Seleccionar las ondas
    let waveLeo1 = document.querySelector('.waveLeo1');
    let waveLeo2 = document.querySelector('.waveLeo2');

    // Configuración inicial
    const desplazamientoInicial = 50;
    const velocidadAnimacion = 0.005; // Puedes ajustar la velocidad de la animación modificando este valor
    const rangoMovimiento = 20; // Puedes ajustar el rango de movimiento modificando este valor
    let ultimoScroll = 0;

    function animateWaves() {
        // Detectar la dirección del scroll
        let scrollActual = window.scrollY;
        let direccionScroll = (scrollActual > ultimoScroll) ? 1 : -1;

        // Calcular el desplazamiento para waveLeo1 y ajustarlo al tiempo
        let desplazamiento1 = rangoMovimiento * Math.sin(velocidadAnimacion * scrollActual);
        waveLeo1.style.transform = `translateY(${desplazamiento1 * direccionScroll}px)`;

        // Calcular el desplazamiento para waveLeo2 y ajustarlo al tiempo
        let desplazamiento2 = rangoMovimiento * Math.sin(velocidadAnimacion * scrollActual + Math.PI); // Desplazamiento opuesto
        waveLeo2.style.transform = `translateY(${desplazamiento2 * direccionScroll}px)`;

        // Actualizar el último scroll
        ultimoScroll = scrollActual;

        // Solicitar el próximo cuadro de animación
        requestAnimationFrame(animateWaves);
    }

    // Iniciar la animación
    animateWaves();
});

// Carrusel
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
        contenido: 'Con SelfTech AI he llegado al éxito en mi emprendimiento, ahora tengo más clientes satisfechos. Con SelfTech AI he llegado al éxito en mi emprendimiento, ahora tengo más clientes satisfechos. Con SelfTech AI he llegado al éxito en mi emprendimiento, ahora tengo más clientes satisfechos',
        autor: "Pablo Hernandez de ",
        empresa: "Mandala Garden"
    },
    {
        img1: "./img/img_seccion3/logo_caso3.png",
        img2: "./img/img_seccion3/retrato_caso3.png",
        contenido: 'La nueva era de la tecnología llegó y no podría estar más satisfecho con el servicio de Selftech, ahora mi empresa es líder en sus servicios. La nueva era de la tecnología llegó y no podría estar más satisfecho con el servicio de Selftech, ahora mi empresa es líder en sus servicios.',
        autor: "Andres Soto de ",
        empresa: "Freedelivery"
    }
];

let posicion_carrusel = 0;

const text_contenido_movil = document.querySelectorAll('.casos_exito_contenido_leer_mas-movil');
const text_autor_movil = document.querySelectorAll('.caso_text_autor-movil');
const text_empresa_movil = document.querySelectorAll('.casos_exito_autor-tipo-movil');
const btnLeerMasMovil = document.getElementById("btn_leermas_movil");
const img_caso_logo = document.querySelectorAll('.img_caso_logo');
const img_caso_retrato = document.querySelectorAll('.img_caso_retrato');
const text_contenido = document.querySelectorAll('.casos_exito_contenido_leer_mas');
const text_autor = document.querySelectorAll('.caso_text_autor');
const text_empresa = document.querySelectorAll('.casos_exito_autor-tipo');
const btnLeerMas = document.getElementById("btn_leermas");

function truncarTexto(texto, numeroPalabras) {
    const palabras = texto.split(' ');
    const textoTruncado = palabras.slice(0, numeroPalabras).join(' ');
    return textoTruncado;
}

const mostrarLeerMas = (mostrar) => {
    btnLeerMas.style.display = mostrar ? 'block' : 'none';
};

const abrirVentanaEmergente = (contenido) => {
    const ventanaEmergente = window.open('', 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=800px,height=500px');

    ventanaEmergente.document.write(`
        <!-- ... -->
        <p class="casos_exito_contenido caso_text_contenido" id="casos_contenido_movil">${contenido}</p>
        <!-- ... -->
    `);

    ventanaEmergente.focus();
};

const cargarCarrusel = (posicion) => {
    img_caso_logo.forEach((elemento) => {
        elemento.src = dataCarrusel[posicion].img1;
    });
    img_caso_retrato.forEach((elemento) => {
        elemento.src = dataCarrusel[posicion].img2;
    });

    // Obtener la versión truncada del contenido
    const contenidoCompleto = dataCarrusel[posicion].contenido;
    const contenidoTruncado = truncarTexto(contenidoCompleto, 10); // Cambiado a 10 palabras

    // Actualizar el contenido en la sección desktop
    document.getElementById("casos_exito_contenido_leer_mas").innerHTML = `"${contenidoTruncado}"`;

    // Actualizar el contenido en la sección móvil
    document.getElementById("casos_exito_contenido_leer_mas_movil").innerHTML = `"${contenidoTruncado}"`;

    text_contenido.forEach((elemento) => {
        elemento.innerHTML = `"${contenidoTruncado}"`;
        mostrarLeerMas(elemento.scrollHeight > elemento.clientHeight);
    });

    text_contenido_movil.forEach((elemento) => {
        elemento.innerHTML = `"${contenidoTruncado}"`;
        mostrarLeerMas(elemento.scrollHeight > elemento.clientHeight);
    });

    text_autor.forEach((elemento) => {
        elemento.innerHTML = dataCarrusel[posicion].autor;
    });
    text_autor_movil.forEach((elemento) => {
        elemento.innerHTML = dataCarrusel[posicion].autor;
    });

    text_empresa.forEach((elemento) => {
        elemento.innerHTML = dataCarrusel[posicion].empresa;
    });

    text_empresa_movil.forEach((elemento) => {
        elemento.innerHTML = dataCarrusel[posicion].empresa;
    });

    // También actualiza el evento click del botón "Leer Más" en ambas secciones
    btnLeerMas.removeEventListener("click", () => {
        abrirVentanaEmergente(contenidoCompleto);
    });

    btnLeerMas.addEventListener("click", () => {
        abrirVentanaEmergente(contenidoCompleto);
    });

    btnLeerMasMovil.removeEventListener("click", () => {
        abrirVentanaEmergente(contenidoCompleto);
    });

    btnLeerMasMovil.addEventListener("click", () => {
        abrirVentanaEmergente(contenidoCompleto);
    });
};

const avanzar_carrusel = () => {
    posicion_carrusel = (posicion_carrusel + 1) % dataCarrusel.length;
    cargarCarrusel(posicion_carrusel);
};

const retroceder_carrusel = () => {
    posicion_carrusel = (posicion_carrusel - 1 + dataCarrusel.length) % dataCarrusel.length;
    cargarCarrusel(posicion_carrusel);
};

// Agregar el event listener del botón Leer Más una sola vez
btnLeerMas.removeEventListener("click", () => {
    abrirVentanaEmergente(dataCarrusel[posicion_carrusel].contenido);
});

btnLeerMas.addEventListener("click", () => {
    abrirVentanaEmergente(dataCarrusel[posicion_carrusel].contenido);
});

// Evento click del botón "Leer Más" en la sección móvil
btnLeerMasMovil.removeEventListener("click", () => {
    abrirVentanaEmergente(dataCarrusel[posicion_carrusel].contenido);
});

btnLeerMasMovil.addEventListener("click", () => {
    abrirVentanaEmergente(dataCarrusel[posicion_carrusel].contenido);
});

cargarCarrusel(posicion_carrusel);