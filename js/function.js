$(function () {
    var typingBool = false;
    var typingIdx = 0;
    var typingTxt = $(".typing-txt").text();
    typingTxt = typingTxt.split("");
    if (typingBool == false) {
        typingBool = true;

        var tyInt = setInterval(typing, 100);
    }

    function typing() {
        if (typingIdx < typingTxt.length) {
            $(".typing").append(typingTxt[typingIdx]);
            typingIdx++;
        } else {
            clearInterval(tyInt);
        }
    }

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
        $('html, body').animate({scrollTop: 1600}, 600);
    });
    $('.gnb a:nth-of-type(4)').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 2450}, 600);
    });
});
