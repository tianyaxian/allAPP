(function(){
    //首页视图生成页
    var readplanView=Backbone.View.extend({
        el:"#readplan",//首页容器ID
        events:{
        },
        template:etdk.tpl,//模板
        //初始化应用
        initialize:function(){

            var html1=this.template.ship_cloud();
            var html2=this.template.crab_child();
            $("#footer").append(html1+html2);
            this.render();
            //自动适应处理
            Backbone.Events.bind('resizeScreen',this.resizeScreen,this);
            this.displayVideo();
        },
        resizeScreen:function(){
                   var height=parseInt(this.$el.find('.video_area').width()/1.74863)+2;
                   $('.read_bg_color .video_area,.video_area').css({height:height+'px'});

        },
        //渲染首页模板
        render:function(){

            this.$el.html(this.template.readplan());
            this.resizeScreen();

        },
        displayVideo:function(){
            var flashvars={
                f:'/Public/resource/video/readplan.mp4',
                c:0,
                p:1,
                e:1,
                lv:1
            };
            var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
            var video=['/Public/resource/video/readplan.mp4->video/mp4'];
                             //播放器路径
            CKobject.embed('/Public/js/lib/ckplayer/ckplayer/ckplayer.swf',
                'video',//容器id
                'ckplayer_video',//播放器id
                '100%',//宽度可以是百分比
                '100%',//高度可以是百分比
                true,//优先调用设置，false=优先调用flash播放器，true=优先调用HTML5播放器
                flashvars,//flash播放器的初始化参数，以及HTML5初始化参数，比如默认播放/暂停等设置，详细的可以参考【flashvars里各参数的说明】这一版块
                video,//HTML5视频播放地址，数组形式，详细的可参考HTML5视频调用的说明
                params);
        },
        destroy:function(){
            this.remove();
        }


    });
    window.etdk.v.readplanView=readplanView;
}());
