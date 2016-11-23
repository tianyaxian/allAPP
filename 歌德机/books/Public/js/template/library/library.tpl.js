(function(){

etdk["tpl"] = etdk["tpl"] || {};

etdk["tpl"] ["bookintro"] = _.template("<div class='bookintro_content inline-block'><div class='bookintro_cover_intro'><div class='book_cover inline-block relative'><% if(etdk.g.br.ie678){ %><div class='ie_shadow_bg absolute'></div><div class='corner_leftTop img_corner absolute'></div><div class='corner_rightTop img_corner absolute'></div><div class='corner_bottomLeft img_corner absolute'></div><div class='corner_bottomRight img_corner absolute'></div><%}%><img src='<%=etdk.g._IMG_%>preloader.gif' onload='etdk.g.delayImg(this,\"<%=book.cover%>\")'  class='absolute'></div><div class='book_name_intro inline-block'><div class='book_name_author'><%=book.appName%></div><div class='status_date_loads'><img src='<%=etdk.g._IMG_%>load_nums.png' title='下载次数'/><div class='inline-block'><%=book.units%></div>&nbsp; &nbsp;<img src='<%=etdk.g._IMG_%>publish_date.png' title='发布日期'/><div class='inline-block'><%=book.availabilityDate%></div></div><div class='book_download'><%if(etdk.g.br.windows){%><a href='<%=etdk.g.windows%>'><%}%><%if(etdk.g.br.android){%><a href=''><%}%><%if(etdk.g.br.mac || etdk.g.br.ios){%><a href='<%=etdk.g.appstore%>'><%}%><img src='<%=etdk.g._IMG_%>book_download.png'></a></div></div><div class='book_cover_shows book_cover_shows<%=book.type%>'><% for(var i=0;i < 5;i++){ %><div class='book_imgs_shows book_imgs_shows<%=book.type%> inline-block relative'><img rel='<%=book.Padscreenshot[i]%>' num='<%=i%>' class='pointer' src='<%=etdk.g._IMG_%>preloader.gif' onload='etdk.g.delayImg(this,\"<%=book.Padscreenshot[i]%>\")'></div><%}%></div></div><div class='book_synopsis_content book_synopsis_content<%=book.type%>'><div class='book_synopsis'><img src='<%=etdk.g._IMG_%>plane.png'><img src='<%=etdk.g._IMG_%>intro_img.png'></div><div class='synopsis_content'><%=book.description%></div></div></div><div class='download_recom_list inline-block'><div class='download_ranklist'><div class='ranklist_title'>图书下载排行榜</div><ul><% _.each(rank,function(value,key,rank){%><li class='ranklist_num relative'><label class='center_li'><span class='ranklist_num_img ranklist_num_img<%=key+1%> inline-block'><%=key+1%></span><a href='<%= etdk.g._ROOT_ %>book/<%=value.appId%>'><%= value.appName%></a></label></li><%})%></ul></div><div class='download_recommend'><div class='download_recommend_title'>推荐下载</div><ul><% _.each(reco,function(value,key,rank){%><li class='download_recommend_book relative'><a href='<%= etdk.g._ROOT_ %>book/<%=value.appId%>' target='_blank'><img src='<%=etdk.g._IMG_%>preloader.gif' onload='etdk.g.delayImg(this,\"<%=value.cover%>\")'></a><div class='download_recommend_book_intro'><%=value.appName%></div><div class='new_icon absolute'><img src='<%=etdk.g._IMG_%>new_icon.png'></div></li><%})%></ul></div></div><div class='imgview_mask absolute'></div><div class='coverImgView absolute'><img src='' class='cur_img_view'/><div class='border_bg_imgview absolute'></div><div class='imgview_btn_left absolute pointer'><img src='<%=etdk.g._IMG_%>imgview_btn_left.png'/></div><div class='imgview_btn_right absolute pointer'><img src='<%=etdk.g._IMG_%>imgview_btn_right.png'/></div></div>");

etdk["tpl"] ["books_list"] = _.template("<% _.each(data.list,function(value,key,list){%><div class='inline-block list_img relative'><div class='book_cover'><a href='/book/<%=value.appId%>' target='_blank'><img src='<%=etdk.g._IMG_%>preloader.gif'onload='etdk.g.delayImg(this,\"<%=data.http+value.appId+data.cover%>\")'style='height:<%=data.height%>'/></a></div><% if(value.tag == '新书'){%><div class='new_status absolute'><img src='<%=etdk.g._IMG_%>new.png'/></div><%}else if(value.tag == '推荐'){%><div class='new_status absolute'><img src='<%=etdk.g._IMG_%>recommend.png'/></div><%}%></div><%});%>");

etdk["tpl"] ["cate_list"] = _.template("<% _.each(data.list,function(value,key,list){%><div class='inline-block list_img relative'><div class='book_cover'><a href='/book/<%=value.appId%>' target='_blank'><img src='<%=etdk.g._IMG_%>preloader.gif'onload='etdk.g.delayImg(this,\"<%=data.http+value.appId+data.cover%>\")'/></a></div><h4><%=value.appName%></h4><div style='text-align: center;font-weight: bold'><img src='<%=etdk.g._IMG_%>load_nums.png' title='下载次数'style='vertical-align:middle;height:20px;width:20px;'/>&nbsp;<%=parseInt(value.units)+1000%>&nbsp;<img style='vertical-align:middle;height:20px;width:20px;' src='<%=etdk.g._IMG_%>publish_date.png' title='发布日期'/>&nbsp;<%=value.availabilityDate%></div></div><%});%>");

etdk["tpl"] ["categorynav"] = _.template("<div class='cateImg'><%if(data){%><img src='<%=etdk.g._IMG_+data[0]%>_nav.jpg' alt=''/><%}else{%><div class='search_clear_div'></div><%}%></div><div class='cate_content_none'><img src='/Public/imgs/cate_content_none.png' /></div><div class='search_no_result'><img src='/Public/imgs/search_no_result.png' /></div><div class='book_lists'></div><div class='pages_nav'><button class='upPage' rel='up'>上一页</button><% for(var i=1;i<=pages;i++){ %><button class='only_page <%if(i==1){%>only_page_gray<%}%>' page='<%=i%>'><%=i%></button><%}%><button class='nextPage' rel='down'>下一页</button></div>");

etdk["tpl"] ["crab_child"] = _.template("<div class='footer_children absolute'><img src='<%=etdk.g._IMG_%>/children.png'/></div>");

etdk["tpl"] ["giraff_wave_cloud"] = _.template("<div class='footer_big_cloud absolute'><img src='<%=etdk.g._IMG_%>cloud_big.png'/></div><div class='footer_wave absolute'><img src='<%=etdk.g._IMG_%>ship_wave.png'/></div>");

etdk["tpl"] ["library_books"] = _.template("<div class='r_left_b curtain inline-block'></div><div class='r_b_c inline-block'><div class='avatars relative'><% for(var i=0;i<data.length;i++){%><div cid='<%=data[i][2]%>' class='<%=data[i][0]%>_area avatars_bg inline-block pointer <% if(i==0){%>select_state<%}%>'><img src='<%=etdk.g._IMG_+data[i][0]%>_area.png' title='<%=data[i][1]%>区'/></div><%}%></div><div class='r_books_bg relative'><%if(etdk.g.br.ie678){%><div class='r_booksie_bg_top absolute'></div><%}%><div class='r_books'></div><%if(etdk.g.br.ie678){%><div class='r_booksie_bg_bottom absolute'></div><%}%><div class='load_more'><div class='load_more_dashed pointer'>加载更多</div></div></div></div><div class='r_ringht_b curtain inline-block'></div><div class='giraffe absolute'><img src='<%=etdk.g._IMG_%>giraffe.png'/></div>");

etdk["tpl"] ["librarycatenav"] = _.template("<div class='category'><% for(var i=0;i<data.length;i++){ if(i%2==0){%><div class='cate_nav'><a href='<%=data[i][4]%>'><img src='<%=etdk.g._IMG_+data[i][0]%>.jpg' /></a><div style='margin-left:3%;' class=' avatars_bg inline-block relative'><div class='triangle-left absolute'></div><h3><a href='<%=data[i][4]%>'><%=data[i][1]%></a></h3><div class='cate_intro'><%=data[i][3]%></div></div></div><%}else{%><div class='cate_nav'><div style='margin-right:3%;margin-left:6%;' class=' relative avatars_bg inline-block'><div class='triangle-right absolute'></div><h3><a href='<%=data[i][4]%>'><%=data[i][1]%></a></h3><div class='cate_intro'><%=data[i][3]%></div></div><a href='<%=data[i][4]%>'><img src='<%=etdk.g._IMG_+data[i][0]%>.jpg' /></a></div><%}%><%}%></div>");

etdk["tpl"] ["ship_cloud"] = _.template("<div class='footer_ship absolute'><img src='<%=etdk.g._IMG_%>ship.png'/></div><div class='footer_wave absolute'></div>");

})();