// JavaScript Document
	   
willSort = sortByKey(books.list, 'gradeNum');
		   
var bookstr="";
var flag=1;
var i=1;
for(var book=0; book<books.list.length;book++){
	if(flag==1&&i==1){
		if(book==0){
			bookstr+='<div class="swiper-slide"><div class="videoBox"><ul><div class="leftIcon1"><p>'+willSort[0].grade+'</p></div></ul>';	 
			flag++;
		}
		else{
			bookstr+='<div class="swiper-slide"><div class="videoBox">';
		}
	}
	if(i==1){
		if(book>0){
			var chaoDaiType0=willSort[book].grade;
			var chaoDaiType1=willSort[book-1].grade;
			
			if(chaoDaiType0!=chaoDaiType1){
				
			}else{
				bookstr+='<ul class="ulHanZi clearfix">';
			}
		}else{
			bookstr+='<ul class="ulHanZi clearfix">';
		}
	}
		
	if(book>0){
		var chaoDaiType0=willSort[book].grade;
		var chaoDaiType1=willSort[book-1].grade;
		if(flag==1&&i==1){
			if(chaoDaiType0!=chaoDaiType1){
				bookstr+='<ul><div class="leftIcon1"><p>'+willSort[book].grade+'</p></div></ul><ul class="ulHanZi clearfix">';
				flag++;//alert(flag+"flag满12");
			}			
		}
		else{
			if(chaoDaiType0!=chaoDaiType1){
				bookstr+='</ul>';
				i=1;
				flag++;//alert(flag+"nini");
				if(flag>12){
					bookstr+='</div></div><div class="swiper-slide"><div class="videoBox"><ul><div class="leftIcon1"><p>'+willSort[book].grade+'</p></div></ul><ul class="ulHanZi clearfix">';	
					flag=2;
					i=1;
				}else{	
					bookstr+='<ul><div class="leftIcon1"><p>'+willSort[book].grade+'</p></div></ul>'
					flag++;//alert(flag+"haha");
					if(flag>12){
						bookstr+='</div></div><div class="swiper-slide"><div class="videoBox"><ul class="ulHanZi clearfix">';	
						flag=1;
						i=1;		
					}else{
					bookstr+='<ul class="ulHanZi clearfix">';	
					}
				}
			}
		}
	}
	
	bookstr+='<li><input type="hidden" value="'+willSort[book].id+swfType+'">'+willSort[book].hanzi+'</li>'
	
	if(i==5){
		var chaoDaiType0=willSort[book].grade;
		if(book!=willSort.length-1){
			var chaoDaiType1=willSort[book+1].grade;
			if(chaoDaiType0!=chaoDaiType1){
				i=1;
		}
		}
		bookstr+='</ul>';	
		
	}
	
	i++;
	
	if(i>5){
		i=1;
		flag++;		//alert(flag+"正常");
	}
	
	
	if(flag>12){
	bookstr+='</div></div>';
		flag=1;
		i=1;
	}	
}
bookstr+='</div></div>';
$(".swiper-wrapper").append(bookstr);    


function makehtml(id,title){
var swfstr="";
		swfstr+='<h2 class="hztitle">'+title+'</h2><div class="videoShow2" id="videoShow"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cabversion=6,0,0,0" width="1100" height="800"><param name="movie" value='+urlswf+id+'><param name="bgcolor" value="#3d3d3d"><param name="quality" value="high"><param name="menu" value="false"><param name=wmode value="opaque"><embed src="'+urlswf+id+'" wmode="opaque" menu="false" bgcolor="#3d3d3d" quality="high" width="1100" height="800"  type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object></div>';
		$("#videoShowWrap").append(swfstr); 	
}