(function(){
    //首页视图生成页
    var whatDukuView=Backbone.View.extend({
        el:"#whatduku",//首页容器ID
        events:{
            'click .s_details':'introExpand'
        },
        template:etdk.tpl,//模板
        //初始化应用
        initialize:function(){
//            etdk.g.delayImg($(".what_duku_btn img")[0],etdk.g._IMG_+'/whatduku_pointer.png',function(){
//                $(".what_duku_btn").addClass('header_active');
//            });
//            $(".what_duku_btn a")[0].target='_self';//如果是当前页点击就不打开新链接
            var html=this.template.ship_cloud();
            $("#footer").append(html);
            this.render();
            this.resizeScreen();
            //自动适应处理
            Backbone.Events.bind('resizeScreen',this.resizeScreen,this);
           // this.insertFooterImg();
        },
        resizeScreen:function(){
            var width=$('#container').width();
            this.$('.whatduku_intro_img,.whatduku_intro_img_bg').css({height:width/1.875+'px'});

        },
        introExpand:function(e){
            var $img=$(e.target);
            var rel=parseInt($img.attr('rel'));
            var attr=$img.attr('attr');
            var $intro=this.$('.whatduku_intro'+rel);
            var value='',time;
            $intro.stop();
            var width;
            switch(rel){
                case 3 :
                    width=920;
                    time=850;
                    break;
                case 4 :
                    width=1600;
                    time=1500;
                    break;
                case 5 :
                    width=540;
                    time=500;
                    break;
            }
            if(attr=='expand'){
                $img[0].src=etdk.g._IMG_+'s_details.png';
                width=340;
                value='collect';
                $intro.find('.chapter_expand span').html('......');
            }else{
                $img[0].src=etdk.g._IMG_+'collect.png';
                value='expand';
                $intro.find('.chapter_expand span').empty();
            }
            $intro.animate({height:width+'px'},time,'linear',function(){
                $img.attr({attr:value});
            });
        },
        //渲染首页模板
        render:function(){
            var self=this;
            this.$el.html(this.template.whatduku_intro());
          
        },
        insertFooterImg:function(){
               var cache=etdk.g.getStore(),
                   path=etdk.g._IMG_;             
               var wave=$('.footer_wave img');
                   imgInsert([wave],['ship_wave']);
              /**
                @param imgs object array
                @param name string array
              */
              function imgInsert(imgs,name){
                var length=imgs.length;
                //ie6,7不支持base64
                  for(var i=0;i<length;i++){
                    if(etdk.g.br.ie678){
                     imgs[i][0].src=path+name[i]+'.png';
                     continue;
                     }
                  //如果缓存了
                      if(cache.footerImgs){
                        //如果缓存了就加载缓存,没有就创建缓存
                        etdk.g.imgLoad(imgs[i][0],name[i],cache.footerImgs,function(){
                          etdk.g.imgBase64ToStore(imgs[i][0],name[i],cache.footerImgs);
                        });
                     }                  
                   else{
                         etdk.g.imgBase64ToStore(imgs[i][0],name[i],'footerImgs');
                    } 
                }
             }                    

        },
        destroy:function(){
            this.remove();
        }


    });
    window.etdk.v.whatDukuView=whatDukuView;
}());
