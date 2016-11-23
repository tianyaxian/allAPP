(function(){
    //首页视图生成页
    var libBooksView=Backbone.View.extend({
        el:"#libBook",//首页容器ID
        events:{
            'click .avatars_bg':'categoryHandler',
            'click .load_more_dashed':'loadMore'
        },
        nextPage:1,
        pageTotal:1,
        template:etdk.tpl,//模板
        //初始化应用
        initialize:function(){
//            etdk.g.delayImg($(".library_btn img")[0],etdk.g._IMG_+'/library_pointer.png',function(){
//                $(".library_btn").addClass('header_active');
//            });
//            $(".library_btn a")[0].target='_self';//如果是当前页点击就不打开新链接
            var html=this.template.giraff_wave_cloud();
            $("#footer").append(html);
            //this.insertFooterImg();
            this.render();
            //自动适应处理
            Backbone.Events.bind('resizeScreen',this.resizeScreen,this);
        },
        resizeScreen:function(){
            var width=$('#container').width();
            var realwidth=$('body').width();
            //图片大小比例1024*768(1.333)
            var imgWidth=width*0.7*0.842*0.94*0.916*0.3;
            var imgHeight=imgWidth*0.96/1.26*0.94;
            this.$el.find('.list_img a img').css({height:imgHeight+'px'});
            this.imgHeight=imgHeight;
            this.$el.css({paddingTop:width/11.4*0.79+'px'});
            this.$el.find('.r_b_c').css({paddingTop:width/11.4*0.6+'px'});
            this.$el.find('.avatars').css({height:width*0.7*0.842*0.94*0.19+'px'});


            if(realwidth<=1200){
                realwidth=width;
            }
            this.$el.find('.giraffe').css({left:(realwidth-width)/2+width*0.85+'px'});
            $(".roof_bg").css({
                height:width/11.4+"px",
                width:width*0.8+'px',
                left:(realwidth-width*0.8)/2+'px'
              //  top:width/11.4*0.887+'px'
            });





            this.setCurtainHeight();
        },
        setCurtainHeight:function(){
            var curtain=this.$el.find('.curtain');
            curtain.removeAttr('style').css({height:this.$el.height()+'px'});
            this.$el.find('.giraffe').css({top:$('#container').height()+90-242+'px'});
        },
        //渲染首页模板
        render:function(){
            var self=this;
            var data=[
                ['iso', '国际',6],
                ['huiben', '绘本故事',2],
                ['jierui','杰瑞米',1],
                ['masterwork','名著',4],
                ['cartoon','益智',5],
                ['free','免费',7]
            ]
            this.$el.html(this.template.library_books({data:data}));
            this.resizeScreen();
            this.categoryHandler(null);
        },
        insertFooterImg:function(){
            var  cache=etdk.g.getStore(),
                path=etdk.g._IMG_;
            var bigCloud=$('.footer_big_cloud img'),
                wave=$('.footer_wave img');
                imgInsert([bigCloud,wave],['cloud_big','ship_wave']);
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
        queryBooksData:function(args,tag){
            this.dataRequest(args,function(data){
                var self=this,rows={},pages=parseInt(data.pages);
                rows.height=this.imgHeight+'px';
                rows.list=data.list;
                rows.http='http://kids.appcarrier.com/stores/';
                rows.cover='/cover/cover_low.jpg';
                rows.cid= this.curCid;
                this.pages=pages ? pages : 0;
                var books=this.$el.find('.r_books');
                //如果是真就是加载更多点击
                if(data.error){
                    if(!tag){
                        books.empty();
                        $(window).resize();
                        this.setCurtainHeight();
                    }
                    return;
                }
                var  html=self.template.books_list({data:rows});
                if(!tag){
                    books.empty();
                }
                books.append(html);
                if(this.nextPage<pages){
                    this.$('.load_more').css({visibility:'visible'});
                }
                if(this.pages<=1){
                    this.$('.load_more').css({visibility:'hidden'});
                }
                this.nextPage+=1;
                this.setCurtainHeight();
                $(window).resize();

            });
        },
        categoryHandler:function(e){
            var cid=etdk.g.curCid;
            $('.avatars_bg').removeClass('select_state');
            if(e){
                var $el=$(e.currentTarget);
                $el.addClass('select_state');
                cid=parseInt($el.attr('cid'));
            }else{
                $('.avatars_bg[cid='+cid+']').addClass('select_state');
            }
           if( this.cid && this.cid==cid){
               return;
           }
            this.cid=cid;
            var args = {
                size : 9,
                page :1,
                cid:cid
            }
            this.curCid=cid;
            this.nextPage=1;
            this.queryBooksData(args);
        },
        dataRequest:function(args,callback){
            $.ajax('/library-getCategory', {
                dataType: 'json',
                context: this,
                timeout: 5000,
                data:args,
                success:callback,
                error:function(error){

                }
            });
        },
        loadMore:function(e){
            var pages=this.pages;
            if(this.nextPage>=pages){
                $(e.target).parent().css({visibility:'hidden'});
            }
            var args={
                size:9,
                page:this.nextPage,
                cid:this.curCid
            }
            this.queryBooksData(args,true);
        },
        URLdecode:function(str) {
            var ret = "";
            for(var i=0;i<str.length;i++) {
                var chr = str.charAt(i);
                if(chr == "+") {
                    ret += " ";
                }else if(chr=="%") {
                    var asc = str.substring(i+1,i+3);
                    if(parseInt("0x"+asc)>0x7f) {
                        ret += decodeURI("%"+ str.substring(i+1,i+9));
                        i += 8;
                    }else {
                        ret += String.fromCharCode(parseInt("0x"+asc));
                        i += 2;
                    }
                }else {
                    ret += chr;
                }
            }
            return ret;
        },
        destroy:function(){
            this.remove();
        }


    });
    window.etdk.v.libBooksView=libBooksView;
}());
