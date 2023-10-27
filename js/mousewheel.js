$('.pager li').click(function() {
    let idx = $(this).index();
    let top = $('section').eq(idx).offset().top;
    $('html, body').stop().animate({
        'scrollTop' : top + 'px'
    });
});

let main = $('.mainContainer').offset().top;
if(main == 0) {$('.pager li').eq(0).addClass('on');}

$(window).scroll(function() {
    let windowTop = $(window).scrollTop();
    let menu = $('.menuContainer').offset().top;
    let category = $('.categoryContainer').offset().top;
    let info = $('.infoContainer').offset().top;

    if(windowTop >= 0 && windowTop < menu) {
        $('.pager li').eq(0).addClass('on');
        $('.pager li').eq(0).siblings().removeClass('on');
    } else if(windowTop < category) {
        $('.pager li').eq(1).addClass('on');
        $('.pager li').eq(1).siblings().removeClass('on');
    } else if(windowTop < info) {
        $('.pager li').eq(2).addClass('on');
        $('.pager li').eq(2).siblings().removeClass('on');
    } else {
        $('.pager li').eq(3).addClass('on');
        $('.pager li').eq(3).siblings().removeClass('on');
    }
});