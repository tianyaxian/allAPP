// JavaScript Document
!function () {
    var APPNAME = "dvideo_local" , strVideo = '' , urlFlag = 0 , videoList = [], loadckjs = false;
    var createMetro = function (img, name) {
		$.ajax({
			type: "get", url: "/apps/" +APPNAME+ "/ckplayer/ckplayer.js", async: false, dataType: "script", success: function (data) {
				loadckjs = true;
			}
		});

		$.ajax({
			type: "get",
			dataType: "json",
			url: "http://localhost:82/api/getdata.asp?path=/dvideo/flv",
			success: function (data) {
				videoList = data;
				console.log("[获取本地视频成功，数量" +videoList.length+ "]");
				return display(videoList);
			},
			error : function(data){
				console.log("获取本地视频失败，错误代码：" +data.status + "，错误信息：" + data.statusText);
				return display(videoList);
			}
		});


		strVideo+='<input type="button" onClick="return false" style="position:absolute;left:0;top:0;width:742px; height:420px; background:none; border:none;overflow: hidden;" />';
		strVideo+='<div id="b1"></div><div id="volume"><div class="buttonJia" onClick="setVolume1(CKobject.getObjectById(\'ckplayer_b1\'));">音量+</div><div class="buttonJian" onClick="setVolume2(CKobject.getObjectById(\'ckplayer_b1\'));">音量-</div></div>';
        return $("<div/>").addClass("zadd2 size32 zapp")
                          .append(strVideo);
    };


	window.apps.ps[APPNAME] = function () {
        return {
            dom: createMetro(),
			name: APPNAME
        }
    }
}();