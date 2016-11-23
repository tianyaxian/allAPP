// JavaScript Document
var urlswf = "../resfile/poem/";
//var urlswf = "http://middle.superlib.com/swf/";
var urlimg = "images/cover/";
var swfType=".swf?gedecache=2";
var imgType=".jpg?gedecache=1";
var books = {"list":[
		{"chaodai":"汉","id":"201401","author":"汉乐府","title":"江南"},
		{"chaodai":"南北朝","id":"201402","author":"北朝民歌","title":"敕勒歌"},
		{"chaodai":"唐","id":"201403","author":"骆宾王","title":"咏鹅"},
		{"chaodai":"唐","id":"201404","author":"李峤","title":"风"},
		{"chaodai":"唐","id":"201405","author":"贺知章","title":"咏柳"},
		{"chaodai":"唐","id":"201406","author":"王之涣","title":"凉州词"},
		{"chaodai":"唐","id":"201407","author":"王之涣","title":"登鹳雀楼"},
		{"chaodai":"唐","id":"201408","author":"孟浩然","title":"春晓"},
		{"chaodai":"唐","id":"201409","author":"王翰","title":"凉州词"},
		{"chaodai":"唐","id":"201410","author":"王昌龄","title":"出塞"},
		{"chaodai":"唐","id":"201411","author":"王昌龄","title":"芙蓉楼送辛渐"},
		{"chaodai":"唐","id":"201412","author":"王维","title":"鹿柴"},
		{"chaodai":"唐","id":"201413","author":"王维","title":"送元二使安西"},
		{"chaodai":"唐","id":"201414","author":"王维","title":"九月九日忆山东兄弟"},
		{"chaodai":"唐","id":"201415","author":"李白","title":"静夜思"},
		{"chaodai":"唐","id":"201416","author":"李白","title":"古朗月行"},
		{"chaodai":"唐","id":"201417","author":"李白","title":"望庐山瀑布"},
		{"chaodai":"唐","id":"201418","author":"李白","title":"赠汪伦"},
		{"chaodai":"唐","id":"201419","author":"李白","title":"黄鹤楼送孟浩然之广陵"},
		{"chaodai":"唐","id":"201420","author":"李白","title":"早发白帝城"},
		{"chaodai":"唐","id":"201421","author":"李白","title":"望天门山"},
		{"chaodai":"唐","id":"201422","author":"高适","title":"别董大"},
		{"chaodai":"唐","id":"201423","author":"杜甫","title":"绝句"},
		{"chaodai":"唐","id":"201424","author":"杜甫","title":"春夜喜雨"},
		{"chaodai":"唐","id":"201425","author":"杜甫","title":"绝句"},
		{"chaodai":"唐","id":"201426","author":"杜甫","title":"江畔独步寻花"},
		{"chaodai":"唐","id":"201427","author":"孟郊","title":"游子吟"},
		{"chaodai":"唐","id":"201428","author":"柳宗元","title":"江雪"},
		{"chaodai":"唐","id":"201429","author":"贾岛","title":"寻隐者不遇"},
		{"chaodai":"唐","id":"201430","author":"张继","title":"枫桥夜泊"},
		{"chaodai":"唐","id":"201431","author":"张志和","title":"渔歌子"},
		{"chaodai":"唐","id":"201432","author":"卢纶","title":"塞下曲"},
		{"chaodai":"唐","id":"201433","author":"刘禹锡","title":"望洞庭"},
		{"chaodai":"唐","id":"201434","author":"刘禹锡","title":"浪淘沙"},
		{"chaodai":"唐","id":"201435","author":"白居易","title":"赋得古原草送别"},
		{"chaodai":"唐","id":"201436","author":"白居易","title":"池上"},
		{"chaodai":"唐","id":"201437","author":"白居易","title":"忆江南"},
		{"chaodai":"唐","id":"201438","author":"李绅","title":"悯农"},
		{"chaodai":"唐","id":"201439","author":"李绅","title":"悯农"},
		{"chaodai":"唐","id":"201440","author":"杜牧","title":"山行"},
		{"chaodai":"唐","id":"201441","author":"杜牧","title":"清明"},
		{"chaodai":"唐","id":"201442","author":"杜牧","title":"江南春"},
		{"chaodai":"唐","id":"201443","author":"李商隐","title":"乐游原"},
		{"chaodai":"唐","id":"201444","author":"罗隐","title":"蜂"},
		{"chaodai":"唐","id":"201445","author":"胡令能","title":"小儿垂钓"},
		{"chaodai":"北宋","id":"201446","author":"范仲淹","title":"江上渔者（江上往来人）"},
		{"chaodai":"北宋","id":"201447","author":"王安石","title":"元日"},
		{"chaodai":"北宋","id":"201448","author":"王安石","title":"泊船瓜洲"},
		{"chaodai":"北宋","id":"201449","author":"王安石","title":"书湖阴先生壁"},
		{"chaodai":"北宋","id":"201450","author":"苏轼","title":"六月二十七日望湖楼醉书"},
		{"chaodai":"北宋","id":"201451","author":"苏轼","title":"饮湖上初晴后雨"},
		{"chaodai":"北宋","id":"201452","author":"苏轼","title":"惠崇《春江晚景》"},
		{"chaodai":"北宋","id":"201453","author":"苏轼","title":"题西林壁"},
		{"chaodai":"北宋","id":"201464","author":"翁卷","title":"乡村四月"},
		{"chaodai":"南宋","id":"201454","author":"李清照","title":"夏日绝句"},
		{"chaodai":"南宋","id":"201455","author":"陆游","title":"示儿"},
		{"chaodai":"南宋","id":"201456","author":"陆游","title":"秋夜将晓出篱门迎凉有感"},
		{"chaodai":"南宋","id":"201457","author":"范成大","title":"四时田园杂兴"},
		{"chaodai":"南宋","id":"201458","author":"范成大","title":"四时田园杂兴"},
		{"chaodai":"南宋","id":"201459","author":"杨万里","title":"小池"},
		{"chaodai":"南宋","id":"201460","author":"杨万里","title":"晓出净慈寺送林子方"},
		{"chaodai":"南宋","id":"201461","author":"朱熹","title":"春日"},
		{"chaodai":"南宋","id":"201462","author":"林升","title":"题临安邸"},
		{"chaodai":"南宋","id":"201463","author":"叶绍翁","title":"游园不值"},
		{"chaodai":"元","id":"201466","author":"王冕","title":"墨梅"},
		{"chaodai":"明","id":"201467","author":"于谦","title":"石灰吟"},
		{"chaodai":"清","id":"201468","author":"郑燮","title":"竹石"},
		{"chaodai":"清","id":"201469","author":"袁枚","title":"所见"},
		{"chaodai":"清","id":"201470","author":"龚自珍","title":"己亥杂诗"},
		{"chaodai":"清","id":"201465","author":"高鼎","title":"村居"}
]};