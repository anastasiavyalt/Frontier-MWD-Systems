let heroSwiper = new Swiper('.hero__swiper-container', {
    speed: 400,
    pagination: {
        el: '.swiper-pagination',
        bulletElement: 'div',
        clickable: true,
    },
    loop: true,
});

let newsSwiper = new Swiper('.news__swiper-container', {
    speed: 400,
});