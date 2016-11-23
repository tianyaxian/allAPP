// 模版0
define(function (require, exports, module) {
    $.ajaxSetup({cache: true});

    // 生成界面
    var main;
	var templateId = '4/';
    $.ajax({type: "get", url: "http://localhost:63342/"+templateId+"ejs/main.ejs?t=1", async: false, dataType:"text", success: function (data) {main = data}});
    $("body").append(main).addClass("zbg");
    $("#container").height($(window).height());

    seajs.use("/"+templateId+"js/all", function(){

        // 生成APP布局
		window._CONFIG = $.extend({"name":"","logo":"","background":"","passport":"","apps":"borrbooks,dvideo,subject,poems,hzpzpx,discovery","shutdown":"","template":"0","applist":{"borrbooks":{"id":191,"name":"图书借阅","url":"borrbooks","aid":1,"logo":"","key":"borrbooks"},"dvideo":["http://movie.ks.js.cn/flv/other/1_0.mp4","http://42.62.107.135:81/UploadFiles/2015-12/2/201512021621448789.flv"],"subject":{"id":194,"name":"特色专题","url":"subject","aid":4,"logo":"","key":"subject"},"hzpzpx":{"id":195,"name":"汉字识字拼写","url":"hzpzpx","aid":7,"logo":"","key":"hzpzpx"},"poems":{"id":196,"name":"古诗欣赏","url":"poems","aid":5,"logo":"","key":"poems"},"discovery":{"id":197,"name":"discovery","url":"discovery","aid":6,"logo":"","key":"discovery"}},"picshows":["/apps/hzpzpx/images/cover.png?gedecache=1"],"videoList":["/apps/hzpzpx/images/cover.png?gedecache=1"]}, window._CONFIG);
		var obj=window._CONFIG.apps.split(",");
		for(var i=0;i<obj.length;i++){if(obj[i]=='dvideo'){window._CONFIG.HASDIVEO=true;}}
		
        seajs.use("/"+templateId+"js/metro", function(layout){
            
			var obj=window._CONFIG.apps.split(",");
			for(var i=0;i<obj.length;i++){if(obj[i]=='news') obj.splice(i,1);}
			
            layout.metro(obj, $(".zbox"));
			
			

            $("#gede_logo").attr("src", (function(logo){
                return (logo == null || logo.length < 1) ? "/images/logos/default.png?gedecache=4" : logo;
            })(window._CONFIG.logo));

            // 背景图
            if (window._CONFIG.background && window._CONFIG.background.length > 0) {
                $("body").css("background", "url(" + window._CONFIG.background + ")");
            }

        });

        return loadover ? loadover() : null;
    });
});
