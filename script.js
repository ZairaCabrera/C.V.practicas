document.addEventListener('DOMContentLoaded', function () {
    const experienciaCarousel = document.getElementById('experienciaCarousel');
    const proyectosCarousel = document.getElementById('proyectosCarousel');


    experienciaCarousel.addEventListener('slid.bs.carousel', function () {
        toggleArrowVisibility(experienciaCarousel);
    });


    proyectosCarousel.addEventListener('slid.bs.carousel', function () {
        toggleArrowVisibility(proyectosCarousel);
    });

    //ocultamos las flechas cuando se pulsen en el carrusel
    function toggleArrowVisibility(carousel) {
        const prevControl = carousel.querySelector('.carousel-control-prev');
        const nextControl = carousel.querySelector('.carousel-control-next');
        const activeItem = carousel.querySelector('.carousel-item.active');

        if (activeItem) {
            prevControl.classList.add('show-arrows');
            nextControl.classList.add('show-arrows');
        } else {
            prevControl.classList.remove('show-arrows');
            nextControl.classList.remove('show-arrows');
        }
    }


});
