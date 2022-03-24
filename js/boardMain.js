

//슬라이더 1

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 700, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 700, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('.control_prev').click(function () {
        moveLeft();
    });

    $('.control_next').click(function () {
        moveRight();
    });

}); 

const swiper = new Swiper(".mySwiper", {
    slidesPerView : 3,
    observer: true,   // 추가
    observeParents: true,

    pagination : {
        //페이지 기능
        el : '.swiper-pagination',
        //클릭 가능여부
        clickable : true,
    },

    /*navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    }*/

    navigation: {
        nextEl: ".control_next",
        prevEl: ".control_prev",
    }
});


   