$(function () {
  'use strict';

  $('.countup').counterUp({
    delay: 10,
    time: 1000
  });

  // Menu fix

  var navtop = $('#main_menu').offset().top;

  $(window).scroll(function () {

    var navscroll = $(this).scrollTop();

    if (navscroll > navtop) {
      $('#main_menu').addClass('fix_nav');
    } 
    else {
      $('#main_menu').removeClass('fix_nav');
    }
  });

  // venobox

  $('.venobox').venobox();

  // Bact to Top

  $('.backtotop').click(function () {

    $('html,body').animate({
      scrollTop: 0,
    }, 3000);

  });

  $(window).scroll(function () {

    var scrolltop = $(this).scrollTop();

    if (scrolltop > 200) {

      $('.backtotop').addClass('fix_backtotop');

      $('.backtotop').fadeIn('fix_backtotop');

    } else {

      $('.backtotop').removeClass('fix_backtotop');

      $('.backtotop').fadeOut('fix_backtotop');

    }
  });

  // Slider 

  $('.sponer_slider').slick({
      dots: false,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1401,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
      ]
  });

  $('.engineers_slider').slick({
      dots: false,
      arrows: true,
      nextArrow: '<i class="fas fa-long-arrow-right port_next"></i>',
      prevArrow: '<i class="fas fa-long-arrow-left port_prev"></i>',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      responsive: [
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      ]
  });

  // Nice Scroll 

  $(".niceScroll").niceScroll({
    cursorborder:"",
    cursorcolor:"#18A7B9",
    boxzoom:true
  });

  
  

});