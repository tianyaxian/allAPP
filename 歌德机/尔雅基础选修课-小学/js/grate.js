/**
 * Created by Administrator on 2016/10/28/028.
 */

$(function () {
    var yi = 'yi';
    var er = 'er';
    var san = 'san';
    var si = 'si';
    var wu = 'wu';
    var liu = 'liu';
    if (document.body.scrollWidth <=1081) {
        bookType("一年级", yi, 15);
        bookType("二年级", er, 15);
        bookType("三年级", san, 15);
        bookType("四年级", si, 15);
        bookType("五年级", wu, 15);
        bookType("六年级", liu, 15);
    } else {
        bookType("一年级", yi, 8);
        bookType("二年级", er, 8);
        bookType("三年级", san, 8);
        bookType("四年级", si, 8);
        bookType("五年级", wu, 8);
        bookType("六年级", liu, 8);
    }
});

function bookType(bookType, typeId, num) {
    var typeData = books.list[bookType];
    var str = '';
    for (var i = 0; i < typeData.length; i++) {
        var courseid = typeData[i].courseid;
        var courseName = typeData[i].courseName;
        var imgUrl = typeData[i].imgUrl;
        var keySpeakName = typeData[i].keySpeakName;
        var remarks=typeData[i].remarks;
        if (i % num == 0) {
            str += '<div class="swiper-slide">';
        }
        (function (i) {
            str += '<div class="source">' +
                '<a><input type="hidden" value="' + courseid + '">' +
                '<dl>' +
                '<dt>' +
                '<img data-src="' + imgUrl + '" class="swiper-lazy">' +
                '</dt><dd class="sourceNameOne">' + courseName + '</dd>';
            if (remarks==''){
                str +=    '<dd class="speakName">' + keySpeakName + '</dd> ';
            }
            else {
                str +=    '<dd class="speakName">' + keySpeakName + ' （' + remarks + '）</dd> ';
            }
            str +=   '</dl>' +
                '</a>' +
                '</div>';
        })(i);
        if (i % num == (num - 1)) {
            str += ' <div class="swiper-lazy-preloader"></div>';
            str += '<div class="clearfix"> </div>';
            str += '</div>';
        }
    }
    /*当总数据的长度不是12的倍数时也添加一个块*/
    if (typeData.length % num != 0) {
        str += ' <div class="swiper-lazy-preloader"></div>';
        str += '<div class="clearfix"> </div>';
        str += '</div>';
    }
    $('#' + typeId).html(str);
    var swiperLength1 = $(".swiper-wrapper").children(".swiper-slide").length + 2;
    $("div.swiper-wrapper").width(1760 * swiperLength1 + 'px');

}
function createSwiper(index) {
    var swiper = new Swiper('.swiper' + index, {
        pagination: '.pagination' + index,
        paginationClickable: true,
        startSlide: 1,
        lazyLoading: true,
        observer:true,
        observeParents:true,
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });
    return swiper
}
$(function () {
    var swiper = new Swiper('.swiper1', {
        pagination: '.pagination1',
        paginationClickable: true,
        lazyLoading: true,
        startSlide: 1,
        observer:true,
        observeParents:true,
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });
    var swiper1, swiper2, swiper3, swiper4, swiper5,swiper6;
    $(".wrapT").eq(0).show();
    $(".tab_menu  li").on("click", function () {
        var index=$(this).index();
         $(this).addClass("selected").siblings().removeClass("selected");
        $(".wrapT").stop(true).eq(index).show().siblings().stop(true).hide();
        if (index === 0 && swiper1 === undefined && swiper === undefined) {
            swiper1 = createSwiper(1);
            swiper1.slideTo(0,1000,false);
        } else if (index === 1 && swiper2 === undefined) {
            swiper2 = createSwiper(2);
        }
        else if (index === 2 && swiper3 === undefined) {
            swiper3 = createSwiper(3);
        }
        else if (index === 3 && swiper4 === undefined) {
            swiper4 = createSwiper(4);
        }
        else if (index === 4 && swiper5 === undefined) {
            swiper5 = createSwiper(5);
        }
        else if (index === 5 && swiper6 === undefined) {
            swiper6 = createSwiper(6);
        }
        return false;
    });
});
function gainVideoList(id) {
    var listStr = "";
    for (var key in books.list) {
        for (var key1 in books.list[key]) {
            var titt = books.list[key];
            if (titt[key1].courseid == id) {
                var courseurl = "http://mooc1.chaoxing.com/course/" +titt[key1].courseid+ ".html";
                var iframe = $("<iframe >").attr("src",courseurl).attr("width","100%").attr("height","100%").attr("frameborder",0);
                $(".contentOne iframe").attr("src",courseurl);
                $(".contentOne").html(iframe);
                $('.erwei').empty();
                jQuery('.erwei').qrcode({
                    width: 200,
                    height: 200,
                    text: courseurl
                });
            }
        }
    }


}