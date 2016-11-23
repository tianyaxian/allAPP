// JavaScript Document
willSort = sortByKey(books.list, 'fanweiNum');

var bookstr="";
var flag=1;
var i=1;

bookstr+='<div class="title" id="title1">'+willSort[0].fanweiNum+'</div><ul class="ulWrap">';
for(var book=0; book<books.list.length;book++){
	bookstr+='<li><input type="hidden" value="'+willSort[book].id+swfType+'">'+willSort[book].hanzi+'</li>';
	
	if(book>0){
		var chaoDaiType0=willSort[book].fanweiNum;
		var chaoDaiType1=willSort[book-1].fanweiNum;
	}
	
	if(chaoDaiType0!=chaoDaiType1){
		bookstr+='</ul><div class="title">'+willSort[book].fanweiNum+'</div><ul class="ulWrap">';		
	}				
}

$("#main").append(bookstr);