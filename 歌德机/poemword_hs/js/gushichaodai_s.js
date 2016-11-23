// JavaScript Document
var bookstr="";
bookstr+='<div class="title" id="title1">'+books.list[0].chaodai+'</div><ul class="ulWrap">';
for(var book=0; book<books.list.length;book++){
	bookstr+='<li><input type="hidden" value="'+books.list[book].id+'"><div class="imgWrap"><img title="'+books.list[book].title+'" src="'+urlimg+books.list[book].id+imgType+'" width="309" height="188" /></div><p>'+books.list[book].title+'<br/>('+books.list[book].chaodai+'·'+books.list[book].author+')</p></li>';
	
	if(book>0){
		var chaoDaiType0=books.list[book].chaodai;
		var chaoDaiType1=books.list[book-1].chaodai;
	}
	
	if(chaoDaiType0!=chaoDaiType1){
		bookstr+='</ul><div class="title">'+books.list[book].chaodai+'</div><ul class="ulWrap">';		
	}				
}
bookstr+='</ul>';
$("#main").append(bookstr);


function makehtml(id,title){
var swfstr="";	
var swfstr2="";
	swfstr+='<h2>'+title+'</h2><div class="videoShow2" id="videoShow"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cabversion=6,0,0,0" width="51100" height="800"><param name="movie" value="'+urlswf+id+swfType+'"><param name="bgcolor" value="#3d3d3d"><param name="quality" value="high"><param name="menu" value="false"><param name=wmode value="opaque"><embed src="'+urlswf+id+swfType+'" wmode="opaque" menu="false" bgcolor="#3d3d3d" quality="high" width="1100" height="800"  type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object></div>';
	$("#videoShowWrap").append(swfstr); 
}