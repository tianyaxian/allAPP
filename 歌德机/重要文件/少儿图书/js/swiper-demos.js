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
		ratio : 1
	}

})

