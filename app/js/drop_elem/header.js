$(document).ready(function () {

  /**
   * popup effect for language selected menu
   */
  $('.language-select').on('click', function () {
    $(this).toggleClass('open', 600);
  });

  $('.language-select li').on('click', function () {
    let dataLangSelect = $(this).data('lang');
    $('.language-select').data('location', dataLangSelect);
    $('.language-select li').removeClass('active');
    $(this).toggleClass('active');
  });


  /**
   * popup effect for currency selected menu
   */
  $('.currency-select').on('click', function () {
    $(this).toggleClass('open', 600);
  });

  $('.currency-select li').on('click', function () {
    let dataCurrSelect = $(this).data('lang');
    $('.currency-select').data('location', dataCurrSelect);
    $('.currency-select li').removeClass('active');
    $(this).toggleClass('active');
  });


  $('.slider_single_page').slick({
    arrows: false,
    dots: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 6000,
  });
 /* $('.slider_single_page').slick({
    arrows: false
  });*/

  $(document).on('click', '.arrow-right', function(){
    $('.slider_single_page').slick('slickPrev');
  });

  $(document).on('click', '.arrow-left', function(){
    $('.slider_single_page').slick('slickNext');
  });

});

