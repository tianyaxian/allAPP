// JavaScript Document
define(function (require, exports, module) {
	/*滚动播放视频*/
	//var arrVideo = window._CONFIG.applist.dvideo;
	//alert(arrVideo.length);
	var urlFlag = 0;
	function playVideo(){
		var flashvars={
			f:"http://movie.ks.js.cn/flv/other/1_0.mp4",
			c:0,
			p:1,
			e:0,
			v:80
			};
		var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
		CKobject.embedSWF('ckplayer/ckplayer.swf','a1','ckplayer_a1','600','400',flashvars,params);	
	}
	//playVideo(arrVideo[urlFlag]);
	
	function playerstop(){
		if(urlFlag==arrVideo.length-1) urlFlag=0;
		else urlFlag++;
		playVideo(arrVideo[urlFlag]);		
	}
		
	var iVolume = 50;
	function setVolume1(){
		if(iVolume<=100) iVolume+=10;
		else iVolume=100;
		CKobject.getObjectById('ckplayer_a1').changeVolume(iVolume);	
	}
	function setVolume2(){
		if(iVolume>=0) iVolume-=10;
		else iVolume=0;
		CKobject.getObjectById('ckplayer_a1').changeVolume(iVolume);	
	}
	
	exports.playVideo = playVideo;
	exports.playerstop = playerstop;
	exports.setVolume1 = setVolume1;
	exports.setVolume2 = setVolume2;
	//exports.arrVideo = arrVideo;
})
