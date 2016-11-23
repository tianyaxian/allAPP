(function(){
    //首页视图生成页
    var advertisePageView=Backbone.View.extend({
        el:"#advertise",//首页容器ID
        events:{

        },
        template:etdk.tpl,//模板
        //初始化应用
        initialize:function(){
            var curpage=this.$el.attr('curpage');
            if(curpage == 'childrensday'){
                this.childrensday();
            }
            if(curpage == 'pickholein'){
                this.pickholein();
            }
            if(curpage == 'loadclient'){
//               etdk.g.delayImg($(".loadClient_btn img")[0],etdk.g._IMG_+'/load_client_pointer.png',function(){
//                   $(".loadClient_btn").addClass('header_active');
//               });
               $('body').css({
                   background: "url('/Public/imgs/library_bg.png') repeat"
               });
                var html1=this.template.ship_cloud();
                var html2=this.template.crab_child();
                $("#footer").append(html1+html2);
           }
            if(curpage == 'activity'){
//                etdk.g.delayImg($(".activity_btn img")[0],etdk.g._IMG_+'/activity_btn_pointer.png',function(){
//                    $(".activity_btn").addClass('header_active');
//                });

                var html1=this.template.ship_cloud();
                var html2=this.template.crab_child();
                $("#footer").append(html1+html2);
            }


            this.resizeScreen();
            Backbone.Events.bind('resizeScreen',this.resizeScreen,this);
            $('.advertise').remove();

            this.curpage=curpage;
        },
        resizeScreen:function(){
            var width=$('#container').width();
            if(this.curpage == 'loadclient'){
                var height=width*0.875/2.1+'px';
                $('.loadclient').css({height:height});
            }
            if(!etdk.g.br.ie67){
                return;
            }
            if(width<=860 && this.curpage == 'childrensday'){
                $('.childrensday').css({width:width+'px'});
            }
            if(width>860 && this.curpage == 'childrensday'){
                $('.childrensday').removeAttr('style');
            }

            if(width<=860 && this.curpage == 'pickholein'){
                $('.pickholein_img').css({width:width+'px'});
            }
            if(width>860 && this.curpage == 'pickholein'){
                $('.pickholein_img').removeAttr('style');
            }


        },
        pickholein:function(){
            $('.header_bg').after("<img class='pickholein_img' src='/Public/imgs/advers/pickholein.png'/>");
            $('#container').hide();
        },
        childrensday:function(){
            $('.header_bg').after("<img class='childrensday' src='/Public/imgs/advers/childrensday.jpg'/>");
            $('#container').hide();
        },
        //渲染首页模板
        render:function(){
        },
        destroy:function(){
            this.remove();
        }
    });
    window.etdk.v.advertisePageView=advertisePageView;
}());
