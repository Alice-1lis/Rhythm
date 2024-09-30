"use strict"

const reviewsSwiper = document.querySelector('.swiper-rewiews');

if (reviewsSwiper){
const swiper = new Swiper('.swiper-rewiews', {
    // Optional parameters
    pagination: {
    autoHeight: true,
    loop: true,
  
    // If we need pagination
      el: '.swiper-pagination',
      clickable: true,
    
  }, 
   // Navigation arrows
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  });
}