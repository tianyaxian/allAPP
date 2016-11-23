/*!
 * apps - gede apps loader.
 * @2015.3.29 leovs
 */
define(function (require, exports, module) {
	//var picshowImg = require("picshow").img;
    var videoFlag = window._CONFIG.HASDIVEO ? true: false;//由template.js设置
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
            } else {
                var app = window._CONFIG.applist[name];
                var appurl = app.url ;//? unescape(app.url.match(/(redirect_uri[^&]+)/img)[0]).replace("redirect_uri=", "") : "";
                if (app) {
                    var createMetro = function (img, name) {
                        return $("<div/>").addClass("zapp brick")
                            .append($("<img />").attr("src", img).error(function () {
                                /*this.src = '/images/null.png';*/
                            }))
                            .append($("<img width='0' height='0'/>").attr("src", appurl)) // 调用一次本地app地址进行一次gedecache级缓存*/
                            .append($("<a/>").addClass("ztxt").html(name));
                    };
                    window.apps.ps[name] = function () {
                        return {
                            dom: createMetro(app.logo, app.name),
                            url: unescape(appurl),
                            click: function () {
                                $.post("/server/apps/touchbook?cmd=statis", {s: JSON.stringify({name:app.name, type:"app"})});
                            }
                        }
                    };
                    fn(idx, ps[name]());
                } else {
                    fn(idx, null);
                }
            }
        } else {
            fn(idx, ps[name]());
        }
    }, sortMetro = function (count, el) {
        var doms = $("> div[idx]", el), lastWidth = 0, lastHeight = 0, xys = [];
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
                        el.append(metro.dom.attr("idx", idx).css("padding", 0));
                        if (metro.url || metro.click) {
                            //console.log("app click out");
                            new UIMorphingButton(metro.dom.addClass("morph-button morph-button-overlay morph-button-fixed").each(function () {
                                //console.log("app click in");
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
									//picshowImg.hide();
									//require("picshow").closeFn(false);
                                    window.runbg = true;
                                    $(".spinner", metro.dom).show();
                                    setTimeout(function () {
                                        if (metro.url) $("iframe", metro.dom).hide().attr("src", (typeof metro.url === 'string' ? metro.url : metro.url()));
                                        if (metro.click) metro.click.call(metro.dom);
                                    }, 200);
                                    try {CKobject.getObjectById('ckplayer_b1').videoPause();}catch(err){console.log(err.message);}//停止首页视频播放
                                }, onAfterClose: function () {
                                    try {CKobject.getObjectById('ckplayer_b1').videoPlay();}catch(err){console.log(err.message);}//首页视频重新播放
                                    window.runbg = false;
                                    $("iframe", metro.dom).hide().attr("src", "about:blank");
                                }
                            });
                        } else if (metro.urls == 1) {//xxgg/////////////////////////////////////////////
                            $(".gallery").on('staticClick', function(){
                                if($("img",$('.is-selected')).attr("alt").length > 0 && $("img",$('.is-selected')).attr("alt")!="#") {
                                    try {CKobject.getObjectById('ckplayer_b1').videoPause();}catch(err){console.log(err.message);}//停止首页视频播放
                                    $(document).unbind("touchClick touchstart touchmove touchend click");
									//picshowImg.hide();
									//require("picshow").closeFn(false);
                                    new UIMorphingButton(metro.dom.addClass("morph-button morph-button-overlay morph-button-fixed morph-button-fixed-498b").each(function () {
                                        setTimeout(function () {
                                            metro.dom.addClass("active open");
                                        }, 100)
                                        var self = $(this).append($("#content_div").html());
                                        console.log(self)
                                        $(".morph-content", self).css({left: "833px", top: "174px"});
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
                                    $(metro.dom).on("click",".icon-close",function(){
                                        window.runbg = false;
                                        $(".morph-content",metro.dom).addClass("bianSmall");
                                        setTimeout(function(){$(".morph-content",metro.dom).remove()},1000);
                                        $(metro.dom).removeClass("active open");
                                        $("iframe", metro.dom).hide().attr("src", "about:blank");
                                        try {CKobject.getObjectById('ckplayer_b1').videoPlay();}catch(err){console.log(err.message);}//首页视频重新播放
                                    });//end close click
                                }//end if(alt)
                            })	//end staticClick
                        }//end else
                        else if( metro.name == "dvideo")
                        {//如果首页加载视频app，直接禁用滚动图片
                            require("picshow").closeFn(false);
                        }
                    }//end metro
                    if (++loadCount == name.length) sortMetro(name.length, el);
                    return metro && metro.fn ? window.setTimeout(function () {
                        metro.fn.call(metro.dom)
                    }, 500) : null;
                });
            });
        }
    };
});
