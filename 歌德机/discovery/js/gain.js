// JavaScript Document
var books = {
			"D042":[{"id":"7042001","name":"农夫与蛇农夫与蛇农夫与蛇农夫与蛇农夫与蛇农夫与蛇","src":"images/video.jpg","videoUrl1":"http://movie.ks.js.cn/flv/other/1_0.mp4","videoUrl2":""},
					{"id":"7042002","name":"乌鸦喝水","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":"video/1124.flv"},
					{"id":"7042003","name":"name3","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
					{"id":"7042004","name":"name4","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
					{"id":"7042005","name":"name5","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
					{"id":"7042006","name":"name6","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
					{"id":"7042002","name":"name7","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":"video/1124.flv"},
					{"id":"7042003","name":"name8","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
					{"id":"7042004","name":"name9","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
					{"id":"7042005","name":"name10","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
					{"id":"7042006","name":"name11","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
					{"id":"7042002","name":"name12","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":"video/1124.flv"},
					{"id":"7042003","name":"name13","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
					{"id":"7042004","name":"name14","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
					{"id":"7042005","name":"name15","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
					{"id":"7042006","name":"name16","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
					{"id":"7042007","name":"name17","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""}
					],
	"D043":[{"id":"7043001","name":"农夫与蛇农夫与蛇农夫与蛇农夫与蛇农夫与蛇农夫与蛇","src":"images/video.jpg","videoUrl1":"http://movie.ks.js.cn/flv/other/1_0.mp4","videoUrl2":""},
		{"id":"7043002","name":"乌鸦喝水","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":"video/1124.flv"},
		{"id":"7043003","name":"name3","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043004","name":"name4","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043005","name":"name5","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043006","name":"name6","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043002","name":"name7","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":"video/1124.flv"},
		{"id":"7043003","name":"name8","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043004","name":"name9","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043005","name":"name10","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043006","name":"name11","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043002","name":"name12","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":"video/1124.flv"},
		{"id":"7043003","name":"name13","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043004","name":"name14","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043005","name":"name15","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043006","name":"name16","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043007","name":"name17","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""}
	],
	"D044":[{"id":"7043001","name":"农夫与蛇农夫与蛇农夫与蛇农夫与蛇农夫与蛇农夫与蛇","src":"images/video.jpg","videoUrl1":"http://movie.ks.js.cn/flv/other/1_0.mp4","videoUrl2":""},
		{"id":"7043002","name":"乌鸦喝水","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":"video/1124.flv"},
		{"id":"7043003","name":"name3","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043004","name":"name4","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043005","name":"name5","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043006","name":"name6","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043002","name":"name7","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":"video/1124.flv"},
		{"id":"7043003","name":"name8","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043004","name":"name9","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043005","name":"name10","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043006","name":"name11","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043002","name":"name12","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":"video/1124.flv"},
		{"id":"7043003","name":"name13","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043004","name":"name14","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043005","name":"name15","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043006","name":"name16","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""},
		{"id":"7043007","name":"name17","src":"images/cov01.jpg","videoUrl1":"","videoUrl2":""}
	]
		   };
var jsonName;
function gainVideoList(id){
	$("#videoListPup").show();
	jsonName = eval("books."+id);
	console.log(jsonName);
	console.log(jsonName);
	for(var xilie in xilies.list){
		if(xilies.list[xilie].id==id)
		$("#xiLieName").html('<h2>'+xilies.list[xilie].name+'</h2>');
	}
	var listStr="";
	var iNow=0;
	for(var i in jsonName){
		iNow++;
		listStr+='<li class="cur"><input type="hidden" value="'+id+'"><span style="width:30px; height:40px; font-size:20px; color:#666; float:left;">'+iNow+'、</span><a href="javascript:;" onClick="gainVideo($(this).html())">'+jsonName[i].name+'</a></li>';	
	}
	$("#videoList").append(listStr);				
}

function gainVideo(str){
	$(".videoPup").show();
	var videoStr="";
	for(var book in jsonName){
		var name=jsonName[book].name;
		
		if(str==name){
			videoStr+='<h2>'+str+'</h2>';
			
			var url1=jsonName[book].videoUrl1;
			var url2=jsonName[book].videoUrl2;
			
			if(url2){
				var flashvars={
					f:url2,
					c:0,
					p:1,
					e:1,
					wh:'3:2'
				};		
			}
			else{
			var flashvars={
				f:url1,
				c:0,
				p:1,
				e:1,
				wh:'3:2'
			};
			}
			var params={bgcolor:'#FFF',allowFullScreen:false,allowScriptAccess:'always',wmode:'transparent'};
			var video=[url1+"->video/mp4'"];
			CKobject.embed('../ckplayer/ckplayer.swf','a1','ckplayer_a1','100%','100%',false,flashvars,video,params);
		}
	}
	$("#name").append(videoStr);
}