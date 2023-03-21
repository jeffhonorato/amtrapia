var swiper = new Swiper(".swiper-programacao", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    // loop: true,
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });