define(['require', 'scrollbar'], function(require) {
    var scroll = $("#scrollbar");
    var stepsize = $("#scrollbar li:first-child").height();
    var index = $("#scrollbar").height() / stepsize;
    var scrollbar = {
        loop: function() {
            setInterval(verticalloop, 2000);
        }
    };
    /**
     * 垂直滚动
     * @return {[type]} [description]
     */
    function verticalloop() {
        if (scroll.is(":animated")) {
            return;
        }
        scroll.animate({
            "margin-top": parseInt(scroll.css("margin-top")) - stepsize + "px"
        }, 800, function() {
            if (parseInt(scroll.css("margin-top")) <= (-(index - 1) * stepsize)) {
                scroll.css("margin-top", "0px");
            }
        });
    }
    return scrollbar;
});
