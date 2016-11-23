function pop_classify_all(){
	var over,out;
	var btn = $(".classify_all .btn");
	var con = $(".classify_all .con");
	var closeBtn = $(".classify_all .close");
	$(".classify_all").mouseover(function(){
		if(con.css("display") == "none"){
			over = window.setTimeout(function(){
				btn.addClass("btnHover");
				con.fadeIn();
			},1000);
		}
		clearTimeout(out);
	}).mouseout(function(){
		if(con.css("display") == "block"){
			out = window.setTimeout(function(){
				btn.removeClass("btnHover");
				con.fadeOut();
			},300);
		}
		clearTimeout(over);
	})
	closeBtn.click(function(){
		btn.removeClass("btnHover");
		con.fadeOut();
		return false;
	})
}

function goTop(){
	var ele = $(".btn_goTop");
	var eleHeight = ele.height();
	var windowHeight = $(window).height();
	$(window).scroll(function(){
		var scrollHeight = $(document).scrollTop();
		if(scrollHeight != 0){
			ele.show();
		}
		else{
			ele.hide();
		}
		if(!window.XMLHttpRequest){
			ele.css("top",windowHeight+scrollHeight-240-eleHeight + "px");
		}
	})
	ele.click(function(){
		$("html,body").animate({"scrollTop":"0px"},400);
	})
}

function awardBroad_index(){
	var timer;
	var awardCon = $(".awardList .con");
	var awardList = $(".awardList .con ul");
	var addUl = $("<ul></ul>").append(awardList.html());
	awardCon.append(addUl);
	var screenHeight = awardCon.height();
	var listHeight = awardList.height();
	var scrollNum = listHeight / screenHeight;
	var i = 0;
	function scroll(){
		if(i < scrollNum){
			i++;
			awardList.animate({"margin-top":-i*screenHeight+"px"},500);
			timer = window.setTimeout(scroll,3000);
			
		}
		else{
			i = 0;
			awardList.css("margin-top","0px");
			scroll()
		}
	}
	awardCon.hover(function(){
		clearTimeout(timer);
	},function(){
		timer = window.setTimeout(scroll,3000);
	})
	timer = window.setTimeout(scroll,3000);
}

function imgShow_index(){
	var index = 0;
	var timer = null;
	var box = $(".rec_webSite .rec1")
	var pic = box.find(".pic");
	var num = box.find(".num li");
	var moveWidth = pic.find("li").width();
	function imgAnimate(index){
		pic.stop(true,false).animate({"left":-moveWidth*index+"px"},500)
		num.eq(index).addClass("cur").siblings().removeClass("cur");
	}
	num.mouseover(function(){
		index = num.index($(this));
		imgAnimate(index);
	})
	timer = setInterval(function(){
		if(index >= 4){
			index = 0;
		}
		else{
			index++;
		}
		imgAnimate(index);
	},3000)
	box.hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			if(index >= 4){
				index = 0;
			}
			else{
				index++;
			}
			imgAnimate(index);
		},3000)
	})
}

function swi_index(){
	var box = $(".rec_classify");
	box.each(function(){
		var tag = $(this).find(".comTit ul a");
		var con = $(this).find(".swiCon");
		tag.click(function(){
			$(this).addClass("cur").parent().siblings().find("a").removeClass("cur");
			con.eq(tag.index($(this))).show().siblings().hide();
		})
	})
}

function schoolShow_index(){
	$(".schoolBox .con li").hover(function(){
		$(this).addClass("hover").find("table").stop(true,true).fadeIn();
	},function(){
		$(this).removeClass("hover").find("table").stop(true,true).fadeOut();
	})
}

function formState(obj){
	var defaultVal = obj.val();
	obj.focus(function(){
		if($(this).val() == defaultVal){
			$(this).val("");
			$(this).css("color","#333");
		}
	})
	obj.blur(function(){
		if($(this).val() == ""){
			$(this).val(defaultVal);
			$(this).css("color","#999");
		}
	})
}

