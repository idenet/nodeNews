define(['require', 'more'], function(require) {
    var more = { 
        add: function() {
            $("#index_view_navigator ul li:nth-child(11)").click(function() {
                $(this).hide();
                $(".two").show();
                $("#more").show();
            });
        },
        less:function(){
        	$("#more li:nth-child(5)").click(function(){
        		$("#more").hide();
        		$(".two").hide();
        		$("#index_view_navigator ul li:nth-child(11)").show();
        	});
        }
    };
    return more;
});
