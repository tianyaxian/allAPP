(function(){
    //首页视图生成页
    var newtabloidView=Backbone.View.extend({
        el:"#newtabloid",//首页容器ID
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
            var self=this;
            //新闻列表
            var lists=etdk.g.chapterList;
            //新闻内容展示
            var chapter=etdk.g.chapter;
            //推荐下载排行
            var reco=etdk.g.reco;
            //最新文章排行
            var news=etdk.g.new_chapter;
            //总共多少页
            var pages=etdk.g.pages;
            //如果是文章显示就是true
            var article=chapter ? true :false;

            var data={
                reco:reco,
                news:news,
                pages:pages,
                article:article
            }
            if(article){
                data.chapter=chapter[0];
                this.$el.html(this.template.newtabloid(data));
            }else{
               var $html=$(this.$el.html(this.template.newtabloid(data)));
                   $html.find('.chapter_list ul').html(this.template.chapter_list({list:lists}));
                this.$el.find('.pagination').createPage({
                    pageCount:pages,
                    current:1,
                    backFn:function(p){
                        self.categoryHandler(p);

                    }
                });
            }
            this.resizeScreen();

        },
        categoryHandler:function(num){
            var arg={};
            arg.page=num;
            $.ajax('/index-chapterpage', {
                dataType: 'json',
                context: this,
                timeout: 3000,
                data:arg,
                success:function(data){
                    this.$el.find('.chapter_list ul').html(this.template.chapter_list({list:data}));
                },
                error:function(error){

                }
            });
        },
        destroy:function(){
            this.remove();
        }


    });
    window.etdk.v.newtabloidView=newtabloidView;
}());
