$(document).ready(function(){
  if(window.innerWidth < 992) {
    $("ul .fa-caret-down").click(function(e){
      $(this).siblings('.dd').fadeToggle()
    });
  }
});


let toggleIcon = document.querySelector('.icon')

toggleIcon.onclick = function() {
  toggleIcon.classList.toggle('active')
}

let responsiveNavButton = document.querySelector('.icon'),
    responsiveNavMenu = document.querySelector('nav#responsive')

responsiveNavButton.addEventListener('click', toggleNav)

function toggleNav(){
  responsiveNavMenu.style.left === '0%' ? responsiveNavMenu.style.left = '-100%' : responsiveNavMenu.style.left = '0%'
}

$(document).ready(function(){
  $('.your-class').slick({
    arrows : false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
     responsive: [
    {
      breakpoint: 10000,
      settings: {
       arrows : true
      }
    },
    {
      breakpoint: 768,
      settings: {
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
  $('.testimonial').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500
  });
});
$(document).ready(function(){
  $('.your-class2').slick({
    arrows: true,
    slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});