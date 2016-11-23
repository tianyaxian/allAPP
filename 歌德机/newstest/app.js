!function () {
    var createMetro = function (img, name) {
        return $("<div/>").addClass("zapp")
            .append($("<img/>").attr("src", img))
            .append($("<a/>").addClass("ztxt").html(name))
            //.append($("<p/>").addClass("zcount").html("4,768"));
    };

    window.apps.ps["news"] = function () {
        return {
            dom: createMetro("/apps/news/images/cover.png", ""),
            url: "/apps/news/index.shtml?gedecache=1",
            click: function () {
                $.post("/server/apps/touchbook?cmd=statis", {s: JSON.stringify({name:"信息动态", type:"app"})});
            }
        }
    }
}();