// JavaScript Document
willSort = sortByKey(books.list, 'fanweiNum');
var bookstr="";
var flag=1;
var i=1;

bookstr+='<div class="title" id="title1">'+willSort[0].fanweiNum+'</div><ul class="ulWrap">';
bookstr+='<li><input type="hidden" value="'+willSort[0].id+swfType+'">'+willSort[0].hanzi+'</li>';
for(var book=0; book<willSort.length;book++){
	if(book>0){
		var chaoDaiType0=willSort[book].fanweiNum;
		var chaoDaiType1=willSort[book-1].fanweiNum;
		if(chaoDaiType0!=chaoDaiType1){
			console.log("aa");
			bookstr+='</ul><div class="title">'+willSort[book].fanweiNum+'</div><ul class="ulWrap">';
		}
		bookstr+='<li><input type="hidden" value="'+willSort[book].id+swfType+'">'+willSort[book].hanzi+'</li>';
	}
}
$("#main").append(bookstr);