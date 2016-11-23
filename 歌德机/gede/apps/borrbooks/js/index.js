/**
 * @leovs 2015.4.7
 */
(function ($) {
    var pages = 0, _CID = null, useragent = navigator.appVersion, gedeid = useragent.match(/\w{32}$/img), readystr = [], readyend = {};

    var readyload = function(){
        var loadstr = readystr.shift();
        if(loadstr && loadstr.length > 0){
            if(readyend[loadstr]) return readyload();
            console.log("预加载" + loadstr + " 剩余任务:" + readystr.length);
            var iframme = $("<iframe/>").hide().appendTo($("body"));
            iframme.attr("src", loadstr).one("load", function(){
                readyend[loadstr] = true;
                console.log("完成");
                iframme.remove();
            });
        }
        window.setTimeout(readyload, 3000);
    };
    //window.setTimeout(readyload, 5000);

    // 加载图书
    displayBooks = function (dom, data) {
        $("ul", dom.attr("loaded", true)).empty();

        $(data.list).each(function (idx) {
            qrpath = escape("http://gede.5read.com/o/a.h?a=GEDE:" + encodeURIComponent(this.surl + "?m="+gedeid+"&c="+ (_CID==null?0:_CID)+"&t=2"));
            qrimg = $("<img/>").addClass("erwei").attr("src", "http://gede.ucdoo.com/server/qr?gedecache=3&qr=" + qrpath).load(function () {
                $(this).show();
            }).hide();
            if($(document).width()<=1081){
                console.log($(document).width());
                function aa(num) {
                    if (num < 4) {
                        return   "ul:eq(0)"
                    }
                    else if (num >= 4 && num < 8) {
                        return   "ul:eq(1)"
                    }
                    else if (num >= 8 && num < 12) {
                        return  "ul:eq(2)"
                    }
                    else {
                        return   "ul:eq(3)"
                    }
                }
                var li = $("<li/>").attr("bookNum", this.bookNum), bookshelf = $(aa(idx), dom),
                loadimg = $("<img/>").attr("src", "images/loading1.svg").addClass("loading"), qrpath,qrimg;
            }
            else if($(document).width()>1081){
                console.log($(document).width());
                var li = $("<li/>").attr("bookNum", this.bookNum),
                bookshelf = $( idx < 7 ? "ul:eq(0)" : "ul:eq(1)", dom),
                    loadimg = $("<img/>").attr("src", "images/loading1.svg").addClass("loading"), qrpath,qrimg;
            }

            //qrpath = escape("http://gede.ucdoo.com/server/apps/touchbook?cmd=qread&bookNum=" + this.bookNum + "&gedeid=" + gedeid + "&a=GEDE:" + escape(this.surl));
            //qrpath = escape("http://gede.5read.com/o/a.h?a=GEDE:" + escape(this.surl));

            li.append($("<img/>").width(196).height(276).attr("src", this.cover + "?gedecache=" + window.GEDE_VERSION).addClass("img").load(function () {
                loadimg.hide();
                $(this).css("opacity", "1");
            }).error(function () {
                this.src += '?';
            }));
            li.append($("<img/>").attr("src", "images/hotbook.png?gedecache=" + window.GEDE_VERSION).addClass("hotimg"));
            li.append($("<img/>").attr("src", "images/newbook.png?gedecache=" + window.GEDE_VERSION).addClass("newimg"));
            li.append(loadimg);

            if(this.hotbook == 1) {
                li.addClass("hotbook");
            } else  if(this.newbook == 1) {
                li.addClass("newbook");
            }

            var readersrc = "reader.html?gedecache=2&bookNum=" + $(this).attr("bookNum") + "&qr=" + qrpath;
            li.append(qrimg).click(function () {
                if (window.ismove || window.showbook) return;
                window.showbook = true;
                var loading = $(".loading", li).show(), showtime = window.setTimeout(function(){ window.showbook = false;}, 10000);

                $(".bookPup iframe").hide().attr({
                    src: readersrc
                }).load(function () {
                    if($(this).attr('src')!="about:blank"){
                        // 背景效果
                        $(".swiper-container,.Colle_con").css({
                            "transform": "translate(20px, 0px) scale3d(.96, .96, 1)",
                            "opacity": .6
                        });

                        $(".popshadow").show();
                        $(".bookPup").addClass("open");
                        loading.hide();
                        $(this).show();
                        window.showbook = false;
                        window.clearTimeout(showtime);
                    }
                });
            });
            bookshelf.append(li);
            // 预先加载内容
            readystr.push(readersrc);
        });
        for (i in document.images)document.images[i].ondragstart = function () {
            return false;
        };
    };

    var initBooks = function (data) {
        var main = $(".swiper-slide").empty();
        if (data && data.msg && data.result == 1) {
            // 初始化书架
            if (pages == 0) {
                for (var i = 0; i < (pages = data.msg.pageCount); i++) {
                    if($(document).width()<=1081){
                        var box = $('<div class="bookBox" id="bookBox"><div class="bookshelf"><ul></ul><div class="clear"></div></div><div class="bookshelf"><ul></ul><div class="clear"></div></div><div class="bookshelf"><ul></ul><div class="clear"></div></div><div class="bookshelf"><ul></ul><div class="clear"></div></div></div>');
                    }
                    else if($(document).width()>1081){
                        var box = $('<div class="bookBox" id="bookBox"><div class="bookshelf"><ul></ul><div class="clear"></div></div><div class="bookshelf"><ul></ul><div class="clear"></div></div></div>');
                    }
                    main.append(box.css("left", (i * 100) + "%").attr("loaded", false));
                }
                $(".swiper-slide").touchAction({
                    changepage: function (dom, page) {
                        if (page < 1) page = 1;
                        if (page > pages) page = pages;
                        $("#pageinfo").html([page, pages].join("/"));
                        if (dom.attr("loaded") == "true") return;
                        loadBooks(_CID, page, function (data) {
                            displayBooks(dom, data.msg);
                        });
                    }
                });
            }
            $("#pageinfo").html([1, pages].join("/"));
            displayBooks($(".bookBox:eq(0)", main), data.msg);
        }
        /* else {
         alert("图书加载失败.");
         }*/
    };

    !(loadBooks = function (id, page, fn) {
        window.clearTimeout(window.loadBooksTimeid);
        window.loadBooksTimeid = window.setTimeout(function(){
            var loading = $("#loading").show();
            $.ajax({
                type: "get",
                dataType: "json",
                url: "http://gede.ucdoo.com/server/apps/touchbook?gedecache=" + window.GEDE_VERSION + "&nocache=1&cmd=books&pageSize=14&id=" + (_CID = id) + "&page=" + (page == null ? 1 : page),
                success: function (data) {
                    loading.hide();
                    return fn(data);
                },
                error: function (xhr, err) {
                    //alert(xhr.responseText);
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
        }, 500);
    })(null, 1, initBooks);

    // 加载分类
    !function loadCatas() {
        $.ajax({
            type: "get",
            dataType: "json",
            url: "http://gede.ucdoo.com/server/apps/touchbook?cmd=bookCata&nocache=1&gedecache=" + window.GEDE_VERSION,
            success: function (data) {
                var wrapper = $("#wrapper"), colle = $(".Colle_con .screen .shadow"), conveyer = $(".conveyer", wrapper);
                if (data && data.result == 1) {
                    var ul = $("ul", wrapper), all = $("<li cid='' class='cur'><a>全部</a></li>").click(function () {
                        pages = 0;
                        loadBooks($(this).attr("cid"), 1, initBooks);
                        $(".cur", ul).removeClass("cur");
                        $(this).addClass("cur");
                        wrapper.height(60);
                    });
                    ul.append(all);
                    $(data.msg).each(function () {
                        var li = $("<li cid=" + this.id + "><a>" + this.cataname + "</a></li>").click(function () {
                            pages = 0;
                            loadBooks($(this).attr("cid"), 1, initBooks);
                            $(".cur", ul).removeClass("cur");
                            $(this).addClass("cur");
                            wrapper.height(60);
                        });
                        ul.append(li);
                    });
                    if (conveyer.height() > 60) {
                        var ch = conveyer.height() + 10;
                        colle.show().click(function () {
                            wrapper.height(wrapper.height() == ch ? 60 : ch);
                        })
                    }
                }
            },
            error: function (xhr, err) {
                //alert(xhr.responseText);
            }
        });
    }();

    $(document).bind("contextmenu", function (e) {
        return false;
    });
    window.onerror = function () {
        return true;
    }
})(jQuery);