$(function () {    
    console.log($(window).scrollTop());
    /* skill-bar 애니메이션  */
    function skill_animate() {
        $(".skill-bar > div ").each(function () {
            var $this = $(this),
                skills = $this.data('width');
            $this.css({
                'width': skills + '%'
            });
            $('.skill-bar.design1 > div').stop().animate({'width': '90%'},1500);
            $('.skill-bar.design2 > div').stop().animate({'width': '85%'},1500);
            $('.skill-bar.coding1 > div').stop().animate({'width': '90%'},1500);
            $('.skill-bar.coding2 > div').stop().animate({'width': '90%'},1500);
            $('.skill-bar.coding3 > div').stop().animate({'width': '65%'},1500);
            $('.skill-bar.oa > div').stop().animate({'width': '90%'},1500);
        });
    }
    skill_animate();
    
    /* gnb 메뉴 스크롤 이동  */
    var aboutPosition = $("#about").offset().top;
    var skillPosition = $("#skills").offset().top;
    var portfolioPosition = $("#portfolio").offset().top;
    var contactPosition = $("#contact").offset().top;
    $('.gnb li:nth-of-type(1) a, .m-gnb li:nth-of-type(1) a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
    });
    $('.gnb li:nth-of-type(2) a, .m-gnb li:nth-of-type(2) a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: aboutPosition}, 600);
    });
    $('.gnb li:nth-of-type(3) a, .m-gnb li:nth-of-type(3) a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: skillPosition}, 600);
    });
    $('.gnb li:nth-of-type(4) a, .m-gnb li:nth-of-type(4) a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: portfolioPosition}, 600);
    });
    $('.gnb li:nth-of-type(5) a, .m-gnb li:nth-of-type(5) a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: contactPosition}, 600);
    });
    
    /* */
    $('.m-menu-btn').click(function () {
        $('.m-gnb li').find('ul').stop().slideUp();
        if ($(this).hasClass('on')) {
            $('html, body').removeClass('ony');
            $('.m-gnb').slideToggle();
            $(this).removeClass('on');
        } else {
            $('html, body').addClass('ony');
            $('.m-gnb').slideToggle();
            $(this).addClass('on');
        }
    });
});
