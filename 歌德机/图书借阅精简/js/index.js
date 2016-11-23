/**
 * Created by Administrator on 2016/11/14/014.
 */
$(document).ready(function () {
    /*图书阅读 start*/
    var useragent = navigator.appVersion, gedeid = useragent.split("/")[2];
    /*_CID每页书的id，_ROLE当前角色, pagesize每页书的数量，shelfscount每页书架的数量*/
    var _CID = null, _ROLE = 1, _PAGESIZE = 14, _SHELFSCOUNT = 7;
    /*根据屏幕的宽度赋值*/
    try {
        if(useragent.split("/")[1].split(".")[0]==4){//android 竖屏
            if(document.body.scrollWidth <= 1081){
                _PAGESIZE = 16;
                _SHELFSCOUNT = 4;
            }
        }else if (screen.width <= 1081) {// windows 竖屏
            _PAGESIZE = 16;
            _SHELFSCOUNT = 4;
        }
    }catch(e){console.log(e.message);}

    /*加载第一页的内容以及初始化书架*/
    function displaybook(data,shelfcount,page,init) {
        var ary = data.msg.list;
        var pageCount = data.msg.pageCount;
        var count=Math.ceil(ary.length/shelfcount);
        /*初始化书架*/
        if(init==true){
            $("#swiperCon").empty();
            for (var j = 0; j < pageCount; j++) {
                var swiperSlid=$('<div class="swiper-slide" loaded="false"></div>');
                $("#swiperCon").append(swiperSlid);
                for(var a=0;a<count;a++ ){
                    $('<div class="bookshelf"><ul></ul></div>').appendTo(swiperSlid);
                }
            }
        }
        /*如果书架内容已经存在 就return 不再往页面中添加内容*/
        if ($(".swiper-slide").eq(page-1).attr("loaded") == "true") return;

        /*往对应的页面书架中添加内容*/
        for(var m=1;m<=count;m++){
            for (var i = shelfcount*(m-1); i < shelfcount*m; i++){
                if(i<ary.length){
                    var qrpath, li=$('<li booknum="' + ary[i].bookNum + '"><img data-src="' + ary[i].cover + '" class="img swiper-lazy" style="width: 196px; height: 276px; opacity: 1;"><img src="images/hotbook.png?gedecache=6" class="hotimg"><img src="images/newbook.png?gedecache=6" class="newimg"><div class="erwei"></div></li>');
                    var loadimg = $("<img/>").attr("src", "images/loading1.svg").addClass("loading");
                    /*添加最新或最热书目标记*/
                    if(ary[i].hotbook == 1) {
                        li.addClass("hotbook");
                    } else  if(ary[i].newbook == 1) {
                        li.addClass("newbook");
                    }
                    loadimg.hide();
                    li.append(loadimg);
                    /*添加书的二维码*/
                    qrpath = "http://gede.5read.com/o/a.h?a=GEDE:" + encodeURIComponent(ary[i].surl + "?m="+gedeid+"&c="+ (_CID==null?0:_CID)+"&t=2");
                    $(".erwei", li).empty().qrcode({width: 75, height: 75, text: qrpath});
                    li.click(function () {
                        var loading = $(this).children(".loading").show(), readersrc = "reader.html?gedecache=2&bookNum=" + $(this).attr("bookNum") + "&qr=" + qrpath;
                        if (window.ismove || window.showbook) return;
                        window.showbook = true;
                        showtime = window.setTimeout(function(){ window.showbook = false;}, 10000);

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
                    $(".swiper-slide").eq(page-1).find(".bookshelf").eq(m-1).children("ul").append(li);
                    /*单个图书 end*/
                }
            }
        }
        $(".swiper-slide").eq(page-1).attr("loaded", "true");
        $(".load").hide();

        if(init==true) {
            myswiper.update();
            myswiper.slideTo(0, 0, false);
        }
    }

    /*获取数据
     * init：翻页不需要初始化 ，赋值false；其他需要初始化书架时，赋值true
     * */
    function loadBooks(cid,pagesize,shelfcount, page, init ){
        _CID= cid==null ? 0 : cid;
        page = page==null ? 1 : page;
        $.ajax({
            url: "http://book.jieyueji.cn/server/apps/touchbook2?gedecache=6&cmd=books&pageSize="+pagesize+"&id="+cid+"&page="+page,
            type: "get",
            dataType: "json",
            success: function(data){
                if (data && data.result == 1) {
                    displaybook(data, shelfcount, page, init);
                }else{
                    $(".load").hide();
                    $(".tips").show().unbind("click").click(function(){
                        $(".tips").hide();$(".load").show();
                        loadBooks(cid, pagesize,shelfcount,page,init);
                    });
                }
            },
            error:function(){
                $(".load").hide();
                $(".tips").show().unbind("click").click(function(){
                    $(".tips").hide();$(".load").show();
                    loadBooks(cid, pagesize,shelfcount,page,init);
                });
            }
        });
    }
    /*滑动加载相应页面的内容*/
    var myswiper = new Swiper(".bookcontainer", {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        lazyLoading: true,
        paginationType: 'fraction',
        preventClicks: false,
        observer: true,
        onSlideChangeStart: function (swiper) {
            var m = swiper.activeIndex;//获取当前页面的index值
            if ($(".swiper-slide").eq(m).attr("loaded") == "true") return $(".load").hide();//如果页面中的内容已存在 return
            $(".load").show();
            /*加载对应页面的内容*/
            loadBooks(_CID, _PAGESIZE, _SHELFSCOUNT, m+1, false);
        }
    });

    /*切换角色*/
    $("#xiaLa>div").on("click",function(){
        $("#xiaLa").slideUp();
        $("#select").removeClass("jianhao").addClass("jiahao");
        if ($("#select span").html()==$(this).html()) return;
        $("#select span").html($(this).html());
        var ids = $(this).attr("id");
        $(".load").show();
        loadCatas(ids, true);
    });
    $(".xiaLa").on("click",function(){
        $("#xiaLa").stop().slideToggle();
        $("#select").toggleClass("jianhao");
    });

    /*加载分类
     * init : 是否初始化书架
     * */
    var loadCatas = function (roleid) {
        $.ajax({
            type: "get",
            dataType: "json",
            url: "http://book.jieyueji.cn/server/apps/touchbook2?cmd=bookCata&nocache=1&role="+roleid+"&gedecache=6",
            success: function (data) {
                var colle = $(".Colle_con .screen .shadow");
                if (data && data.result == 1) {
                    var ul = $("ul", wrapper).empty();
                    $(data.msg).each(function (idx) {
                        var li = $("<li cid=" + this.id + "><a>" + this.cataname + "</a></li>").click(function () {
                            $(".load").show();
                            loadBooks($(this).attr("cid"), _PAGESIZE, _SHELFSCOUNT, 1, true);
                            $(".cur", ul).removeClass("cur");
                            $(this).addClass("cur");
                        });
                        ul.append(li);
                        if(idx == 0) {
                            li.addClass("cur");
                            _CID = this.id;
                        }
                    });
                    /*加载第一个分类的图书*/
                    loadBooks(_CID, _PAGESIZE, _SHELFSCOUNT, 1, true);
                }else{
                    $(".load").hide();
                    $(".tips").show().unbind("click").click(function(){
                        $(".tips").hide();$(".load").show();
                        loadCatas(roleid);
                    });
                }
                var len=$(".conveyer li").length;
                $(".wrapSwiper .swiper-slide").width(160*len+"px");
                newSwiper.update();
                newSwiper.slideTo(0, 1, false);
            },
            error: function (xhr, err) {
                $(".load").hide();
                $(".tips").show().unbind("click").click(function(){
                    $(".tips").hide();$(".load").show();
                    loadCatas(roleid);
                });
            }
        });
    };
    var newSwiper = new Swiper('.swiperCon', {
        /* scrollbarHide: true,*//*清除滚动条*/
        direction: 'horizontal',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        followFinger:true
    });
    loadCatas(_ROLE);
});