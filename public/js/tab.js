define(['require', 'tab'], function(require) {
    var liNode = $("#navigator li");
    var tab = {
        switch: function() {
            liNode.each(function(index, value) {
                $(value).click(function() {
                    event.preventDefault()
                    liNode.removeClass('selected')
                    $(this).addClass('selected')
                    $(".newslist-container").empty();
                    if ($(this).data('index') == '') {
                        return
                    } else {
                        $.ajax({
                            type: 'get',
                            url: '/',
                            data: {
                                id: $(this).data('index')
                            }
                        }).done(function(results) {
                            if (results.success === 1) {
                                $.each(results.data, function(index, value) {
                                    console.log(value.title)
                                    createDiv(value.title, value.poster, value.updateAt,
                                        value.hot);
                                });
                            }
                        })
                    }
                })
            })
        }
    };
    /**
     * 动态添加
     * @param  {[type]} title [description]
     * @param  {[type]} img   [description]
     * @param  {[type]} time  [description]
     * @param  {[type]} hot   [description]
     * @return {[type]}       [description]
     */
    function createDiv(title, img, time, hot) {
        var index_item = $("<div>").addClass("index-list-item").appendTo($(".newslist-container"));
        var index_main = $("<div>").addClass("index-list-main showleft").appendTo(index_item);
        var index_img = $("<div>").addClass("index-list-image").appendTo(index_main);
        $("<i>").addClass("ivideoplay").appendTo(index_img);
        $("<img>").attr("src", "/upload/" + img).appendTo(index_img);
        var index_text = $("<div>").addClass("index-list-main-text").appendTo(index_main);
        var index_title = $("<div>").addClass("index-list-main-title").html(title).appendTo(index_text);
        var index_bottom = $("<div>").addClass("index-list-bottom").appendTo(index_text);
        var index_time = $("<div>").addClass("index-list-main-time").appendTo(index_bottom);
        $("<b>").addClass("tip-time").html(moment(time).format('MM/DD/YYYY')).appendTo(index_time);
        if (hot != "") {
            $("<b>").addClass("tip-hot tip-fillred").html(hot).appendTo(index_time);
        }
    }
    return tab;
});