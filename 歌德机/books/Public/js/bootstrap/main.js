$(function(){
        var br=etdk.g.br;
        var main={
           //文档加载完成后10秒删除所有Js脚本引用保持页面干净
          //百度以及其他一些自动嵌入的脚本非常可恶
         claerScript:function(){
              setTimeout(function(){
                       var scripts=document.scripts;
                       var count=scripts.length;
                           while(count>0){
                               count--;
                               $(scripts[count]).remove();
                           }
              },10000);
         },
        //检查是否曾经登录过
         checkLogin:function(){
              var ie67=br.ie67 && !!cookie.get('cdk-account'),
                  noie67=!br.ie67 && localStorage.getItem("cdk-account"),
                  signed=ie67 || noie67,
                  $login=$('.login_sign_btn');
                if(signed){
                    $login.html('我的账号').addClass('login_signed_btn');
                    etdk.g.userInfo=etdk.g.getStore(true);
                }
                //加载登录页面
                 $login.on('click',function(e){
                    etdk.g.userInfo ? file('userInfo') : file('login');              
                  });
                 function file(name){
                      br.fileLoad(etdk.g._CSS_+name+'.css','link');
                      br.fileLoad(etdk.g._JS_+'template/common/common.tpl.js','script',function(){
                          br.fileLoad(etdk.g._JS_+'view/'+name+'View.js','script');
                      });
                 }
         },
         //监听尺寸大小改变
         monitorScreen:function(){
            var self=this,$bg=$(".advertise");
             $(window).resize(function(){
                         self.getScreenSize();
              });
             $(window).scroll(function(e){
                 self.goToTop(e,$bg);
                 Backbone.Events.trigger('wordBlink');
             });
             $(".gototop").click(function(e) {
                 $('body,html').animate({scrollTop:0},300);
             });
              //初始化屏幕
              this.getScreenSize();
         },
         //启动网站         
         loadWebApp:function(){
            var views=['home','bookIntroPage',
                'libraryBooks','whatDuku','libBooks','websitemap',
                'advertisePage','librarycatenav','readplan','newtabloid',
                'categorynav'];
            _.find(views,function(name){
                if($('.'+name).attr('class') == name){
                            new etdk.v[name+'View']();
                }
            });

             $('.advertise_close').click(function(e){
                 $(e.currentTarget).parent().remove();
             });
         },
         goToTop:function(e,$bg){
             //若滚动条离顶部大于100元素
             if($(window).scrollTop()>=300){
                 $(".gototop").fadeIn(1000);
                // $bg.stop();
                // $bg.animate({opacity:0.5},1000,'linear').css({flter:'Alpha(opacity=50)'});
                 //$(".advertise_close").stop().animate({opacity:0.5},1000,'linear').css({flter:'Alpha(opacity=50)'});
             }
             else{
                // $bg.stop();
                // $bg.animate({opacity:1},200,'linear').css({flter:'Alpha(opacity=100)'});
                 //$(".advertise_close").stop().removeAttr('style');
                 $(".gototop").fadeOut(1000);
             }


         },
         //监听尺寸处理
         getScreenSize:function (){
             var $f=$("#footer"),$html=$("html");
             if(etdk.g.br.windows && etdk.g.br.safari){
                 setTimeout(function(){
                     //同步每个独立页面的自适应布局
                     Backbone.Events.trigger('resizeScreen');
                 },100);
             }else{
                 //同步每个独立页面的自适应布局
                 Backbone.Events.trigger('resizeScreen');
   }
               var RatioWidth=860,
                   realWidth,
                   $width=$("body").width();
             if($width<1200 && $width>860){
                 $html.addClass('medium');
             }
              else{
                 $html.removeClass('medium');
             }
             //大于1200全部按1200来显示
             if($width>=1200){
                 $width=1200;
             }
               if($width<=RatioWidth){
                    $width=RatioWidth;
                   $html.addClass('low');
                   $f.css({width:$width+'px'});
               }
                else{
                   $html.removeClass('low');
                   $f.removeAttr('style');
                }
                realWidth=$width*0.999;
                if(br.ie7){
                  //解决ie7在resize事件触发后inline-block布局错乱,先删除类,然后重新加载触发layout
                  $(".home_btn").removeClass('pointer');
                    $("#container").css({
                        width:realWidth+'px'
                    });
                    $("#header").css({
                        width:realWidth+'px'
                    });
                    //重新触发layout
                    $(".home_btn").addClass('pointer');
                }

         },
         //检查头尾的图片是否缓存
         checkHeadEndImgCache:function(){

         },
            //广告自动化处理
         advertiseChange:function(){
             setInterval(function(){
                 $('.pickholein,.childrensDay,.a_r_s2,.a_r_s1').toggle();
             },5000);

         },
         //头部搜索事件绑定
         searchBooksEvent:function(){
             var chars="[`%~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）" +
                 "—|{}【】‘；：”“'。，、？]";
             function stripscript(s) {
                 var pattern = new RegExp(chars);
                 var rs = "";
                 for (var i = 0; i < s.length; i++) {
                     rs = rs + s.substr(i, 1).replace(pattern, '');
                 }
                 return rs;
             }
             var $input=$('.books_search input');
             function eventHandler(){
                 $input.css({visibility:'visible'});
                 $('.input_close').show();
                 var value=$input.val();
                 var key=stripscript($.trim(value));
                 if(!key){
                     return;
                 }
                 location.href='/search/'+stripscript(value);

             }

             $('.books_search_btn').on('click',function(e){
                 eventHandler();
             });
             $('.books_search .input_close').on('click',function(e){

                 $input.css({visibility:'hidden'});
                 $('.books_search .input_close').hide();


             });
             $('.books_search input').on('keydown',function(e){
                 if (e.keyCode == 13) {
                     eventHandler();
                 }
             });

         },
         start:function(){
          var self=this;
          this.claerScript();
         // this.checkLogin();
          this.monitorScreen();
          this.searchBooksEvent();
          this.loadWebApp();
          this.checkHeadEndImgCache();
            // setTimeout(function(){
                 self.getScreenSize();
                 //$('#container').css({height:'auto'});
            // },200);
          this.advertiseChange();

         }
        }
  //开始启动
  main.start();
});