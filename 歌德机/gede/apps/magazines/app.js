/**
 * Created by jichu on 2016/6/20.
 */
!function () {
    var APPNAME = "magazines";
    var createMetro = function (img, name) {
        return $("<div/>").addClass("zapp size11")
            .append($("<img/>").attr("src", img))
            .append($("<a/>").addClass("ztxt").html(name));
    };
    window.apps.ps[APPNAME] = function () {
        return {
            dom: createMetro("/apps/subject/images/cover.png?gedecache=1", ""),
            url: "http://122.112.16.227:81/rs/ztbook/home/index.html?gedecache=1",
            click: function () {
                $.post("/server/apps/touchbook?cmd=statis", {s: JSON.stringify({name:"期刊杂志", type:"app"})});
            }
        }
    }
}();