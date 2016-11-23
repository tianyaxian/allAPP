(function(){
    //首页视图生成页
    var bookIntroPageView=Backbone.View.extend({
        el:"#bookIntroPage",//首页容器ID
        events:{
            'click .book_imgs_shows img':'coverImgView',
            'click .imgview_mask':'closeImgView',
            'click .imgview_btn_left':'imgViewLeft',
            'click .imgview_btn_right':'imgViewRight'
        },
        template:etdk.tpl,//模板
        //初始化应用
        initialize:function(){
//            etdk.g.delayImg($(".library_btn img")[0],etdk.g._IMG_+'/library_pointer.png',function(){
//                $(".library_btn").addClass('header_active');
//            });
//            $(".library_btn a")[0].target='_self';//如果是当前页点击就不打开新链接

           var html=this.template.ship_cloud();
            $("#footer").append(html);
            this.render();
            //自动适应处理
            Backbone.Events.bind('resizeScreen',this.resizeScreen,this);
            this.resizeScreen();
            //this.insertFooterImg();
        },
        resizeScreen:function(){
            // var $rec=this.$el.find('.download_recommend'),
               var $content=this.$el.find('.bookintro_cover_intro'),
                 width=this.$el.width();
            // var d_r_width=$rec.width();
            // $rec.css({height:d_r_width*3.8+'px'});
             $content.css({height:$content.width()/1.745+'px'});
            $('.imgview_mask').css({height:$('body').height()+110+'px'});
            var viewHeight=width/1.3333;
            if(etdk.g.bookData.type=='1' || etdk.g.bookData.type=='3'){
                viewHeight=width*1.3333;
            }
            this.$el.find('.coverImgView').css({
                width:0.376*width+'px',
                height:0.376*viewHeight+'px',
                marginLeft:-0.376*width/2+'px'
            });
            if(etdk.g.br.ie678){
                this.$el.find('.border_bg_imgview').css({
                    width:0.376*width+12+'px',
                    height:0.376*viewHeight+12+'px'
                });

            }

        },
        //渲染首页模板
        render:function(){
            this.$el.html(this.template.bookintro({book:etdk.g.bookData,rank:etdk.g.rank,reco:etdk.g.reco}));
        },
        imgViewAnimation:function(fag){
           //点击后过渡完成后才可以继续点击
            if(this.Tag){
              return;
            }
            var rel=this.imgrel,
                self=this,
                imgs=this.imgs,
                curImg=this.curImg;
                this.Tag=true;
            if(fag=='left'){
              rel-=1;
            }else{
              rel+=1;
            }
            if(rel==0){
              this.$('.imgview_btn_left').hide();
            }
            if(rel==4){
                this.$('.imgview_btn_right').hide();
            }    
            if(rel<4 && rel>=1){
                this.$('.imgview_btn_left,.imgview_btn_right').show();
            }
            curImg.css({opacity:0,filter:'alpha(opacity=0)'}).attr({src:imgs[rel]});
            this.imgrel=rel;

            curImg.animate({
              opacity:1
            },1000,'linear',function(){
                     self.Tag=false;
            }).css({flter:'Alpha(opacity=100)'});

        },
        imgViewLeft:function(e){
          this.imgViewAnimation('left');

        },
        imgViewRight:function(e){
          this.imgViewAnimation('right');
        },
        closeImgView:function(e){
            this.$('.imgview_mask,.coverImgView').hide();
        },
        coverImgView:function(e){
            var src=$(e.target).attr('rel');
            var num=parseInt($(e.target).attr('num'));
            var curImg=this.$('.cur_img_view');
            this.curImg=curImg;
            this.imgs=etdk.g.bookData.Padscreenshot;
            this.imgrel=num;
            curImg.attr({src:src});
            this.$('.imgview_mask,.coverImgView').show();
            if(num<4 && num>0){
                this.$('.imgview_btn_left,.imgview_btn_right').show();
            }
            if(num==0){
                this.$('.imgview_btn_left').hide();
                this.$('.imgview_btn_right').show();

            }
            if(num==4){
                this.$('.imgview_btn_right').hide();
                this.$('.imgview_btn_left').show();

            }
        },
        insertFooterImg:function(){
             var  cache=etdk.g.getStore(),
                 path=etdk.g._IMG_; 
              var bigCloud=$('.footer_big_cloud img'),
                  smallCloud=$('.footer_small_cloud img'),
                  ship=$('.footer_ship img'),
                  wave=$('.footer_wave img');    
                  imgInsert([bigCloud,smallCloud,ship,wave],['cloud_big','cloud_big','ship','ship_wave']);          
            
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
    window.etdk.v.bookIntroPageView=bookIntroPageView;
}());
