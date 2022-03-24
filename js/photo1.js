/*
'use strict'
*/

const swiper = new Swiper(".mySwiper", {
    slidesPerView : 3,
    observer: true,	// 추가
    observeParents: true,

    pagination : {
        //페이지 기능
        el : '.swiper-pagination',
        //클릭 가능여부
        clickable : true,
    },

    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    }

});