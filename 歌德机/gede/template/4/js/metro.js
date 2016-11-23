/*!
 * apps - gede apps loader.
 * @2015.3.29 leovs
 */
define(function (require, exports, module) {

	var picshowImg = require("picshow").img;
	var videoFlag = window._CONFIG.HASDIVEO;
	
	var arrVideo = window._CONFIG.applist.dvideo;
	var lunBoInfo = require('./lunBoVideo');
	var lunBoVideo = '';
	lunBoVideo = '<input type="button" onClick="CKobject.getObjectById("ckplayer_a1").videoPlay();" style="position:absolute;left:0;top:0;width:600px; height:400px; background:none; border:none;" /><div id="a1"></div><div id="volume"><div class="buttonJia" onClick="lunBoInfo.setVolume1;">音量+</div><div class="buttonJian" onClick="setVolume2();">音量-</div></div>';
	
    var ps = [], domwidth = 1100, getapp = function (idx, name, fn) {
        if (!ps[name]) {
            var url = "/apps/" + name + "/app.js", loadappjs = false;
            $.ajax({
                type: "get", url: url, async: false, dataType: "text", success: function (data) {
                    loadappjs = true;
                }
            });
            if (loadappjs) {
                $.getScript("/apps/" + name + "/app.js", function (response, status) {
                    fn(idx, ps[name]());
                });
            } 
			else {
                var app = window._CONFIG.applist[name], appurl = app.url + "&gedecache=1";
                if (app) {console.log(app);
					if(app.name=="滚动视频"){alert(22);}
					else{
						var createMetro = function (img, name) {
							console.log([name, img].join(" >> "));
							return $("<div/>").addClass("zapp")
								.append($("<img style='position:relative;' />").attr("src", img).error(function () {
									this.src = '/images/null.png';
								}));
								//.append($("<a/>").addClass("ztxt").html(name));
						};
						window.apps.ps[name] = function () {
							return {
								dom: createMetro(app.logo, app.name),
								url: appurl
							}
						};
						fn(idx, ps[name]());
					 }
                } else {
                    fn(idx, null);
                }
            }
        } else {
            fn(idx, ps[name]());
        }
    }, sortMetro = function (count, el) {
			$("> div[idx=" + 0 + "]", el).css({left:27+'px',top:0,width:292+'px',height:89+'px'}).children('img').attr('src','/template/4/images/cover.png');
			$("> div[idx=" + 1 + "]", el).css({left:500+'px',top:0+'px',width:756+'px',height:458+'px'}).html(lunBoVideo);
			$("> div[idx=" + 2 + "]", el).css({left:518+'px',top:600+'px',width:150+'px',height:140+'px'});
			$("> div[idx=" + 3 + "]", el).css({left:883+'px',top:600+'px',width:150+'px',height:140+'px'});
			$("> div[idx=" + 4 + "]", el).css({left:1066+'px',top:600+'px',width:150+'px',height:140+'px'});
			$("> div[idx=" + 5 + "]", el).css({left:700+'px',top:600+'px',width:150+'px',height:140+'px'});
			var flashvars={
				f:"http://movie.ks.js.cn/flv/other/1_0.mp4",
				c:0,
				p:1,
				e:0,
				v:80
				};
			var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
			CKobject.embedSWF('http://localhost/template/4/ckplayer/ckplayer.swf','a1','ckplayer_a1','600','400',flashvars,params);
    };
	
    window.apps = {ps: ps};
    module.exports = {
        metro: function (name, el) {
            domwidth = el.width();
            var loadCount = 0;
			
            $(name).each(function (idx) {
				
                getapp(idx, this, function (idx, metro) {
                    if (metro) {
                        $("img", metro.dom);
                        el.prepend(metro.dom.attr("idx", idx).css("left", -10000));
                        if (metro.url || metro.click) {
                            new UIMorphingButton(metro.dom.addClass("morph-button morph-button-overlay morph-button-fixed").each(function () {
                                var self = $(this).append($("#content_div").html());
                                var iframe = $("iframe", self).load(function () {
                                    $(".spinner", self).hide();
                                    $("iframe", self).css({
                                        width: $(window).width(),
                                        height: $(window).height()
                                    }).show();
                                });
                            })[0], {
                                closeEl: '.icon-close', onAfterOpen: function () {
									$(document).unbind("touchClick touchstart touchmove touchend click");
									picshowImg.hide();
									require("picshow").closeFn(false);
                                    window.runbg = true;
                                    $(".spinner", metro.dom).show();
                                    setTimeout(function () {
                                        if (metro.url) $("iframe", metro.dom).hide().attr("src", (typeof metro.url === 'string' ? metro.url : metro.url()));
                                        if (metro.click) metro.click.call(metro.dom);
                                    }, 200);
                                }, onAfterClose: function () {
                                    window.runbg = false;
                                    $("iframe", metro.dom).hide().attr("src", "about:blank");
									if(!videoFlag)
											require("picshow").openFn();
									$(document).touchClick(function(){
										if(!videoFlag){
											picshowImg.hide();
											require("picshow").closeFn(true);
										}else{
											picshowImg.hide();
											require("picshow").closeFn(false);	
										}
									});
                                }
                            });
                        } else if (metro.urls == 1) {//xxgg/////////////////////////////////////////////
                            $(".gallery").on('staticClick', function(){
                                $(document).unbind("touchClick touchstart touchmove touchend click");
                                if($("img",$('.is-selected')).attr("alt").length > 0 && $("img",$('.is-selected')).attr("alt")!="#") {
									picshowImg.hide();
									require("picshow").closeFn(false);
                                    new UIMorphingButton(metro.dom.addClass("morph-button morph-button-overlay morph-button-fixed morph-button-fixed-498b").each(function () {
                                        setTimeout(function () {
                                            metro.dom.addClass("active open");
                                        }, 100)
                                        var self = $(this).append($("#content_div").html());
                                        console.log(self)
                                        $(".morph-content", self).css({left: "815px", top: "200px"});
                                        var iframe = $("iframe", self).load(function () {
                                            $(".spinner", self).hide();
                                            $("iframe", self).css({
                                                width: $(window).width(),
                                                height: $(window).height()
                                            }).show();
                                        });
                                        window.runbg = true;
                                        $(".spinner", metro.dom).show();
                                        if ($("img", $('.is-selected')).attr("alt").length > 0) $("iframe", metro.dom).hide().attr("src", $("img", $('.is-selected')).attr("alt") == "#" ? "about:blank" : $("img", $('.is-selected')).attr("alt"));

                                    })[0]);//end button
                                    $(metro.dom).on("click", ".icon-close", function () {
                                        window.runbg = false;
                                        $(".morph-content", metro.dom).addClass("bianSmall");
                                        setTimeout(function () {
                                            $(".morph-content", metro.dom).remove()
                                        }, 1000)
                                        $(metro.dom).removeClass("active open");
                                        $("iframe", metro.dom).hide().attr("src", "about:blank");
										if(!videoFlag)
											require("picshow").openFn();
                                        $(document).touchClick(function(){
											if(!videoFlag){
												picshowImg.hide();
												require("picshow").closeFn(true);
											}else{
												picshowImg.hide();
												require("picshow").closeFn(false);	
											}
                                        });
                                    });
                                }//end if($("img",$('.is-selected')).attr("alt").length > 0 && $("img",$('.is-selected')).attr("alt")!="#")
                            })	//end staticClick
                        }else if(metro.name=='dvideo'){
							require("picshow").closeFn(false);		
						}
                        if (++loadCount == name.length) sortMetro(name.length, el);

                        return metro && metro.fn ? window.setTimeout(function () {
                            metro.fn.call(metro.dom)
                        }, 500) : null;
                    }
                });
            });
        }
    };
	
	
	
	
});