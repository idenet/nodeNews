define(['require', 'feedback'], function(require) {
    var feedback = {
        goBack: function() {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 300) {
                    $(".go-top-trigger").show();
                    $(".feedback-trigger").show();
                } else {
                    $(".go-top-trigger").hide();
                    $(".feedback-trigger").hide();
                }
            });
        },
        back: function() {
            $(".go-top-trigger").click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 300);
                return false;
            });
        }
    }
    return feedback;
});
