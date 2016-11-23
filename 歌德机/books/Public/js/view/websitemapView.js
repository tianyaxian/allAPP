(function(){
    //首页视图生成页
    var websitemapView=Backbone.View.extend({
        el:"#websitemap",//首页容器ID
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
        },
        resizeScreen:function(){

        },
        //渲染首页模板
        render:function(){
            /*
             click_count,
             id,
             parent_class_id,
             site_alias,
             site_description,
             site_keywords,
             site_name,
             site_url,
             sort_order,
             weight
             */
            var links=etdk.g.links;
            this.$el.html(this.template.websitemap({links:links}));
            this.resizeScreen();

        },
        destroy:function(){
            this.remove();
        }


    });
    window.etdk.v.websitemapView=websitemapView;
}());
