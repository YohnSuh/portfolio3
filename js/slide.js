let center = new Swiper('.centerSlide', {
    effect : 'fade',
    touchRatio : 0,
    parallax : true,
    loop : true
});

let swiper = new Swiper('.mainSlide', {
    parallax: true,
    effect : 'fade',
    loop : true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    thumbs: {swiper : center},
});

/* section2 : menu 슬라이드 너비에 따라 swiper 적용/미적용 */
let ww = $(window).width();
let menuSwiper = undefined;
let idxSwiper = undefined;

function initSwiper() {
    if(ww <= 768 && menuSwiper == undefined) {
        idxSwiper = new Swiper('.idxSlide', {
            loop : true,
            slidesPerView : 5
        });
        menuSwiper = new Swiper('.menuSwiper', {
            loop : true,
            thumbs : {swiper : idxSwiper}
        });
    } else if(ww > 768 && menuSwiper != undefined) {
        menuSwiper.destroy();
        idxSwiper.destroy();
        menuSwiper = undefined;
        idxSwiper = undefined;
    }
};

initSwiper();

$(window).on('resize', function() {
    ww = $(window).width();
    initSwiper();
});

/* section3 : sns 슬라이드 */
let sns = new Swiper('.snsSwiper', {
    slidesPerView : 4,
    loop: true,
    loopAdditionalSlides : 1,
    speed : 3500,
    autoplay: {
        delay : 0,
        disableOnInteraction : false
    },
    breakpoints: {
        1024: {
            slidesPerView: 6
        },
        768: {
            slidesPerView: 5
        }
    }
});