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