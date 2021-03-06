window.onload = function() {
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
            type: 'bullets',
            renderBullet: (index, className) => {
                return `<div class="${ className }"></div>`;
            },
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

    /* MAP */
    let mapSection = document.querySelector(".international-sales");
    let map = document.querySelector("#map");
    let mapInfo = document.querySelector(".international-sales__content");

    let world = document.querySelector(".international-sales__link-world");
    let russia = document.querySelector(".international-sales__link-russia");

    let toDefaultState = function() {
        map.classList.remove("international-sales__map--show");
        mapInfo.classList.remove("international-sales__content--hide");
        myMap.balloon.close();
    }

    let showMapOnly = function() {
        map.classList.add("international-sales__map--show");
        mapInfo.classList.add("international-sales__content--hide");
    }

    ymaps.ready(init);
    let myMap;
    function init(){
        myMap = new ymaps.Map("map", {
            center: [41.76081169, 15.44756297],
            zoom: 3,
            controls: ['zoomControl']
        });
        let objectManager = new ymaps.ObjectManager();
        let data = {
            type: "FeatureCollection",
            features: [
                {type: "Feature", id: 0, geometry: {type: "Point", coordinates: [58.03349406, 56.31889484]}, options:{iconLayout: "default#image", iconImageHref: "img/map-mark.svg", iconImageSize: [24, 24], iconImageOffset: [-12, -12], hideIconOnBalloonOpen: false}, properties: {hintContent:"Perm, Russia", balloonContentHeader: "Perm", balloonContentBody: "<p>Ulitsa Nagornaya, 48</p> <p>+7(987)0395647</p>" }},
                {type: "Feature", id: 1, geometry: {type: "Point", coordinates: [56.81775674, 53.17859847]}, options:{iconLayout: "default#image", iconImageHref: "img/map-mark.svg", iconImageSize: [24, 24], iconImageOffset: [-12, -12], hideIconOnBalloonOpen: false}, properties: {hintContent:"Izhevsk, Russia", balloonContentHeader: "Izhevsk", balloonContentBody: "<p>Ulitsa Azina, 151</p> <p>+7(907)2355427</p>" }},
                {type: "Feature", id: 2, geometry: {type: "Point", coordinates: [53.754941, 87.178304]}, options:{iconLayout: "default#image", iconImageHref: "img/map-mark.svg", iconImageSize: [24, 24], iconImageOffset: [-12, -12], hideIconOnBalloonOpen: false}, properties: {hintContent:"Novokuznetsk, Russia", balloonContentHeader: "Novokuznetsk", balloonContentBody: "<p>Transportnaya Ulitsa, 130</p> <p>+7(904)2235671</p>" }},
                {type: "Feature", id: 3, geometry: {type: "Point", coordinates: [62.535609, 113.973649]}, options:{iconLayout: "default#image", iconImageHref: "img/map-mark.svg", iconImageSize: [24, 24], iconImageOffset: [-12, -12], hideIconOnBalloonOpen: false}, properties: {hintContent:"Mirny, Russia", balloonContentHeader: "Mirny", balloonContentBody: "<p>Leningradskiy Prospekt, 17</p> <p>+7(904)2235671</p>" }},
                {type: "Feature", id: 4, geometry: {type: "Point", coordinates: [65.950785, 111.490029]}, options:{iconLayout: "default#image", iconImageHref: "img/map-mark.svg", iconImageSize: [24, 24], iconImageOffset: [-12, -12], hideIconOnBalloonOpen: false}, properties: {hintContent:"Aykhal, Russia", balloonContentHeader: "Aykhal", balloonContentBody: "<p>Yubileynaya Ulitsa, 7</p> <p>+7(904)2235671</p>" }},
                {type: "Feature", id: 5, geometry: {type: "Point", coordinates: [47.998588, 0.213707]}, options:{iconLayout: "default#image", iconImageHref: "img/map-mark.svg", iconImageSize: [24, 24], iconImageOffset: [-12, -12], hideIconOnBalloonOpen: false}, properties: {hintContent:"Le Mans, France", balloonContentHeader: "Le Mans", balloonContentBody: "<p>167 Avenue Bollée</p> <p>+7(904)2235671</p>" }},
                {type: "Feature", id: 6, geometry: {type: "Point", coordinates: [29.966610, 40.191799]}, options:{iconLayout: "default#image", iconImageHref: "img/map-mark.svg", iconImageSize: [24, 24], iconImageOffset: [-12, -12], hideIconOnBalloonOpen: false}, properties: {hintContent:"Sakakah, Saudi Arabia", balloonContentHeader: "Sakakah ", balloonContentBody: "<p>Riyadh 13321</p> <p>+7(904)2235671</p>" }},
                {type: "Feature", id: 7, geometry: {type: "Point", coordinates: [-3.213097, -52.220608]}, options:{iconLayout: "default#image", iconImageHref: "img/map-mark.svg", iconImageSize: [24, 24], iconImageOffset: [-12, -12], hideIconOnBalloonOpen: false}, properties: {hintContent:"Premem, Brazil", balloonContentHeader: "Premem", balloonContentBody: "<p>R. da Granja 134</p> <p>+7(904)2235671</p>" }},
                {type: "Feature", id: 8, geometry: {type: "Point", coordinates: [32.830207, -79.956709]}, options:{iconLayout: "default#image", iconImageHref: "img/map-mark.svg", iconImageSize: [24, 24], iconImageOffset: [-12, -12]}, hideIconOnBalloonOpen: false, properties: {hintContent:"Charleston, USA", balloonContentHeader: "Charleston", balloonContentBody: "<p>1911 Doscher Avenue</p> <p>+7(904)2235671</p>" }},
                {type: "Feature", id: 9, geometry: {type: "Point", coordinates: [38.568814, -121.480052]}, options:{iconLayout: "default#image", iconImageHref: "img/map-mark.svg", iconImageSize: [24, 24], iconImageOffset: [-12, -12], hideIconOnBalloonOpen: false}, properties: {hintContent:"Sacramento, USA", balloonContentHeader: "Sacramento", balloonContentBody: "<p>1615 22nd St</p> <p>+7(904)2235671</p>" }},
            ]
        };

        objectManager.add(data);
        myMap.geoObjects.add(objectManager);

        myMap.geoObjects.events.add('click', function () {
            showMapOnly();
        });

        myMap.events.add("actiontick", function() {
            showMapOnly();
        })
    }

    mapSection.addEventListener('mouseleave', function () {
        myMap.setCenter([41.76081169, 15.44756297], 3, {
            duration: 800
        });
        russia.classList.remove("international-sales__link--active");
        world.classList.add("international-sales__link--active");
        toDefaultState();
    });

    world.addEventListener("click", function() {
        myMap.setCenter([41.76081169, 15.44756297], 3, {
            duration: 800
        });
        russia.classList.remove("international-sales__link--active");
        world.classList.add("international-sales__link--active");
    });

    russia.addEventListener("click", function() {
        myMap.setCenter([64.70252961, 93.36983371], 4, {
            duration: 800
        });
        russia.classList.add("international-sales__link--active");
        world.classList.remove("international-sales__link--active");
        showMapOnly();
    });
    

};

