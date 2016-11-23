(function(){
    //首页视图生成页
    var libraryBooksView=Backbone.View.extend({
        el:"#home_body",//首页容器ID
        events:{
            'click .avatars_bg':'categoryHandler',
            'click .imgToRight':'imgTurnRight',
            'click .imgToLeft':'imgTurnLeft',
            'click .loopImgBtn':'goToCliendLoad'
        },
        nextPage:1,
        pageTotal:1,
        loopNum:etdk.g.ad_imgs.length,
        template:etdk.tpl,//模板
        //初始化应用
        initialize:function(){
//            etdk.g.delayImg($(".home_btn img")[0],etdk.g._IMG_+'/home_pointer.png',function(){
//                $(".home_btn").addClass('header_active');
//            });
           // $(".home_btn a")[0].target='_self';//如果是当前页点击就不打开新链接
            var html1=this.template.ship_cloud();
            var html2=this.template.crab_child();
            $("#footer").append(html1+html2);
            this.render();
            //自动适应处理
            Backbone.Events.bind('resizeScreen',this.resizeScreen,this);
            this.startImgLoop();
            this.flyBirdAnimate();
            this.fly();
            this.wordBlink();
            this.shipAnimate();
            Backbone.Events.bind('wordBlink',this.changeBlink,this);
        },
        resizeScreen:function(){
            var width=$("#container").width();
            var loop_bg_h=width*0.6841666/1.4927;
            this.$el.find('.imgsloop,.img_loop_bg,.loopword_left').css({height:loop_bg_h+'px'});
            //图片大小比例1024*768(1.333)
            var imgHeight=(width*0.816*0.3/1.42+30)*2+20;
           // var btnHeight=width*0.9*0.3/1.428;
            //this.$el.find('.list_img a img,.book_cover_word_container').css({height:imgHeight+'px'});
            //this.$('.avatars_bg').css({height:btnHeight+'px'});
           // this.imgHeight=imgHeight;
            this.$el.find('.duku_world_intro_bg').css({top:loop_bg_h+80+imgHeight+80+22+'px'});

        },
        changeBlink:function(){
            var top=$(window).scrollTop();
            var $blink=this.$('.wave_bg_orange img');
            if(top>100){
                    $blink.stop().hide();

            }else{
                this.wordBlink();
                $blink.show();

            }
        },
        wordBlink:function(){
            var $blink=this.$('.wave_bg_orange img'),blank;
            blank=setInterval(function(){
                if($blink.css('display')=='none'){
                    clearInterval(blank);
                    return;
                }
                $blink.animate({
                    opacity:0
                },700,'linear',function(){
                    $blink.animate({opacity:1},700,'linear').css({flter:'Alpha(opacity=100)'});
                }).css({flter:'Alpha(opacity=0)'});
            },2000);
            this.blank=blank;
        },
        //渲染首页模板
        render:function(){
           var catelinks=etdk.g.catelinks;
            var ad_imgs=etdk.g.ad_imgs;
            var topline=etdk.g.topLine_latestNews.topline;
            var latest=etdk.g.topLine_latestNews.latest;
            var data=[
                ['classics_of_sinology', '国学经典',3],
                ['masterwork','外国名著',5],
                ['sleep_story','睡前故事',2],
                ['science_nature','科普百科',4],
                    ['education','儿童教育',1],
                ['cartoon','益智启蒙',6]
            ];

            _.each(data,function(value,key){
                _.each(catelinks,function(v,k){
                    if(v.site_alias == value[1]){
                        value.push(v.site_url);
                    }
                });
            });
            this.$el.html(this.template.library_books({
                data:data,
                loopNum:ad_imgs.length,
                imgs:ad_imgs,
                topline:topline,
                latest:latest
            }));
            this.resizeScreen();
            this.categoryHandler(null,true);
        },
        goToCliendLoad:function(e){
            var name= e.target.className;
            var link=document.createElement('a');
            $(link).html('<span>客户端下载</span>');
            //link.target='_blank';
            var href='/advertise-loadclient';
//            if(etdk.g.br.windows){
//                href=etdk.g.windows;
//            }
//            if(etdk.g.br.android){
//            }
//            if( etdk.g.br.mac || etdk.g.br.ios){
//                href=etdk.g.appstore;
//            }
            if(etdk.g.br.ie78){
                link.href=href;
                $(link).find('span').click();
            }else{
                window.open(href);
            }
        },
        flyBirdAnimate:function(){
             var self=this;
            var fly=setInterval(function(){
                       self.fly();
            },6000);
        },
        fly:function(){
            var $fly=this.$el.find('.fly_bird');
            this.flyBirdAniNum($fly,'20%','40%',2000);
            this.flyBirdAniNum($fly,'50%','50%',1200);
            this.flyBirdAniNum($fly,'60%','20%',1000);
            this.flyBirdAniNum($fly,'90%','-20%',800,function(){
                $fly.css({left:'-20%',top:'80%'});
            });

        },
        flyBirdAniNum:function($fly,left,top,time,callback){
            $fly.animate({
                left:left,
                top:top
            },{
                easing: 'easeInCubic',
                duration: time,
                complete: function(){
                    (typeof callback == 'function') && callback();
                }
            });
        },
        shipAnimate:function(){
            var self=this,$ship=$('.footer_ship');
            var fly=setInterval(function(){
                   action();
            },10000);

            function action(){
                self.flyBirdAniNum($ship,'20%','-117px',4000);
                self.flyBirdAniNum($ship,'52%','-117px',4000);
            }
            action();

        },
        imgTurnRight:function(e){
            this.imgsViewLoop('right');
        },
        imgTurnLeft:function(e){
            this.imgsViewLoop('left');
        },
        startImgLoop:function(){
            var self=this;
           this.imgs=setInterval(function(){
                   self.imgsViewLoop();
           },7000);
        },
        imgsViewLoop:function(btn){
            var $curImg=this.$el.find('.imgs_loop'),//轮播容器对象
            toLeft,//定位多少值
            rel,//下一第几张图片
            num= this.loopNum,
            self=this;
            var isImg=parseInt($curImg.attr('rel'));//当前所在第几张图片
            if(isImg == 0){
                this.go=true;//向左动作
                //this.$el.find('.imgToRight').show();
                this.$el.find('.imgToLeft').hide();
            }
            if(isImg == num){
                this.go=false;//向右动作
                this.$el.find('.imgToRight').hide();
            }
            if(isImg !==num && isImg !==0){
                this.$el.find('.imgToLeft,.imgToRight').removeAttr('style');
            }
           //如果点击了左右按钮
            if(btn){
                clearInterval(this.imgs);//关闭自动轮播
                $curImg.stop();//停止动画
                 if(btn == 'right'){
                    this.go=true;
                }
                else if(btn == 'left'){
                    this.go=false;
                }
            }

            if(this.go){
                toLeft=-(isImg+1)*100+'%';
                rel=isImg+1;
            }else{
                toLeft=-(isImg-1)*100+'%';
                rel=isImg-1;
            }
            $curImg.animate({
                left:toLeft
            },{
                easing: 'easeInCubic',
                duration: 1500,
                complete: function(){
                                $curImg.attr({rel:rel});
                                self.curRel=rel;
                                if(rel > 0 && rel< num){
                                    self.$el.find('.imgToLeft,.imgToRight').removeAttr('style');
                                }
                                if(rel == 0){
                                    self.$el.find('.imgToLeft').hide();
                                    self.$el.find('.imgToRight').removeAttr('style');
                                }
                                if(rel == num){
                                    self.$el.find('.imgToRight').hide();
                                    self.$el.find('.imgToLeft').removeAttr('style');
                                }
                                if(btn){//如果点击了按钮就重启自动轮播
                                    self.startImgLoop();
                                }
                    self.$('.imgstate').removeClass('imgstateColor');
                    self.$('.imgstate'+rel).addClass('imgstateColor');
                }
            });
        },
        queryBooksData:function(args){
            this.dataRequest(args,function(data){
                var self=this,rows={},list=data.list,num,startNum,
                    tag= 0,stream1,stream2,stream3,stream4;
                rows.http='http://kids.appcarrier.com/stores/';
                rows.cover='/cover/cover_low.jpg';
                this.nextPage=1;
                rows.height=this.imgHeight+'px';
                rows.URLdecode=this.URLdecode;
                rows.cid= this.curCid;
                if(!list){
                    num=0;
                }else{
                    num=list.length;
                }
                this.$('.stream1_body,.stream2,.stream3,.stream4').empty();
                if(num==0){
                    return;
                }
                startNum=Math.floor(num/4);
                if(num<4){
                    startNum=Math.ceil(num/4);
                }
                function splitList($el){
                    var stream=[],html;
                    for(var i=startNum*tag;i<startNum*(tag+1);i++){
                        stream.push(list[i]);
                    }
                    tag+=1;
                    rows.list=stream;
                    html=self.template.books_list({data:rows});
                    $el.append(html);
                }
                if(num==3){
                    splitList(this.$('.stream2'));
                    splitList(this.$('.stream3'));
                    splitList(this.$('.stream4'));
                }
                if(num==1){
                    splitList(this.$('.stream1_body'));
                }
                if(num==2){
                    splitList(this.$('.stream2'));
                    splitList(this.$('.stream3'));
                }
                if(num>=4){
                    splitList(this.$('.stream1_body'));
                    splitList(this.$('.stream2'));
                    splitList(this.$('.stream3'));
                    splitList(this.$('.stream4'));
                }
                this.nextPage+=1;
                this.pageTotal=parseInt(data.pages);
                this.$('.home_cate_load_more a').attr({href:'/library-books-cid-'+this.curCid});

            });
        },
        categoryHandler:function(e,init){
            var cid=6;
            if(e){
                var $el=$(e.currentTarget);
                $('.avatars_bg').removeClass('select_state');
                $el.addClass('select_state');
                cid=parseInt($el.attr('cid'));
            }
            var args = {
                size : 12,
                page :1,
                cid:cid
            }
            this.curCid=cid;
            this.nextPage=1;
            this.queryBooksData(args);
        },
        dataRequest:function(args,callback){
           $.ajax('/index-getCategory', {
                dataType: 'json',
                context: this,
                timeout: 5000,
                data:args,
                success:callback,
                error:function(error){

                }
            });
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
    window.etdk.v.libraryBooksView=libraryBooksView;
}());
