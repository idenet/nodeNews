define(['require', 'carousel'], function(require) {
    var slider = $(".swiper");
    var dots = $(".carousel-nav div");
    var index = 1;
    var len = 3;
    var timer;
    var carousel = {
        go: function() {
            timer = setInterval(function() {
                moveRight();
            }, 3000);
        },
    };

    function moveRight() {
        if (slider.is(":animated")) {
            return;
        }
        if (index == 3) {
            index = 1;
        } else {
            index += 1;
        }
        animate(-380);
        tab();
    }
    /**
     * 移动动画
     *
     * @param      {(number|string)}  offset  The offset
     */
    function animate(offset) {
        var left = parseInt(slider.css("left")) + offset;
        if (offset > 0) {
            offset = "+=" + offset;
        } else {
            offset = "-=" + Math.abs(offset);
        }
        slider.animate({ 'left': offset }, 300, function() {
            if (left > -380) {
                slider.css("left", -380 * len);
            }
            if (left < (-380 * len)) {
                slider.css("left", -380);
            }
        });
    }
    /**
     * 点跟着走
     * @return {[type]} [description]
     */
    function tab() {
        dots.eq(index - 1).addClass("on").siblings().removeClass("on");
    }
    return carousel;
});