function captionSwi(){
	var btn = $(".main_play .captionSwi");
	var player = $(".main_play .playerArea .player-ope_video");
	var caption = $(".main_play .playerArea .caption");
	btn.toggle(function(){
		btn.text("关闭字幕");
		player.stop(true,false).animate({"left":"0px"},500,function(){caption.stop("true,false").animate({"top":"0px"},500)})
	},function(){
		btn.text("显示字幕");
		caption.stop(true,false).animate({"top":"522px"},500,function(){player.stop("true,false").animate({"left":"160px"},500)})
	})
}

function teacherInfo(){
	var over,out,x,y;
	var btn = $("table.teacherList a");
	var con_n = $(".ntech");
	var con_v = $(".vtech");
	var con_v_att = $(".vtech_att");
	btn.mouseover(function(){
		$(".teacherInfo").fadeOut();
		x = $(this).offset().left;
		y = $(this).offset().top + 16;
		function show(box){box.css({"left":x,"top":y}).fadeIn();}
		if($(this).attr("class") == "nteacher"){
			over = window.setTimeout(function(){show(con_n)},1000);
		}
		else if($(this).attr("class") == "vteacher"){
			over = window.setTimeout(function(){show(con_v)},1000);
		}
		else if($(this).attr("class") == "vteacher_att"){
			over = window.setTimeout(function(){show(con_v_att)},1000);
		}
	}).mouseout(function(){
		out = window.setTimeout(function(){$(".teacherInfo").fadeOut();},1000);
		clearTimeout(over);
	})
	$(".teacherInfo").hover(function(){
		clearTimeout(out);
	},function(){
		$(this).fadeOut();
	})
}

function schoolVideoClassify(){
	var btn = $(".main_school .videoClassify .con .icons");
	btn.toggle(function(){
		$(this).parent("li").removeClass().addClass("close");
		$(this).siblings("ul").hide();
	},function(){
		$(this).parent("li").removeClass().addClass("open");
		$(this).siblings("ul").show();
	})
}

function captionInfo(){
	$(".captionPage .captionInfo .infoBtn").toggle(function(){
		$(this).addClass("cur");
		$(this).siblings(".infoCon").show();
	},function(){
		$(this).removeClass("cur");
		$(this).siblings(".infoCon").hide();
	})
	$(".captionPage .captionInfo .infoCon .editListBtn").toggle(function(){
		$(this).text("收起");
		$(this).siblings(".editList").show();
	},function(){
		$(this).text("展开");
		$(this).siblings(".editList").hide();
	})
}

function lostTeacherPhoto(){
	var slideBox = $(".main_lost .lostDetail .photo .con");
	var eleBox = slideBox.find("ul");
	function slide(){
		var ele = eleBox.find("li").eq(0);
		var eleWidth = ele.width() + parseInt(ele.css("margin-left")) + parseInt(ele.css("margin-right"));
		if(slideBox[0].scrollLeft == eleWidth){
			ele.appendTo(eleBox);
			slideBox[0].scrollLeft = 0;
		}
		else{
			slideBox[0].scrollLeft++;
		}
	}
	var timer = setInterval(slide,20);
	slideBox.hover(function(){
		clearInterval(timer);	
	},function(){
		timer = setInterval(slide,20);
	})
}

