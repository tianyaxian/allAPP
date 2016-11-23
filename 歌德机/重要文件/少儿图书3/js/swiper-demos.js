/*
 Author: Vladimir Kharlampidi, The iDangero.us
 */
function createSwiper(index){
    var swiper = new Swiper('.swiper'+index, {
        pagination: '.pagination'+index,
        paginationClickable: true,
        startSlide: 1,
        lazyLoading : true,
        paginationType: 'fraction',
        grabCursor: true
    });
    return swiper
}
$(function () {
    var swiperOne,swiperTwo,swiperThree,swiperFour,swiperFive,swiperSix,swiperSeven;
    $(".navUl  li").each(function () {
        var index = $(this).index();
        $(".navUl li").eq(0).addClass("act");
        $(this).click(function () {
            $(this).addClass("act").siblings().removeClass("act");
            $(".wrapT").stop(true).eq(index).show().siblings().stop(true).hide();
            if(index === 0 && swiperOne === undefined && swiper === undefined) {
                swiperOne = createSwiper(1);
            } else if(index === 1 && swiperTwo === undefined) {
                swiperTwo = createSwiper(2);
            }
            else if(index === 2 && swiperThree === undefined) {
                swiperThree = createSwiper(3);
            }
            else if(index === 3 && swiperFour === undefined) {
                swiperFour = createSwiper(4);
            }
            else if(index === 4 && swiperFive === undefined) {
                swiperFive = createSwiper(5);
            }
            else if(index === 5 && swiperSix === undefined) {
                swiperSix = createSwiper(6);
            }
            else if(index === 6 && swiperSeven === undefined) {
                swiperSeven = createSwiper(7);
            }
            return false;
        })
    })
});

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
		(function (i) {
			str += "<li>";
			str += '<a href="' + app_url + '" >';
            str+='<img  class="swiper-lazy" data-src="' + cover_url + '"/>' ;
            /*str+='<img  class="swiper-lazy QR_codes" src="QR_codes/'+appId+'.png">';*/
			str += '<p>' + typeData[i].appName + '</p>';
			str += '</a>';
			str += '</li>';
		})(i);
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
    var swiperLength1=$(".swiper-wrapper").children(".swiper-slide").length+2;
    $("div.swiper-wrapper").width(1760*swiperLength1+'px');
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
    $('.pagination1 .swiper-pagination-switch').click(function () {
        swiper.swipeTo($(this).index())
    });

});



