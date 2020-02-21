/* Header */
let browserHeight = document.documentElement.clientHeight;
let header = document.querySelector(".header");
let logo = document.querySelector(".header__logo");
window.onscroll = () => {
    let yPosition = window.pageYOffset;
    if(yPosition > browserHeight) {
        header.classList.add("header--light-theme");
        logo.classList.add("header__logo--light-theme");
    } else if(yPosition <= browserHeight) {
        header.classList.remove("header--light-theme");
        logo.classList.remove("header__logo--light-theme");
    }
}

/* Swipers */
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
    spaceBetween: 20,
    slidesPerView: 3,
    slidesOffsetBefore: document.documentElement.clientWidth * 0.17,
});