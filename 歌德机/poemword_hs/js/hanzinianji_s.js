// JavaScript Document
willSort = sortByKey(books.list, 'gradeNum');
var bookstr="";

bookstr+='<div class="title" id="title1">'+willSort[0].grade+'</div><ul class="ulWrap">';
for(var book=0; book<books.list.length;book++){
	bookstr+='<li><input type="hidden" value="'+willSort[book].id+swfType+'">'+willSort[book].hanzi+'</li>';
	
	if(book>0){
		var chaoDaiType0=willSort[book].grade;
		var chaoDaiType1=willSort[book-1].grade;
	}
	
	if(chaoDaiType0!=chaoDaiType1){
		bookstr+='</ul><div class="title">'+willSort[book].grade+'</div><ul class="ulWrap">';		
	}				
}
bookstr+='</ul>';
$("#main").append(bookstr);

