$(function() {
  var swiper = new Swiper('.carousel-gallery .swiper-container', {
    effect: 'slide',
    speed: 900,
    slidesPerView: 8, // Ajustado para exibir 8 slides
    spaceBetween: 20,
    simulateTouch: true,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    pagination: {
      el: '.carousel-gallery .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      425: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1024: { // Adicionado breakpoint para telas maiores
        slidesPerView: 5,
        spaceBetween: 20
      },
      1440: { // Adicionado breakpoint para telas grandes
        slidesPerView: 8,
        spaceBetween: 20
      }
    }
  });
});