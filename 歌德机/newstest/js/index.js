/**
 * @leovs 2015.4.7
 */
(function ($) {
    var pages = {1: {offset: 0, limit:100}}, loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 400, easingIn : mina.easeinout } );

    var displayNews = function(datas){
        var content = $('<div class="f-content"/>'), size = ["", "w-25", "w-50", "w-75", "w-100"];
        $.each(datas, function (idx) {
            var body = $('<div class="box box-b-r h-50">').addClass(size[this.size]);
            var cnt = $('<div class="content"></div>').append($("<h3/>").html(this.title + '<span>' + this.createTime + '</span>')).append($("<div/>").html(this.context));
            content.append(body.append(cnt));
            body.touchClick(function(){
                var _this = $(this), detail = $(".detail");
                loader.show();
                setTimeout( function() {
                    detail.show();
                    $(".content", detail).html(_this.html()).show();
                    loader.hide();
                }, 800);

                $(".detail .close").touchClick(function(){
                    loader.show();
                    setTimeout( function() {
                        detail.hide();
                        loader.hide();
                    }, 800);
                });
            });
        });
        return content;
    };

    var initNewss = function (data, page) {
        var main = $(".f-main").empty();
        if (data && data.total > 0) {
            var laycount = 0, datas = [], pageCount = 0;
            $.each(data.rows, function (idx) {
                datas.push(this);
                if ((laycount += this.size )> 7) {
                    main.append(displayNews(datas).css("left", (pageCount ++ * 100) + "%"));
                    datas = [];
                    laycount = 0;
                }
            });
            if(laycount > 0){
                main.append(displayNews(datas).css("left", (pageCount ++ * 100) + "%"));
            }
        } else {
            main.append("暂无新闻");
        }

        main.touchAction({
            changepage: function (dom, page) {

            }
        });
    };

    !(loadNewss = function (id, page, fn) {
        var loading = $("#loading").show();
        $.ajax({
            type: "get",
            dataType: "json",
            //url: "/server/apps/news?gedecache=" + window.GEDE_VERSION + "&cmd=news&limit=" + (pages[page].limit || 8) + "&offset=" + (pages[page].offset || 0),
			url:"http://42.62.107.135:81/Item/listastest.asp?id=1601",
            success: function (data) {
                loading.hide();
                return fn(data, page);
            },
            error: function (xhr, err) {
                loading.hide();
            },
            statusCode: {
                403: function (xhr) {
                    var text = xhr.responseText.split("/");
                    if (text.length < 2) {
                        alert(xhr.responseText);
                    } else {
                        alert(text.join(" "));
                    }
                }
            }
        });
    })(null, 1, initNewss);
})(jQuery);

$(document).bind("contextmenu", function (e) {
    return false;
});
$(window).resize(function () {
    $(".f-main").width($(window).width()).height($(window).height());
}).resize();