$(function () {
  'use strict';

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
  });

  $('.engineers_slider').slick({
      dots: false,
      arrows: true,
      nextArrow: '<i class="fas fa-long-arrow-right port_next"></i>',
      prevArrow: '<i class="fas fa-long-arrow-left port_prev"></i>',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
  });

  // Nice Scroll 

  $(".niceScroll").niceScroll({
    cursorborder:"",
    cursorcolor:"#18A7B9",
    boxzoom:true
  });
  

});