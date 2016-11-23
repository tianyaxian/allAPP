// JavaScript Document
var bookstr="";
var flag=1;
var i=1;
for(var book=0; book<books.list.length;book++){
	var swfstr="";
	
	
	if(flag==1&&i==1)
		bookstr+='<div class="swiper-slide"><div class="videoBox"><div class="kong"></div>';
	if(i==1){
		bookstr+='<ul class="ulGuShi clearfix">';
	}

	bookstr+='<li><input type="hidden" value="'+books.list[book].id+'"><a href="javascript:" ><img title="'+books.list[book].title+'" src="'+urlimg+books.list[book].id+imgType+'" /></a><p>'+books.list[book].title+'('+books.list[book].chaodai+'·'+books.list[book].author+')</p></li>'
	
	if(i==3){
		bookstr+='</ul><div class="kong"></div>';	
	}
	
	i++;
	
	if(i>3){
		i=1;
		flag++;		
	}
	
	if(flag>4){
		bookstr+='</div></div>';
		flag=1;
		i=1;
	}	
	
}
bookstr+='</div></div>';
$(".swiper-wrapper").append(bookstr); 



function makehtml(id,title){
var swfstr="";	
	swfstr+='<h2>'+title+'</h2><div class="videoShow2" id="videoShow"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cabversion=6,0,0,0" width="1100" height="800"><param name="movie" value="'+urlswf+id+swfType+'"><param name="bgcolor" value="#3d3d3d"><param name="quality" value="high"><param name="menu" value="false"><param name=wmode value="opaque"><embed src="'+urlswf+id+swfType+'" wmode="opaque" menu="false" bgcolor="#3d3d3d" quality="high" width="1100" height="800"  type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object></div>';
	$("#videoShowWrap").append(swfstr); 
}