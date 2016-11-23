/*
 Author: Vladimir Kharlampidi, The iDangero.us
 */
$(function () {
    $(".navUl  li").each(function () {
        var index = $(this).index();
        $(".navUl li").eq(0).addClass("act");
        $(this).on("click",function () {
            var swiperLength=$(".swiper-wrapper").eq(index).children(".swiper-slide").length+2;
            $("div.swiper-wrapper").width(1760*swiperLength+'px');
            $(this).addClass("act").siblings().removeClass("act");
            $(".wrapT").stop(true).eq(index).css({display: "block"}).siblings().stop(true).hide();//fadeIn(function () {
            switch (index) {
                case 0:
                    $(function () {
                        var swiper = new Swiper('.swiper1', {
                            pagination: '.pagination1',
                            loop: true,
                            paginationType: 'fraction',//分页器类型
                            grabCursor: true,
                            lazyLoading : true
                        });
                        $('.pagination1 .swiper-pagination-switch').click(function(){
                            swiper.swipeTo($(this).index())
                        });
                        var puzzleParams = {
                            mode : "horizontal",
                            speed : 300,
                            ratio : 1
                        }
                    });
                    break;
                case 1:
                    $(function () {
                        var swiperTwo = new Swiper('.swiper2', {
                            pagination: '.pagination2',
                            loop: true,
                            paginationType: 'fraction',
                            grabCursor: true,
                            lazyLoading : true
                        });
                    });
                    $('.pagination2 .swiper-pagination-switch').click(function(){
                        swiper.swipeTo($(this).index())
                    });
                    var puzzleParams = {
                        mode : "horizontal2",
                        speed : 300,
                        ratio : 1
                    }
                    break;
                case 2:
                    $(function () {
                        var swiperTwo = new Swiper('.swiper3', {
                            pagination: '.pagination3',
                            loop: true,
                            paginationType: 'fraction',
                            grabCursor: true,
                            lazyLoading : true
                        });
                        $('.pagination3 .swiper-pagination-switch').click(function(){
                            swiper.swipeTo($(this).index())
                        });
                        var puzzleParams = {
                            mode : "horizontal3",
                            speed : 300,
                            ratio : 1
                        }
                    });
                    break;
                case 3:
                    $(function () {
                        var swiperTwo = new Swiper('.swiper4', {
                            pagination: '.pagination4',
                            loop: true,
                            paginationType: 'fraction',
                            grabCursor: true,
                            lazyLoading : true
                        });
                        $('.pagination4 .swiper-pagination-switch').click(function(){
                            swiper.swipeTo($(this).index())
                        });
                        var puzzleParams = {
                            mode : "horizontal4",
                            speed : 300,
                            ratio : 1
                        }
                    });
                    break;
                case 4:
                    $(function () {
                        var swiperTwo = new Swiper('.swiper5', {
                            pagination: '.pagination5',
                            loop: true,
                            paginationType: 'fraction',
                            grabCursor: true,
                            lazyLoading : true
                        });
                        $('.pagination5 .swiper-pagination-switch').click(function(){
                            swiper.swipeTo($(this).index())
                        });
                        var puzzleParams = {
                            mode : "horizontal5",
                            speed : 300,
                            ratio : 1
                        }
                    });
                    break;
                case 5:
                    $(function () {
                        var swiperTwo = new Swiper('.swiper6', {
                            pagination: '.pagination6',
                            loop: true,
                            paginationType: 'fraction',
                            grabCursor: true,
                            lazyLoading : true
                        });
                        $('.pagination6 .swiper-pagination-switch').click(function(){
                            swiper.swipeTo($(this).index())
                        });
                        var puzzleParams = {
                            mode : "horizontal6",
                            speed : 300,
                            ratio : 1
                        }
                    });
                    break;
                case 6:
                    $(function () {
                        var swiperTwo = new Swiper('.swiper7', {
                            pagination: '.pagination7',
                            loop: true,
                            paginationType: 'fraction',
                            grabCursor: true,
                            lazyLoading : true
                        });
                        $('.pagination7 .swiper-pagination-switch').click(function(){
                            swiper.swipeTo($(this).index())
                        });
                        var puzzleParams = {
                            mode : "horizontal7",
                            speed : 300,
                            ratio : 1
                        }
                    });
                    break;
                default :
                    break;
            }
            //  })
            // .siblings().stop(true).hide();
            return false;
        })
    })
})
$(function () {
    var cygs = 'cygs';
    var gxjd = 'gxjd';
    var kpbk = 'kpbk';
    var kcwg = 'kcwg';
    var mrgs = 'mrgs';
    var youer = 'youer';
    var zwmz = 'zwmz';
    bookType("成语故事", cygs);
    bookType("国学经典", gxjd);
    bookType("科普百科", kpbk);
    bookType("昆虫王国", kcwg);
    bookType("名人故事", mrgs);
    bookType("幼儿", youer);
    bookType("中外名著", zwmz);
});
function bookType(bookType, typeId) {
    var typeData = _api()[bookType];
    //获取当前url
    var url = window.location.href;
    //截取当前url路劲
    var strs = new Array();
    strs = url.split("/");
    //当前url路劲
    var _url = '';
    for (var i = 0; i < (strs.length - 1); i++) {
        _url = _url + strs[i] + '/';
    }
    var str = '';
	for (var i = 0; i < typeData.length; i++) {
		var appId = typeData[i].appId;
		var app = typeData[i].app;
		var cover = typeData[i].cover;
		var intro = typeData[i].intro;
		var appName = typeData[i].appName;
		var author = typeData[i].author;
		//组成图书URL路径
		var app_url = _url + 'stores' + '/' + appId + '/' + app + '/' + 'assets' + '/' + 'www' + '/' + 'index.html';
		//图书封面URL
		var cover_url = _url + 'stores' + '/' + appId + '/' + 'cover' + '/' + cover;
		if (i % 8 == 0) {
			str += '<div class="swiper-slide" style="background: #f2f2f2">';
			str += '<ul class="type-book">';
		}
		//(function (i) {
			str += "<li>";
			str += '<a href="' + app_url + '" >';
            str+='<img  class="swiper-lazy" data-src="' + cover_url + '"/>' ;
			str += '<p>' + typeData[i].appName + '</p>';
			str += '</a>';
			str += '</li>';
		//})(i);
		if (i % 8 == 7) {
			str += '</ul>';
			str += '<div class="clearfix"> </div>';
			str += '</div>';
		}
	}
	if (typeData.length % 8 != 0) {
		str += '</ul>';
		str += '<div class="clearfix"> </div>';
		str += '</div>';
	}
    $('#' + typeId).html(str);
}

$(function () {
    //Main Swiper
    var swiper = new Swiper('.swiper1', {
        pagination: '.pagination1',
        loop: false,
        paginationType: 'fraction',
        grabCursor: true,
        lazyLoading : true
    });
    $('.pagination1 .swiper-pagination-switch').click(function(){
        swiper.swipeTo($(this).index())
    });
    //Puzzle
    var puzzleParams = {
        mode : "horizontal",
        speed : 300,
        ratio : 1
    }
});



