// JavaScript Document
var bookstr="";
bookstr+='<ul class="ulWrap">';
for(var book=0; book<books.list.length;book++){

	bookstr+='<li><input type="hidden" value="'+books.list[book].id+'"><a href="javascript:" ><img title="'+books.list[book].title+'" src="'+urlimg+books.list[book].id+imgType+'" /></a><p>'+books.list[book].title+'<br/>('+books.list[book].chaodai+'·'+books.list[book].author+')</p></li>'
	
}
bookstr+='</ul>';
$("#main").append(bookstr);

function makehtml(id,title){
var swfstr="";	
	swfstr+='<h2>'+title+'</h2><div class="videoShow2" id="videoShow"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cabversion=6,0,0,0" width="1100" height="800"><param name="movie" value="'+urlswf+id+swfType+'"><param name="bgcolor" value="#3d3d3d"><param name="quality" value="high"><param name="menu" value="false"><param name=wmode value="opaque"><embed src="'+urlswf+id+swfType+'" wmode="opaque" menu="false" bgcolor="#3d3d3d" quality="high" width="1100" height="800"  type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object></div>';
	$("#videoShowWrap").append(swfstr); 
}