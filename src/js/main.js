// Responsive burger menu

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".header__show");
const body = document.querySelector(".body");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
  body.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
    body.classList.remove("active");
  })
);

// sl-main

$('.js-main-sl').slick({
  dots: true,
  customPaging : function(slider, i) {
    return '<a href="#"></a>';
  },
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

// sl-brends

function mobileOnlySlider() {
  $('.js-sl-brends').slick({
    dots: true,
    customPaging : function(slider, i) {
      return '<a href="#"></a>';
    },
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true
  });
}
if(window.innerWidth < 768) {
  mobileOnlySlider();
}
$(window).resize(function(e){
    if (window.innerWidth < 768) {
        if(!$('.js-sl-brends').hasClass('slick-initialized')){
            mobileOnlySlider();
        }
    } else {
        if($('.js-sl-brends').hasClass('slick-initialized')){
            $('.js-sl-brends').slick('unslick');
    }
  }
});

$(function() {
  $('.accordion li').click(function(){
    $(this).toggleClass(' active ');
    $(this).siblings().removeClass(' active '); 
    $('.accordion__submenu').stop().slideUp();
    $('.active .accordion__submenu').stop().slideDown();
    return false;
  });
});