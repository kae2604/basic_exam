$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    loop: true,
    center: true,
    startPosition: 1,
    responsive:{
        0:{
            items:1

        },
        1100:{
            items:3,

        }
    }

})



var trigger = document.getElementById('toggle');
var box = document.getElementById('menu');

toggle.addEventListener('click', function() {
    box.classList.toggle('active');
});