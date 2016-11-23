// 模版0
define(function (require, exports, module) {
    $.ajaxSetup({cache: true});

    // 生成界面
    var main;
    $.ajax({
        type: "get",
        url: "http://localhost:63342/template/0/ejs/main.ejs",
        async: false,
        dataType: "text",
        success: function (data) {
            main = data
        }
    });
    $("body").append(main).addClass("zbg");
    $("#container").height($(window).height());


    seajs.use("/template/0/js/all", function () {
        window._CONFIG = $.extend({
            "name": "",
            "logo": "",
            "background": "",
            "passport": "",
            "booktemplate": "1",
            "picshows": [],
            "apps": "borrbooks,dvideo_local,magazines,news,subject,96524318225203217,96524318225203305,",
            "shutdown": "",
            "notice": "通知：周五下午体育大学羽毛球，一起happy去吧！",
            "template": "0",
            "applist": {
                "news": {"id": 3, "name": "信息动态", "url": "news", "aid": 3, "logo": ""},
               /* "news11": {"id": 11, "name": "信息动态", "url": "news", "aid": 11, "logo": ""},
                "news12": {"id": 12, "name": "信息动态", "url": "news", "aid": 12, "logo": ""},*/
                "subject": {"id": 129, "name": "特色专题", "url": "subject", "aid": 4, "logo": ""},
                "borrbooks": {"id": 447, "name": "图书借阅", "url": "borrbooks", "aid": 1, "logo": ""},
                "dvideo_local": {"id": 1028, "name": "桌面视频（本地）", "url": "dvideo_local", "aid": 69, "logo": ""},
                "96524318225203217": {
                    "id": 1183,
                    "name": "名师讲坛有声读物",
                    "url": "/server/authorize?key=a17adb99ea33db89b3443c03f96e85a0&redirect_uri=http%3a%2f%2f122%2e112%2e16%2e227%3a81%2frs%2fapps%2fmsjtsound%2findex%2ehtml%3fgedecache%3d1&gedecache=50f0e27da61cb4402bbfcc966db3c15d",
                    "aid": 73,
                    "logo": "/images/logos/73.png?gedecache=1459221334009"
                },
                "books": {"id": 1240, "name": "图书借阅测试APP", "url": "books", "aid": 74},
                "96524318225203305": {
                    "id": 1248,
                    "name": "馆藏查询",
                    "url": "/server/authorize?key=3fcac36b6c2a677b1cd9505bfb10a2d&redirect_uri=http%3a%2f%2fgede%2e5read%2ecom%2fother%2fopac%2fopacCrawl%2fcrawlSearch%2ejspx%3fschoolid%3d6923%26pageSize%3d10%26pid%3d2&gedecache=cdff6770b29f8cfe920664780a7f2c0d",
                    "aid": 75,
                    "logo": "/images/logos/75.png?gedecache=1462498220942"
                },
                "magazines": {
                    "id": 1277,
                    "name": "期刊杂志",
                    "url": "magazines",
                    "aid": 76,
                    "logo": "/images/logos/76.png?gedecache=1463393084779"
                }
            }
        }, window._CONFIG);
        //获取模板app中是否有“桌面视频（dvideo）”
        try {
            var obj = window._CONFIG.apps.split(",");
            for (var i = 0; i < obj.length; i++) {
                if (obj[i] == 'dvideo' || obj[i] == 'dvideo_local') {
                    window._CONFIG.HASDIVEO = true;
                }
            }
        } catch (e) {
        }

        // 生成APP布局
        seajs.use("/template/0/js/metro", function (layout) {
            layout.metro(window._CONFIG.apps.split(","), $(".zbox"));

            $("#gede_logo").attr("src", (function (logo) {
                return (logo == null || logo.length < 1) ? "/images/logos/default.png?gedecache=4" : logo;
            })(window._CONFIG.logo));

            // 背景图
            if (window._CONFIG.background && window._CONFIG.background.length > 0) {
                $("body").css("background", "url(" + window._CONFIG.background + ")");
            }

            //html5时钟
            seajs.use("/template/main/js/clock.js");

            //通知
            try {
                if (window._CONFIG.notice && window._CONFIG.notice.length > 0) {
                    $("#marquee").html(window._CONFIG.notice);
                }
            } catch (e) {
                console.log(e.message);
            }
        });

        // 滚动背景图
        $(function () {
            var backgroundheight = 2000;
            offset = Math.round(Math.floor(Math.random() * 2001));
            (function scrollbackground() {
                if (!window.runbg) {
                    offset = (offset < 1) ? offset + (backgroundheight - 1) : offset - 1;
                    $('#container').css("background-position", "50% " + offset + "px");
                }
                setTimeout(scrollbackground, 100);
            })();
        });

        return loadover ? loadover() : null;
    });

});
