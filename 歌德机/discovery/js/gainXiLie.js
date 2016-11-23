// JavaScript Document
var xilies = {
			"list":[
					{"id":"D042","name":"name25","src":"images/cov01.jpg"},
					{"id":"D043","name":"name26","src":"images/cov01.jpg"},
					{"id":"D048","name":"name27","src":"images/cov01.jpg"},
					{"id":"D054","name":"name28","src":"images/cov01.jpg"},
					{"id":"D0421","name":"name25","src":"images/cov01.jpg"},
					{"id":"D0431","name":"name26","src":"images/cov01.jpg"},
					{"id":"D0481","name":"name27","src":"images/cov01.jpg"},
					{"id":"D0541","name":"name28","src":"images/cov01.jpg"},
					{"id":"D0422","name":"name25","src":"images/cov01.jpg"},
					{"id":"D0432","name":"name26","src":"images/cov01.jpg"},
					{"id":"D0482","name":"name27","src":"images/cov01.jpg"},
					{"id":"D0542","name":"name28","src":"images/cov01.jpg"},
					{"id":"D0423","name":"name25","src":"images/cov01.jpg"},
					{"id":"D0433","name":"name26","src":"images/cov01.jpg"},
					{"id":"D0483","name":"name27","src":"images/cov01.jpg"},
					{"id":"D0543","name":"name28","src":"images/cov01.jpg"}
					]
		   };
var xiliestr="";
for(var xilie in xilies.list){
	
	xiliestr+='<div class="book"><input type="hidden" value="'+xilies.list[xilie].id+'"><div class="imgBg"><img src="'+xilies.list[xilie].src+'" width="327" height="196" /></div><p>'+xilies.list[xilie].name+'</p></div>';
	
}
xiliestr+='<div class="book"></div><div class="book"></div>';
$("#main").append(xiliestr);    