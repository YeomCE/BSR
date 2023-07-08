
$(function(){
$('.center').not('.slick-initialized').slick({
    autoplay : false,
    autoplaySpeed : 2000,
    dots:false,
    draggable:true,
    arrows:true,
    adaptiveHeight:true,
    centerMode:true,
    centerPadding:'435px',
    
    

}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    /* 자바스크립트
    if (currentSlide !== nextSlide) {
        document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
            // timeout required or Slick will overwrite the classes
            setTimeout(() => next.classList.add('slick-current', 'slick-center'));
        });
    }
    */
    // IE 호환성을 고려한 제이쿼리
    if (currentSlide !== nextSlide) {
        $('.slick-center + .slick-cloned').each(function(index, node) {
            var $node = $(node);
            
            setTimeout(function() {
                $node.addClass('slick-current');
                $node.addClass('slick-center');
            });
        });
    }


    $('.slide_list .txt_title').removeClass('txt_color');

    switch (nextSlide) {
        case 0 :
          $('.slide_list .development').addClass("txt_color");
            break;
        case 1 :
          $('.slide_list .business').addClass("txt_color");
            break;
        case 2 :
          $('.slide_list .technique').addClass("txt_color");
            break;
    }
        

});
}); // 이 코드는 slick infinite 가 맨끝에서 다시 처음으로 돌아가거나 할때도 트랜지션이 적용되기 위한 코드입니다.


// $(".center").on("afterChange", function(event, slick, currentSlide, nextSlide){
    // $('.txt_title').removeClass('txt_color');
//     switch ($('.center').slick('slickCurrentSlide')) {
//         case 0 :
//           $('.development').addClass("txt_color");
//             break;
//         case 1 :
//           $('.business').addClass("txt_color");
//             break;
//         case 2 :
//           $('.technique').addClass("txt_color");
//             break;
//               }
//     });


/*
$(".center").on("beforeChange", function(event, slick, currentSlide, nextSlide){
    $('.txt_title').removeClass('txt_color');
    switch ($('.center').slick('slickCurrentSlide')) {
        case 0 :
          $('.development').addClass("txt_color");
            break;
        case 1 :
          $('.business').addClass("txt_color");
            break;
        case 2 :
          $('.technique').addClass("txt_color");
            break;
              }
    });
    */


$(function(){
    $('.development').click(function() {
        $('.center').slick('slickGoTo', 0);
    });
    $('.business').click(function() {
        $('.center').slick('slickGoTo', 1);
    });
    $('.technique').click(function() {
        $('.center').slick('slickGoTo', 2);
    });
});

$(function(){
$('.company_list_mobile .company_list_in').not('.slick-initialized').slick({
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });
});