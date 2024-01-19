document.addEventListener("DOMContentLoaded", function () {
    let manosI = document.querySelector('.manosI');
    let manosD = document.querySelector('.manosD');

    function handleScroll() {
        let manosIRect = manosI.getBoundingClientRect();
        let manosDRect = manosD.getBoundingClientRect();

        if (manosIRect.top < window.innerHeight && manosIRect.bottom >= 100) {
            manosI.style.transform = 'scale(1.2) translate(40px, 40px)';
        } else {
            manosI.style.transform = 'none';
        }

        if (manosDRect.top < window.innerHeight && manosDRect.bottom >= 100) {
            manosD.style.transform = 'scale(1.2) translate(-40px, 40px)';
        } else {
            manosD.style.transform = 'none';
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    let onda1 = document.querySelector('.onda1');
    let onda2 = document.querySelector('.onda2');

    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;

        onda1.style.transform = `translateY(${100 - scrollPosition * 0.1}px)`;
        onda2.style.transform = `translateY(${-100 + scrollPosition * 0.1}px)`;
    });
});


