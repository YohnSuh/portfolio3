// gng메뉴 아코디언으로 나타나게
$('.gnb-menu h3').click(function() {
    $(this).toggleClass('active');
    $(this).parent().siblings().find('h3').removeClass('active');
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().find('.gnb-in').stop().slideUp();
});

// 햄버거 메뉴 클릭 시 메뉴 x로 바뀌고 nav 나타나게
$('.hamburger').click(function() {
    $(this).toggleClass('hamburger_on');
    $('nav').toggleClass('menu_on');
});
