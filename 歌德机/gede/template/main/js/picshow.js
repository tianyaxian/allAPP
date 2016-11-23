// 屏幕保护
define("picshow",function (require, exports, module) {
    var pics = window._CONFIG.picshows || [], img = $('<div class="htmleaf-container"><div class="slider"><ul class="slider-main"></ul></div></div>').hide(), timewait, imgSrcNum = 0, imgSrc=pics[imgSrcNum];

	exports.openFn = openFn;
	exports.closeFn = closeFn;

    if (pics && pics.length > 0 && !window._CONFIG.HASDIVEO) {
		$("body").append(img);
		
		var liStr = '';
		for(var i=0;i<pics.length;i++){
			liStr+='<li><img width="1920" height="1080" src="'+pics[i]+'" alt=""></li>';
		}
		$('.slider-main').html(liStr);
        
		$("#container").on("touchstart click",function(){
			img.hide();
			closeFn(true);
		});
		img.on("touchstart click",function(){
			img.hide();
			closeFn(true);return false;
		});

		openFn();
		
		function openFn(){
			timewait= setTimeout(function(){
				img.show();
			},3000);
		}
		
		function closeFn(goOn){
			clearTimeout(timewait);
			if(goOn) openFn();	
		}
    }
	
	exports.img = img;
	
	var slider = new osSlider({ //开始创建效果
		pNode:'.slider', //容器的选择器 必填
		cNode:'.slider-main li', //轮播体的选择器 必填
		speed:3000, //速度 默认3000 可不填写
		autoPlay:true //是否自动播放 默认true 可不填写
	});
	
    console.log("[屏幕保护模块加载成功]");
	
});