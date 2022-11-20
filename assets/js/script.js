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

  $('.annousment_details_carousel').slick({
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      asNavFor: '.annousment_details_carousel_nav'
  });
  $('.annousment_details_carousel_nav').slick({
      dots: false,
      arrows: false,
      vertical: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      verticalSwiping: true,
      asNavFor: '.annousment_details_carousel',
      responsive: [
          {
              breakpoint: 376,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 426,
              settings: {
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 4
              }
          }
      ]
  });

  // Fixed Content 

  var offset = $('.pixel_count').offset().top;

  $(window).on('scroll', function () {
      var annc_right = $(this).scrollTop();
      if (annc_right > offset) {
          $('.accoucement_filter').addClass('accoucement_filter_fix');
      } else {
          $('.accoucement_filter').removeClass('accoucement_filter_fix');
      }
  });

  $(window).on('scroll', function () {
      var is_right = $(this).scrollTop();
      if (is_right > offset) {
          $('.issue_filter').addClass('issue_filter_fix');
      } else {
          $('.issue_filter').removeClass('issue_filter_fix');
      }
  });



});