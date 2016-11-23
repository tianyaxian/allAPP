/*
Author: Vladimir Kharlampidi, The iDangero.us
*/
document.createElement('header');
document.createElement('footer');
$(function(){
	$(".navUl  li").each(function(){
		var index=$(this).index();
		$(".navUl li").eq(0).addClass("act");
		$(this).click(function(){
			$(this).addClass("act").siblings().removeClass("act");
			$(".home-device").stop(true).eq(index).show().siblings().stop(true).hide();
		})
	})
})
$(function(){
	
	var cygs='cygs';
	var gxjd='gxjd';
	var kpbk='kpbk';
	var kcwg='kcwg';
	var mrgs='mrgs';
	var youer='youer';
	var zwmz='zwmz';
	bookType("成语故事",cygs);
	bookType("国学经典",gxjd);
	bookType("幼儿",kpbk);
	bookType("昆虫王国",kcwg);
	bookType("名人故事",mrgs);
	bookType("幼儿",youer);
	bookType("幼儿",zwmz);
})

function bookType(bookType,typeId){
		var typeData=_api()[bookType];
		var typeBookTemplete=Handlebars.compile($("#books-template").html());
		var len=typeData.length;
		var screenNum=Math.ceil(len/8);
		for(var i=0;i<screenNum;i++){
			$('#'+typeId).append('<div class="swiper-slide" style="background: #e7e7e7"><ul class="type-book'+typeId+i+'"></ul><div class="clearfix"></div></div>')

		}
		for(var j=0;j<screenNum;j++){
			$('.type-book'+typeId+j).html(typeBookTemplete(typeData.slice(j*8,(j+1)*8)));
		}
	}



$(function(){
	//Main Swiper
	var swiper = new Swiper('.swiper1', {
		pagination : '.pagination1',
		loop:true,
		grabCursor: true
	});
	var swiperTwo = new Swiper('.swiper2', {
		pagination : '.pagination2',
		loop:true,
		grabCursor: true
	});
	var swiperThree = new Swiper('.swiper3', {
		pagination : '.pagination3',
		loop:false,
		grabCursor: true,
	});
	var swiperFour = new Swiper('.swiper4', {
		pagination : '.pagination4',
		loop:true,
		grabCursor: true
	});
	var swiperFive = new Swiper('.swiper5', {
		pagination : '.pagination5',
		loop:true,
		grabCursor: true
	});
	var swiperSix = new Swiper('.swiper6', {
		pagination : '.pagination6',
		loop:true,
		grabCursor: true
	});

	//Navigation arrows

    //Clickable pagination
    $('.pagination1 .swiper-pagination-switch').click(function(){
    	swiper.swipeTo($(this).index())
    });
	$('.pagination2 .swiper-pagination-switch').click(function(){
		swiperTwo.swipeTo($(this).index())
	})
	$('.pagination3 .swiper-pagination-switch').click(function(){
		swiperThree.swipeTo($(this).index())
	})
	$('.pagination4 .swiper-pagination-switch').click(function(){
		swiperFour.swipeTo($(this).index())
	})
	$('.pagination5 .swiper-pagination-switch').click(function(){
		swiperFive.swipeTo($(this).index())
	})
	$('.pagination6 .swiper-pagination-switch').click(function(){
		swiperSix.swipeTo($(this).index())
	})

	//Puzzle
	var puzzleParams = {
		mode : "horizontal",
		speed : 300,
		ratio : 1
	}
	var puzzleParamsTwo = {
		mode : "horizonta2",
		speed : 300,
		ratio : 1
	}
	var puzzleParamsThree = {
		mode : "horizonta3",
		speed : 300,
		ratio : 1,


	}

	var puzzleParamsFour = {
		mode : "horizonta4",
		speed : 300,
		ratio : 1
	}
	var puzzleParamsFive = {
		mode : "horizonta5",
		speed : 300,
		ratio : 1
	}
	var puzzleParamsSix = {
		mode : "horizonta6",
		speed : 300,
		ratio : 1,


	}
})

var page=1;
var totalpage=$(".swiper-slide").length;
$("#page").text(totalpage);
function catabooks(cataid){
	page=1;
	$("#cpage").text(page);
}
//下一页
function nextPage(){
	page++;
	$("#cpage").text(page);
}
//上一页
function prevPage(){
	page--;
	$("#cpage").text(page);
}





