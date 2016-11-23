(function(){
    //首页视图生成页
    var categorynavView=Backbone.View.extend({
        el:"#categorynav",//首页容器ID
        events:{
            "click .pages_nav .only_page":'changePageNum',
            "click .upPage,.nextPage":'upOrNextPageNum'
        },
        curPage:1,
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
            var data=[
                    ['education','儿童教育',1],
                    ['sleep_story','睡前故事',2],
                    ['classics_of_sinology', '国学经典',3],
                    ['science_nature','科普百科',4],
                    ['masterwork','外国名著',5],
                    ['cartoon','益智启蒙',6]
                ],
                cid=parseInt(this.$el.attr('cid')),
                pages= 1,
                rows={},
                booklist=etdk.g.cate_page,
                curCid=cid ? data[cid-1] : null,//当前cid搜索进来就没有固定cid了
                search=this.$el.attr('search') == 'yes';
            if(booklist && booklist.list){
                rows.list=booklist.list;
                pages=booklist.pages;
                rows.pages=pages;
                rows.cid=cid;
            }else if(search && booklist){
                var list=booklist.slice(0,16);
                pages=Math.ceil(booklist.length/16);
                rows.list=list;
                rows.pages=pages;
            }
            rows.http='http://kids.appcarrier.com/stores/';
            rows.cover='/cover/cover_low.jpg';
            this.rows=rows;
            this.$el.html(this.template.categorynav({data:curCid,pages:pages}));
            if(!booklist){
                if(search){
                    this.$el.find('.search_no_result').show();
                }else{
                    this.$el.find('.cate_content_none').show();
                }
                this.$el.find('.pages_nav').hide();
                return;
            }
            this.cateBooks(rows);
            if(pages>1){
                this.$el.find('.nextPage').show();
            }

            this.resizeScreen();

        },
        searchViewRender:function(num){
            var booklist=etdk.g.cate_page,
                list=booklist.slice((num-1)*16,num*16);
                this.rows.list=list;
                this.cateBooks(this.rows);

        },
        cateBooks:function(rows){
            this.$el.find('.book_lists').html(this.template.cate_list({data:rows}));
        },
        changePageNum:function(e){
            var $el=$(e.target),
                search=this.$el.attr('search') == 'yes';
            var num=parseInt($el.attr('page'));
            //点击的是当前页就不做处理
            if(num==this.curPage){
                return;
            }
            this.curPage=num;
            if(search){
                this.searchViewRender(num);

            }else{
                this.categoryHandler(num);
            }
            this.checkPointerButton(this.curPage,$el);
        },
        upOrNextPageNum:function(e){
            var rel=$(e.target).attr('rel');
            var search=this.$el.attr('search') == 'yes';
            var num=this.curPage;
            if(rel=='up'){
                this.curPage-=1;
            }else{
                this.curPage+=1;
            }
            if(search){
                this.searchViewRender(this.curPage);

            }else{
                this.categoryHandler(this.curPage);
            }
            var $el=$('.only_page[page='+this.curPage+']');
            this.checkPointerButton(this.curPage,$el);
        },
        checkPointerButton:function(num,$el){
            $('.only_page').removeClass('only_page_gray');
            $el.addClass('only_page_gray');
            if(num>1 && num<this.rows.pages){
                $('.upPage,.nextPage').show();
            }
            if(num==1){
                $('.upPage').hide();
                if(num<this.rows.pages){
                    $('.nextPage').show();
                }
            }
            if(num==this.rows.pages){
                $('.nextPage').hide();
                if(num>1){
                    $('.upPage').show();
                }
            }
        },
        categoryHandler:function(num){
            var arg={};
            arg.cid=this.rows.cid;
            arg.page=num;
            $.ajax('/app_page', {
                dataType: 'json',
                context: this,
                timeout: 3000,
                data:arg,
                success:function(data){
                    this.rows.list=data.list;
                    this.cateBooks(this.rows);
                },
                error:function(error){

                }
            });
        },


        destroy:function(){
            this.remove();
        }
    });
    window.etdk.v.categorynavView=categorynavView;
}());
