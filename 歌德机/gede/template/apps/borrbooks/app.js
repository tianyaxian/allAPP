!function () {
    var createMetro = function (img, name) {
        return $("<div/>").addClass("zadd2 brick zapp morph-button-fixed-498a").width(498).height(450)
            .append($("<img/>").attr("src", img))
            .append($("<a/>").addClass("ztxt").html(name));
    };

    window.apps.ps["borrbooks"] = function () {
        return {
            dom: createMetro("/apps/borrbooks/images/cover.png?gedecache=1", ""),
            url: "/apps/borrbooks/index.shtml?gedecache=6",
            click: function () {
                $.post("/server/apps/touchbook?cmd=statis", {s: JSON.stringify({name:"图书借阅", type:"app"})});
            }
        }
    }
}();