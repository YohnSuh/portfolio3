$('section').mousewheel(function(e, d) {
    if(d < 0) {
        let nextSection = $(this).next().offset().top;
        $('html, body').stop().animate({
            'scrollTop' : nextSection + 'px'
        });
    } else if(d > 0) {
        let prevSection = $(this).prev().offset().top;
        $('html, body').stop().animate({
            'scrollTop' : prevSection + 'px'
        });
    }
});