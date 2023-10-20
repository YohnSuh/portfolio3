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

let sns = new Swiper('.snsSwiper', {
    slidesPerView : 4,
    slidesPerGroup: 1,
    loop: true,
    autoplay: true,
    breakpoints: {
        1024: {
            slidesPerView: 6,
            slidesPerGroup: 1,
            loop: true
        },
        768: {
            slidesPerView: 5,
            slidesPerGroup: 1,
            loop: true
        }
    }
});