function playList(){
	var eleNum = $(".albumEleList .smode .screen ul li").length;
	var slideWidth_smode = $(".albumEleList .smode .screen").width();
	var conveyer_smode = $(".albumEleList .smode .screen ul");
	var prevBtn_smode = $(".albumEleList .smode .prev");
	var nextBtn_smode = $(".albumEleList .smode .next");
	var slideNum_smode = Math.ceil(eleNum / 16) - 1;
	var slideWidth_dmode = $(".albumEleList .dmode .screen").width();
	var conveyer_dmode = $(".albumEleList .dmode .screen ul");
	var prevBtn_dmode = $(".albumEleList .dmode .prev");
	var nextBtn_dmode = $(".albumEleList .dmode .next");
	var slideNum_dmode = Math.ceil(eleNum / 5) - 1;
	var i_smode = 0;
	var i_dmode = 0;
	function action(conveyer,slideWidth,i){
		conveyer.stop(true,false).animate({"left":-slideWidth * i + "px"},1000);
	}
	
	function init(){
		smodeEle = conveyer_smode.find("li");
		dmodeEle = conveyer_dmode.find("li");
		smodeEle.each(function(){
			if($(this).find("a").hasClass("cur")){
				i_smode = Math.ceil((smodeEle.index($(this)) + 1) / 16) - 1;
			}
		})
		dmodeEle.each(function(){
			if($(this).find("a").hasClass("cur")){
				i_dmode = Math.ceil((dmodeEle.index($(this)) + 1) / 5) - 1;
			}
		})
		action(conveyer_smode,slideWidth_smode,i_smode);
		action(conveyer_dmode,slideWidth_dmode,i_dmode);
	}
	init();
	
	function slide(conveyer,slideWidth,slideNum,i,prev,next){
		prev.click(function(){
			if(i == 0){
				return false;
			}
			else{
				i--;
				action(conveyer,slideWidth,i);
				if(i != slideNum){
					next.removeClass("unnext");
					if(i == 0){
						$(this).addClass("unprev");
					}
				}
			}
		})
		next.click(function(){
			if(i == slideNum){
				return false;
			}
			else{
				i++;
				action(conveyer,slideWidth,i);
				if(i != 0){
					prev.removeClass("unprev");
					if(i == slideNum){
						$(this).addClass("unnext");
					}
				}
			}
		})
	}
	slide(conveyer_smode,slideWidth_smode,slideNum_smode,i_smode,prevBtn_smode,nextBtn_smode);
	slide(conveyer_dmode,slideWidth_dmode,slideNum_dmode,i_dmode,prevBtn_dmode,nextBtn_dmode);
	
	var viewStyleBtn = $(".albumEleList .viewStyle");
	var viewAllBtn = $(".albumEleList .viewAll");
	var smode = $(".albumEleList .smode");
	var dmode = $(".albumEleList .dmode");
	var slideBtn = $(".albumEleList .slideBtn");
	var screen = $(".albumEleList .smode .screen");
	viewStyleBtn.toggle(function(){
		$(this).html('按集数显示');
		viewAllBtn.attr("rel","dmode");
		smode.hide();
		dmode.show();
		init();
	},function(){
		$(this).html('按标题显示');
		viewAllBtn.attr("rel","smode");
		dmode.hide();
		smode.show();
		init();
	})
    viewAllBtn.toggle(function(){
		viewStyleBtn.hide();
		$(this).text("收起");
		//slideBtn.css("visibility","hidden");
		slideBtn.hide();
		screen.css({"width":"100%","height":"auto"});
		screen.find("ul").css({"width":"100%","position":"static"});
		screen.find("li").css("padding","2px 0px");
		if($(this).attr("rel") == "dmode"){
			dmode.hide();
			smode.show();
		}
	},function(){
		viewStyleBtn.show();
		$(this).text("查看全部");
		//slideBtn.css("visibility","visible");
		slideBtn.show();
		screen.css({"width":slideWidth_smode,"height":"26px"});
		screen.find("ul").css({"width":"99999px","position":"absolute"});
		screen.find("li").css("padding","0px");
		if($(this).attr("rel") == "dmode"){
			dmode.show();
			smode.hide();
		}
	})
}

function teacherFilter_school(){
	var schoolList = $(".main_teacher .filter_school ul");
	var btn = $(".main_teacher .filter_school .showBtn");
	if(schoolList.find("li").length > 27){
		schoolList.find("li:gt(26)").hide();
	}
	else{
		btn.hide();
	}
	btn.toggle(function(){
		$(this).removeClass("showAll").addClass("showPart").text("收起");
		schoolList.find("li:gt(26)").show();
	},function(){
		$(this).removeClass("showPart").addClass("showAll").text("展开");
		schoolList.find("li:gt(26)").hide();
	})
}

