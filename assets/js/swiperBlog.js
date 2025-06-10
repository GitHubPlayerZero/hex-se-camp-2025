import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

new Swiper('.swiper', {
  spaceBetween: 24, // 幻燈片之間的水平間距 24px
  navigation: {
    prevEl: '.swiper-button-prev',  // 導航按鈕 (切換上一個)
    nextEl: '.swiper-button-next',  // 導航按鈕 (切換下一個)
  },
  slidesPerView: 1, // 一次顯示 1 張
  // RWD 斷點 (以手機優先)
  breakpoints: {
    // 桌機
    1200: {
      slidesPerView: 3,
    },
  },
});
