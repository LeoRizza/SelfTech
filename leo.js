/* document.addEventListener("DOMContentLoaded", function () {
    let manosI = document.querySelector('.manosI');
    let manosD = document.querySelector('.manosD');

    function handleScroll() {
        let manosIRect = manosI.getBoundingClientRect();
        let manosDRect = manosD.getBoundingClientRect();

        if (manosIRect.top < window.innerHeight && manosIRect.bottom >= 0) {
            manosI.style.transform = 'scale(1.3) translate(40px, 40px)';
        } else {
            manosI.style.transform = 'none';
        }

        if (manosDRect.top < window.innerHeight && manosDRect.bottom >= 0) {
            manosD.style.transform = 'scale(1.3) translate(-40px, 40px)';
        } else {
            manosD.style.transform = 'none';
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
}); */

/* document.addEventListener("DOMContentLoaded", function () {
    let manosI = document.querySelector('.manosI');
    let manosD = document.querySelector('.manosD');

    function handleScroll() {
        let manosIRect = manosI.getBoundingClientRect();
        let manosDRect = manosD.getBoundingClientRect();

        // Definir el rango vertical central deseado (50vh)
        let rangoVerticalCentral = window.innerHeight * 0.5;

        // Calcular la posición vertical del centro de las manos
        let centroManosI = (manosIRect.top + manosIRect.bottom) / 2;
        let centroManosD = (manosDRect.top + manosDRect.bottom) / 2;

        // Verificar si el centro de las manos está dentro del rango vertical central
        if (centroManosI >= rangoVerticalCentral && centroManosI <= window.innerHeight + rangoVerticalCentral) {
            manosI.style.transform = 'scale(1.3) translate(40px, 40px)';
        } else {
            manosI.style.transform = 'none';
        }

        if (centroManosD >= rangoVerticalCentral && centroManosD <= window.innerHeight + rangoVerticalCentral) {
            manosD.style.transform = 'scale(1.3) translate(-40px, 40px)';
        } else {
            manosD.style.transform = 'none';
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
}); */

document.addEventListener("DOMContentLoaded", function () {
    let manosI = document.querySelector('.manosI');
    let manosD = document.querySelector('.manosD');

    function handleScroll() {
        let manosIRect = manosI.getBoundingClientRect();
        let manosDRect = manosD.getBoundingClientRect();

        let rangoVerticalCentral = window.innerHeight * 0.5;
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

document.addEventListener("DOMContentLoaded", function () {
    let onda1 = document.querySelector('.onda1');
    let onda2 = document.querySelector('.onda2');

    // Definir límites máximos y mínimos
    const maxDesplazamiento = 20;
    const minDesplazamiento = -20;

    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;

        // Calcular el desplazamiento para onda1 y limitarlo entre minDesplazamiento y maxDesplazamiento
        let desplazamiento1 = Math.min(maxDesplazamiento, Math.max(minDesplazamiento, 20 - scrollPosition * 2));
        onda1.style.transform = `translateY(${desplazamiento1}px)`;

        // Calcular el desplazamiento para onda2 y limitarlo entre minDesplazamiento y maxDesplazamiento
        let desplazamiento2 = Math.min(maxDesplazamiento, Math.max(minDesplazamiento, -20 + scrollPosition * 2));
        onda2.style.transform = `translateY(${desplazamiento2}px)`;
    });
});



/* document.addEventListener("DOMContentLoaded", function () {
    let onda1 = document.querySelector('.onda1');
    let onda2 = document.querySelector('.onda2');

    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;

        onda1.style.transform = `translateY(${100 - scrollPosition * 0.1}px)`;
        onda2.style.transform = `translateY(${-100 + scrollPosition * 0.1}px)`;
    });
}); */


