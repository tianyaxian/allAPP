/**
 * 触摸屏手势支持
 * @leovs 2015.4.7
 */
!function ($) {
    var getPointerPoint = function (t) {
        t = t.originalEvent ? t.originalEvent : t;
        t = t.touches ? t.touches[0] : t;
        return {x: void 0 !== t.pageX ? t.pageX : t.clientX, y: void 0 !== t.pageY ? t.pageY : t.clientY}
    };
    var touch = function (dom, touchAction) {
        var self = {}, events = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"],
            MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
        }, actions = [
            function (e) {
                self.moves = null;
                self.pointer = getPointerPoint(e);
                window.ismove = false;
            }, function (e) {
                if (self.pointer != null) {
                    self.moves = {
                        x: (((getPointerPoint(e).x - self.pointer.x) / dom.width()) * 100),
                        y: (((getPointerPoint(e).y - self.pointer.y) / dom.height()) * 100)
                    };
                    if (Math.abs(self.moves.x) > 2 || Math.abs(self.moves.y) > 2) window.ismove = true;
                    if (touchAction.move) touchAction.move(self.moves, e);
                }
                e.preventDefault();
            }, function (e) {
                self.pointer = null;
                if (self.moves == null) return;
                if (touchAction.end)  touchAction.end(self.moves, e);
                self.moves = null;
                e.preventDefault();
            }, function (e) {
                e.preventDefault();
            }
        ];
        for (var event in events) {
            $(dom).bind(event, actions[0]);
            for (var i = 0; i < events[event].length; i++) {
                $(dom).bind(events[event][i], actions[i + 1]);
            }
        }
    };
    $.fn.touch = function (touchAction) {
        touch(this, touchAction);
    };

    $.fn.touchAction = function (options) {
        var dom = $(this).css({
            transform: "translate3d(0px, 0px, 0px)",
            position: "absolute",
            width: "100%"
        }), self = {pages: $("> div", dom).length, cpage: 0};
        touch(dom, {
            move: function (moves) {
                if (moves.x < 2) return;
                /*dom.css({
                    transition: "transform 0s ease"
                    transform: "translate3d(" + ( -(self.cpage * 100) + moves.x) + "%, 0px, 0px)"
                });*/
            },
            end: function (moves) {
                var opage = self.cpage;
                if (Math.abs(moves.x) > 8) self.cpage += moves.x > 0 ? -1 : 1;
                if (self.cpage < 0) self.cpage = 0;
                if (self.cpage >= self.pages) self.cpage = self.pages - 1;
                dom.css({
                    transition: "transform .4s ease",
                    transform: "translate3d(-" + (self.cpage * 100 ) + "%, 0px, 0px)"
                });
                return opage == self.cpage || options.changepage && options.changepage($("> div:eq(" + self.cpage + ")", dom), self.cpage + 1);
            }
        });
    };
    /*$.fn.touchClick = function (fn) {
        var isStop = false, self = $(this).unbind("touchstart touchmove touchend click");
        return self.bind("touchstart", function (e) {
            isStop = false;
            self.pointer = getPointerPoint(e);
        }).bind("touchmove", function (e) {
            if (self.pointer != null) {
                self.moves = {
                    //x: (((getPointerPoint(e).x - self.pointer.x) / self.width()) * 100),
                    //y: (((getPointerPoint(e).y - self.pointer.y) / self.height()) * 100)
		    x: getPointerPoint(e).x - self.pointer.x ,
                    y: getPointerPoint(e).y - self.pointer.y
                };
                //if (self.moves.x > 5 || self.moves.y > 5) isStop = true;
            }
        }).bind("touchend", function (e) {
            if (!isStop && fn) fn.call(self[0]);
        }).click(fn);
    }*/
}(jQuery);