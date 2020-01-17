$(function () {    
    /* skill-bar 애니메이션  */
    function skill_animate() {
        $(".skill-bar > div ").each(function () {
            var $this = $(this),
                skills = $this.data('width');
            $this.css({
                'width': skills + '%'
            });
            $('.skill-bar.design1 > div').stop().css({'width': '90%'});
            $('.skill-bar.design2 > div').stop().css({'width': '85%'});
            $('.skill-bar.coding1 > div').stop().css({'width': '90%'});
            $('.skill-bar.coding2 > div').stop().css({'width': '90%'});
            $('.skill-bar.coding3 > div').stop().css({'width': '65%'});
            $('.skill-bar.oa > div').stop().css({'width': '90%'});
        });
    }
    skill_animate();
    
    /* gnb 메뉴 스크롤 이동  */
    $('.gnb a:nth-of-type(1)').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
    });
    $('.gnb a:nth-of-type(2)').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 980}, 600);
    });
    $('.gnb a:nth-of-type(3)').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 1750}, 600);
    });
    $('.gnb a:nth-of-type(4)').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 2600}, 600);
    });
    $('.gnb a:nth-of-type(5)').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 3800}, 600);
    });
});
