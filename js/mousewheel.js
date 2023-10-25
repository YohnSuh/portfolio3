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

// 페이지 로드 시 너비 변경
if ($(window).width() >= 768) {
    $('section').mousewheel(function(e, d) {
        if (d < 0) {
            let nextSection = $(this).next().offset().top;
            $('html, body').stop().animate({
                'scrollTop': nextSection + 'px'
            });
        } else if (d > 0) {
            let prevSection = $(this).prev().offset().top;
            $('html, body').stop().animate({
                'scrollTop': prevSection + 'px'
            });
        }
    });
}

// 창 너비 변경 시
$(window).resize(function() {
    if ($(window).width() >= 768) {
        $('section').off('mousewheel').mousewheel(function(e, d) {
            if (d < 0) {
                let nextSection = $(this).next().offset().top;
                $('html, body').stop().animate({
                    'scrollTop': nextSection + 'px'
                });
            } else if (d > 0) {
                let prevSection = $(this).prev().offset().top;
                $('html, body').stop().animate({
                    'scrollTop': prevSection + 'px'
                });
            }
        });
    } else {
        $('section').off('mousewheel');
    }
});