function commentScroll(){
	var con = $(".commentBox .con ul");
	function scroll(){
		var scrollEle = con.find("li:last");
		var scrollHeight = scrollEle.height() + 22;
		con.animate({"top":scrollHeight},1000,function(){
			scrollEle.insertBefore(con.find("li").eq(0));
			con.css("top","0px");
		});
	}
	var timer = setInterval(scroll,3000);
	con.hover(function(){
		clearInterval(timer);	
	},function(){
		timer = setInterval(scroll,3000);
	})
}

function playLight(){
	function getPageSize() {   
		var xScroll, yScroll;   
		if (window.innerHeight && window.scrollMaxY) {     
			xScroll = window.innerWidth + window.scrollMaxX;   
			yScroll = window.innerHeight + window.scrollMaxY;   
		} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac   
			xScroll = document.body.scrollWidth;   
			yScroll = document.body.scrollHeight;   
		} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari   
			xScroll = document.body.offsetWidth;   
			yScroll = document.body.offsetHeight;   
		}   
		var windowWidth, windowHeight;   
		if (self.innerHeight) { // all except Explorer   
			if(document.documentElement.clientWidth){   
				windowWidth = document.documentElement.clientWidth;    
			} else {   
				windowWidth = self.innerWidth;   
			}   
			windowHeight = self.innerHeight;   
		} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode   
			windowWidth = document.documentElement.clientWidth;   
			windowHeight = document.documentElement.clientHeight;   
		} else if (document.body) { // other Explorers   
			windowWidth = document.body.clientWidth;   
			windowHeight = document.body.clientHeight;   
		}      
		// for small pages with total height less then height of the viewport   
		if(yScroll < windowHeight){   
			pageHeight = windowHeight;   
		} else {    
			pageHeight = yScroll;   
		}   
		// for small pages with total width less then width of the viewport   
		if(xScroll < windowWidth){      
			pageWidth = xScroll;           
		} else {   
			pageWidth = windowWidth;   
		}   
		arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight);   
		return arrayPageSize;   
	}
	var zzWidth = getPageSize()[2];
	var zzHeight = getPageSize()[1];
	var zz = $("<div id='zz' style='position:absolute; left:0px; top:0px; background-color:#000; z-index:999;'></div>");
	var lightClose = $("<b id='lightClose' style='position:absolute; right:20px; top:20px; width:166px; height:70px; background:url(../images/gd.png) no-repeat; z-index:999; cursor:pointer;'></b>")
	$(".main_play .ope_playerArea .lightSwitch").click(function(){
		$("body").append(zz).append(lightClose);
		$("#zz").css({"width":zzWidth,"height":zzHeight});
		$(".main_play .playerArea .wrap").css("z-index","1000")
		$(".main_play .playerArea .player-ope_video").css("z-index","1000");
		$(".main_play .playerArea .caption").css("z-index","1000");
		$("#lightClose").hover(function(){
			$(this).css("background-position","0px -70px");
		},function(){
			$(this).css("background-position","0px 0px");
		})
		$("#lightClose").click(function(){
			$(this).remove();
			$("#zz").remove();
			$(".main_play .playerArea .wrap").css("z-index","auto")
			$(".main_play .playerArea .player-ope_video").css("z-index","auto");
			$(".main_play .playerArea .caption").css("z-index","auto");
		})
	})
}








$('#shipin,.studyVideo').hover(function(){
$('a#shipin').css({"background-color":"#0c7c0e","color":"#fff"});
$('.studyVideo span a').addClass('dsb');	
$('.studyVideo ul').show();
	
},function(){
$('a#shipin').css({"background-color":"transparent","color":"#B0B2B2"});		
$('.studyVideo span a').removeClass('dsb');
$('.studyVideo ul').hide();	

});

		pop_classify_all();
		formState($(".commentBox .commentForm textarea").eq(0));
		playList();


$('.intrList dd a').click(function(){
$(this).text("收起");	
$(this).parent().children('span').toggle();
return false;
	
});