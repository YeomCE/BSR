window.onload = function() {

  /*pc 헤더*/
  var sectionOffset = $('.section01').offset();
  var navOffset = $('.pc').offset();
  

  $(window).scroll(function () {

    if ($(document).scrollTop() > (sectionOffset.top-(navOffset.top + $('.pc').outerHeight()))) {
      $('.pc').addClass('fixed');
    } else {
      $('.pc').removeClass('fixed');
    };
  });
  /*pc 헤더*/


  /*mobile 헤더*/
  var jbOffset = $('.mobile').offset();

  $(window).scroll(function () {
    if ($(document).scrollTop() > jbOffset.top) {
      $('.mobile').addClass('fixed_mobile');
    } else {
      $('.mobile').removeClass('fixed_mobile');
    }
  });
  /*mobile 헤더*/



 


  /*aside menu*/
  // $('.mobile .header_in ul').click(function () {
  //   $(this).toggleClass('toggle');
  //   $('.aside_menu').toggleClass('toggle');
  //   $('.aside_menu_back').toggleClass('toggle');
  // });

  // $('.aside_menu a').click(function () {
  //   $('.mobile .header_in ul').removeClass('toggle');
  //   $('.aside_menu').removeClass('toggle');
  //   $('.aside_menu_back').removeClass('toggle');
  // });
  
  $('.aside_menu a').click(function () {
    $('.mobile .header_in ul').removeClass('toggle');
    $('.aside_menu').removeClass('toggle');
    $('.aside_menu_back').removeClass('toggle');
  });
  /*aside menu*/



  /*솔루션*/
  $('.section01 .content .content_box').click(function () {
    $(this).addClass('hover_txt').siblings().removeClass('hover_txt');
  });
  /*솔루션*/


  /*커넥트*/
  $('.development').click(function(){
    $(this).addClass('txt_color').siblings().removeClass('txt_color')
    $('.tab_show_development').addClass('tab_show').siblings().removeClass('tab_show')
  });
  $('.business').click(function(){
      $(this).addClass('txt_color').siblings().removeClass('txt_color')
      $('.tab_show_business').addClass('tab_show').siblings().removeClass('tab_show')
  });
  $('.technique').click(function(){
      $(this).addClass('txt_color').siblings().removeClass('txt_color')
      $('.tab_show_technique').addClass('tab_show').siblings().removeClass('tab_show')
  });
  /*커넥트*/



  /*팝업*/
  $('.contact_checkbox p').click(function(){
    $('.popup_back').show();
  });
  $('.popup button').click(function(){
    $('.popup_back').hide();
  });
  /*팝업*/
};


function onMobileMenu() {
  if ($('.aside_menu').hasClass("toggle")) {
    $('.mobile .header_in ul').removeClass("toggle");
    $('.aside_menu').removeClass("toggle");
    $('.aside_menu_back').removeClass('toggle');
  } else {
    $('.mobile .header_in ul').addClass("toggle");
    $('.aside_menu').addClass("toggle");
    $('.aside_menu_back').addClass('toggle');
  }
  
}
