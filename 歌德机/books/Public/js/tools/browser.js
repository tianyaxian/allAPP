(function(){
    var n_u=navigator.userAgent,
        $html=$('html'),
        c=conditionizr;
        etdk.g.br=c;//写入全局浏览器检测对象

    var browser={
      //检测ie6-10
          ie:function(ver){
              if(ver == 10){
                  //解决10以下浏览器的模拟切换导致非ie10探测为真
                  if(!isie(6) && !isie(7) && !isie(8) && !isie(9)){
                      return /*@cc_on!@*/false;
                  }
                  else{
                     return false;
                  }
              }
              function isie(ver){
                  var b = document.createElement('b');
                      b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
                      return b.getElementsByTagName('i').length === 1;
              }
              return isie(ver);
          },
          browserCheck:function(){
              //浏览器名称数组
              var browserArray=['chrome','chromium', 'firefox', 'ie6', 'ie7', 'ie8', 'ie9', 'ie10',
                  'ie10touch', 'ie11', 'ios', 'linux','localhost', 'mac', 'opera', 'phantomjs', 'retina', 'safari', 'touch',
                  'windows', 'winPhone7', 'winPhone8', 'winPhone75','iPad','iphone','android'];
             //对应名称对应的检测结果
              var whichBrowserIs=[
                  !!window.chrome && /google/i.test(navigator.vendor),
                  /cros i686/i.test(navigator.platform),
                  'InstallTrigger' in window,
                  this.ie(6),
                  this.ie(7),
                  this.ie(8),
                  this.ie(9),
                  this.ie(10),
                  /MSIE 10\.0.*Touch(?!.*IEMobile)/i.test(n_u),
                  /(?:\sTrident\/7\.0;.*\srv:11\.0)/i.test(n_u),
                  /iP(ad|hone|od)/i.test(n_u),
                  /linux/i.test(navigator.platform) && !/android|cros/i.test(n_u),
                  /(?:127\.0\.0\.1|localhost)/.test(location.host),
                  /mac/i.test(navigator.platform),
                  !!window.opera || /opera/i.test(navigator.vendor),
                  /\sPhantomJS\/[[0-9]+\]/.test(n_u),
                  window.devicePixelRatio >= 1.5,
                  /Constructor/.test(window.HTMLElement),
                  'ontouchstart' in window || !!navigator.msMaxTouchPoints,
                  /win/i.test(navigator.platform),
                  /Windows Phone 7.0/i.test(n_u),
                  /Windows Phone 8.0/i.test(n_u),
                  /Windows Phone 7.5/i.test(n_u),
                  /iPad/i.test(n_u),
                  /iphone os/i.test(n_u),
                  /android/i.test(n_u)
              ];
            //检测浏览器
            var num=browserArray.length,testsObj={};
              for(var i=0;i<num;i++){
                  testsObj[browserArray[i]]=['style', 'script', 'class'];
                  c.add(browserArray[i], function () {
                      return whichBrowserIs[i];
                  });
                  if(c[browserArray[i]]){
                      $html.addClass(browserArray[i]);
                  }
              }
             //添加ie联合判断
             c.ie67=this.ie(6) || this.ie(7);
             c.ie678=this.ie(6) || this.ie(7) || this.ie(8);
             c.ie78=this.ie(7) || this.ie(8);
             c.ie789=this.ie(7) || this.ie(8) || this.ie(9);
             c.ie89=this.ie(8) || this.ie(9);
             
          },
          compatible:function(){
                c.fileLoad=this.fileLoad;
                //获取分辨率    
                var SR="SR"+screen.width+"-"+screen.height;
                $html.addClass(SR);
                !c.ie67 ? this.fileLoad(etdk.g._JS_+'lib/jquery.base64.js','script') : null;             
                 c.ie78 ? $html.addClass("ie78") : $html.addClass("noie78");
          },
          //动态加载脚本
          fileLoad:function(path,script,callback){
                var file=document.createElement(script);
                if(script == 'link'){
                    file.href = path;
                    file.rel = 'stylesheet';
                }
                else{
                     file.src=path;
                }
               if(c.ie678){
                   file.onreadystatechange = function() {
                       if (this.readyState == 'loaded' || this.readyState == 'complete'){
                           if(typeof callback == 'function'){
                               callback();
                           }
                       }
                   }
               }else{
                   file.onload=function(){
                       if(typeof callback == 'function'){
                           callback();
                       }
                   }
               }
               document.getElementsByTagName('head')[0].appendChild(file);
          },
          startInit:function(){
                this.browserCheck();
                this.compatible();

          }
    }
    //初始化浏览器
     browser.startInit();
    //插入存储
    etdk.g.insertStore=function(value,key){
          value=JSON.stringify(value);
          var KEY;
          if(key){
            KEY='cdk-account';
          }else{
            KEY='cacheImgs';
          }
          c.ie67 ? cookie.set(KEY,value) : localStorage.setItem(KEY,value);      
    }
    //获取存储
    etdk.g.getStore=function(key){
          var KEY,value;
           if(key){
                KEY='cdk-account';
            }
            else{
                KEY='cacheImgs';
            }
           if(c.ie67){
               value=cookie.get(KEY);
           }
           else{
               value=localStorage.getItem(KEY);
           }
           if(value){
            return JSON.parse(value);
           }else{
            return {};
           }
    }  
    //图片编码base64
    etdk.g.imgTobase64=function(img){
        var canvas=document.createElement("canvas");
            canvas.width=img.width;
            canvas.height=img.height;
        var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
                    var DataURL= canvas.toDataURL("image/png");                                         
                        $(canvas).remove();
                        return DataURL;
   }
   //图片第一次加载编码base64然后写入存储
    etdk.g.imgBase64ToStore=function(img,cacheName,objName){
            img.onload=function(){
                 var base64=etdk.g.imgTobase64(img);              
                 etdk.g.cacheImgs=etdk.g.getStore();
                 if(!etdk.g.cacheImgs[objName]){
                        etdk.g.cacheImgs[objName]={}
                  }
                 etdk.g.cacheImgs[objName][cacheName]=base64;
                 etdk.g.insertStore(etdk.g.cacheImgs); 
            }
            img.src=etdk.g._IMG_+cacheName+".png";
        }
   //加载图片如果没有缓存就处理缓存
    etdk.g.imgLoad=function(img,name,cache,callback){
        if(cache[name]){
                  img.src=cache[name];
        }
        else{
           callback();
        }
     }
    etdk.g.delayImg=function(obj,path,callback){
            obj.onload=null;
            var img=new Image();
            img.onload=function(){
                obj.src=path;
                if(typeof callback == 'function'){
                    callback();
                }
            }
            img.src=path;

    }

   
   
})();










