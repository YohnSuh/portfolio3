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