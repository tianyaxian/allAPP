// JavaScript Document
willSort = sortByKey(books.list, 'shouzimuFW');

var bookstr="";
var flag=1;
var i=1;

bookstr+='<div class="title" id="title1">'+willSort[0].shouzimuFW+'</div><ul class="ulWrap">';
for(var book=0; book<books.list.length;book++){
	bookstr+='<li><input type="hidden" value="'+willSort[book].id+swfType+'">'+willSort[book].hanzi+'</li>';
	
	if(book>0){
		var chaoDaiType0=willSort[book].shouzimuFW;
		var chaoDaiType1=willSort[book-1].shouzimuFW;
	}
	
	if(chaoDaiType0!=chaoDaiType1){
		bookstr+='</ul><div class="title">'+willSort[book].shouzimuFW+'</div><ul class="ulWrap">';		
	}				
}

$("#main").append(bookstr);