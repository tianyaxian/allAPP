(function(){
    //首页视图生成页
    var librarycatenavView=Backbone.View.extend({
        el:"#librarycatenav",//首页容器ID
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
            var $content=this.$el.find('.librarycatenav'),
                width=this.$el.width();
            var height=Math.floor(width*0.2/1.434);
            this.$el.find('.avatars_bg').css({height:height+'px'});

        },
        //渲染首页模板
        render:function(){
            var data=[
                ['education','儿童教育',1,'内容包括儿童安全教育、行为习惯培养、品德养成等多种题材，将教育融合在有趣的绘本故事中'],
                ['sleep_story','睡前故事',2,'内容包括精选温馨、感人、有趣的各类晚安小故事。生动有趣的情节、惟妙惟肖的配音、精美绚丽的图画，汇成一首首甜蜜的摇篮曲'],
                ['classics_of_sinology', '国学经典',3,'内容包括国内的诗词、神话、寓言、传说、史学、名著等多个类别的国学经典，声、图、文有机结合，让国学变得轻松有趣、通俗易懂'],
                ['science_nature','科普百科',4,'内容包括天文地理、动物、植物、生活等各种丰富全面的科普百科知识,让科学变得既通俗有趣'],
                ['masterwork','外国名著',5,'内容包括各种适合孩子的外国经典名著和优质绘本故事，并经过提炼精编，使其更贴近孩子心理'],
                ['cartoon','益智启蒙',6,'内容包括各种形式丰富、轻松有趣的游戏书、问答书在对孩子进行启蒙教育的同时让其爱上阅读']
            ];
            var catelinks=etdk.g.catelinks;
            _.each(data,function(value,key){
                _.each(catelinks,function(v,k){
                    if(v.site_alias == value[1]){
                        value.push(v.site_url);
                    }
                });
            });
            this.$el.html(this.template.librarycatenav({data:data}));
            this.resizeScreen();

        },
        destroy:function(){
            this.remove();
        }


    });
    window.etdk.v.librarycatenavView=librarycatenavView;
}());
