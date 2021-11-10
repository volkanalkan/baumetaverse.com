$(document).ready(function(){


  $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    // scroll-up button show/hide script
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
  }else{
      $('.scroll-up-btn').removeClass("show");
  }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });


  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });



  $('.top-nav .nav-link').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });
  
  // toggle menu/navbar script
  $('.menu-toggler').click(function(){
    $('.navbar .menu').toggleClass("active");
  });

  $('.menu-btn').click(function(){
    $('.navbar .menu').removeClass("active");
  });

  $('.menu-btn').click(function(){
    $('.menu-toggler').removeClass('open');
  });

  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0:{
          items: 1,
          nav: false
        },
        600:{
          items: 2,
          nav: false
        },
        1000:{
          items: 3,
          nav: false
        }
      }
    });
});

$('button').click(function(){
  $('.alert').removeClass("hide")
  $('.alert').addClass("show")
  $('.alert').addClass("showAlert")
  setTimeout(function(){
    $('.alert').addClass("hide")
    $('.alert').removeClass("show")
  },5000); //hide allert after 5s
});
$('.close-btn').click(function(){
  $('.alert').addClass("hide")
  $('.alert').removeClass("show")
});


AOS.init({
  easing: 'ease',
  duration: 1000,
  once: true
});

setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 1200);
