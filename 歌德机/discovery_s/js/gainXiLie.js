// JavaScript Document
var chost="http://122.112.16.227:81/rs/resfile";//封面
var xilies = {
			"list":[
					{"id":"D001","name":"人造卫星（16集）","src":"/discovery/D001/7001002.jpg"},
					{"id":"D039","name":"天气的奥秘（8集）","src":"/discovery/D039/7039001.jpg"},
					{"id":"D041","name":"地球（8集）","src":"/discovery/D041/7041001.jpg"},
					{"id":"D043","name":"火山（5集）","src":"/discovery/D043/7043002.jpg"},
					{"id":"D048","name":"宇宙星球（9集）","src":"/discovery/D048/7048002.jpg"},
					{"id":"D054","name":"飞行（12集）","src":"/discovery/D054/7054002.jpg"},
					{"id":"D057","name":"地震海啸（6集）","src":"/discovery/D057/7057002.jpg"},
					{"id":"D002","name":"冰山（12集）","src":"/discovery/D002/7002002.jpg"},

					{"id":"W004","name":"声音的奥秘（8集）","src":"/discovery/W004/8004002.jpg"},
					{"id":"W006","name":"有趣的物质（12集）","src":"/discovery/W006/8006002.jpg"},
					{"id":"W011","name":"超级视觉（10集）","src":"/discovery/W011/8011002.jpg"},
					{"id":"W034","name":"算术（10集）","src":"/discovery/W034/8034002.jpg"},
					{"id":"W039","name":"火（11集）","src":"/discovery/W039/8039002.jpg"},
					{"id":"W040","name":"水（12集）","src":"/discovery/W040/8040002.jpg"},

					{"id":"S041","name":"昆虫世界（14集）","src":"/discovery/S041/9041002.jpg"},
					{"id":"S043","name":"基因（8集）","src":"/discovery/S043/9043002.jpg"},
					{"id":"S048","name":"人类身体（11集）","src":"/discovery/S048/9048002.jpg"},
					{"id":"S060","name":"自然世界（13集）","src":"/discovery/S060/9060002.jpg"},
					{"id":"S061","name":"鲨鱼（9集）","src":"/discovery/S061/9061002.jpg"},
					{"id":"S067","name":"极地（13集）","src":"/discovery/S067/9067002.jpg"}
					]
		   };
var xiliestr="";
for(var xilie in xilies.list){
	
	xiliestr+='<div class="book"><input type="hidden" value="'+xilies.list[xilie].id+'"><div class="imgBg"><img src="'+chost+xilies.list[xilie].src+'?gedecache=1" width="327" height="196" /></div><p>'+xilies.list[xilie].name+'</p></div>';
	
}
xiliestr+='<div class="book"></div><div class="book"></div>';
$("#main").append(xiliestr);    