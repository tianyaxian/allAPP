// JavaScript Document
var vhost="http://s1.ananas.chaoxing.com/";//视频 http://s1.ananas.chaoxing.com/video/2d/56a816a6e4b0e85354bd0ed2/sd.mp4
var phost="http://122.112.16.227:81/rs/";//播放器地址 http://s1.ananas.chaoxing.com/video/2d/56a816a6e4b0e85354bd0ed2/sd.mp4
var books = {
			"D001":[{"id":"7001001","name":"GPS也能用于海上导航吗","src":"","videoUrl1":"video/2d/56a816a6e4b0e85354bd0ed2/sd.mp4","videoUrl2":"/discovery/D001/7001001.flv"},
					{"id":"7001002","name":"GPS是怎样在现代城市中为司机导航的","src":"","videoUrl1":"/discovery/D001/7001002.MP4","videoUrl2":"/discovery/D001/7001002.flv"},
					{"id":"7001003","name":"为什么说卫星对于保护地球具有重要的价值","src":"","videoUrl1":"/discovery/D001/7001003.MP4","videoUrl2":"/discovery/D001/7001003.flv"},
					{"id":"7001004","name":"为什么说卫星让全世界动了起来","src":"","videoUrl1":"/discovery/D001/7001004.MP4","videoUrl2":"/discovery/D001/7001004.flv"},
					{"id":"7001005","name":"人造卫星是怎样帮助考古学家的","src":"","videoUrl1":"/discovery/D001/7001005.MP4","videoUrl2":"/discovery/D001/7001005.flv"},
					{"id":"7001006","name":"什么是卫星遥控感测，它又能做什么呢","src":"","videoUrl1":"/discovery/D001/7001006.MP4","videoUrl2":"/discovery/D001/7001006.flv"},
					{"id":"7001007","name":"全球定位系统（GPS）是怎样工作的","src":"","videoUrl1":"/discovery/D001/7001007.MP4","videoUrl2":"/discovery/D001/7001007.flv"},
					{"id":"7001008","name":"制造一颗人造卫星大约需要多少钱","src":"","videoUrl1":"/discovery/D001/7001008.MP4","videoUrl2":"/discovery/D001/7001008.flv"},
					{"id":"7001009","name":"卫星为气象学的发展提供了哪些帮助","src":"","videoUrl1":"/discovery/D001/7001009.MP4","videoUrl2":"/discovery/D001/7001009.flv"},
					{"id":"7001010","name":"卫星是怎样“看到”地球上的景象的","src":"","videoUrl1":"/discovery/D001/7001010.MP4","videoUrl2":"/discovery/D001/7001010.flv"},
					{"id":"7001011","name":"在地球上空有多少人造卫星","src":"","videoUrl1":"/discovery/D001/7001011.MP4","videoUrl2":"/discovery/D001/7001011.flv"},
					{"id":"7001012","name":"在拯救大象方面，卫星可以提供哪些帮助","src":"","videoUrl1":"/discovery/D001/7001012.MP4","videoUrl2":"/discovery/D001/7001012.flv"},
					{"id":"7001013","name":"如何看待卫星的功与过","src":"","videoUrl1":"/discovery/D001/7001013.MP4","videoUrl2":"/discovery/D001/7001013.flv"},
					{"id":"7001014","name":"怎样使用卫星监控森林受到破坏的情况","src":"","videoUrl1":"/discovery/D001/7001014.MP4","videoUrl2":"/discovery/D001/7001014.flv"},
					{"id":"7001015","name":"科学家怎样利用卫星获得地球的三维地图","src":"","videoUrl1":"/discovery/D001/7001015.MP4","videoUrl2":"/discovery/D001/7001015.flv"},
					{"id":"7001016","name":"除了导航，GPS还可以为渔船提供哪些帮助","src":"","videoUrl1":"/discovery/D001/7001016mp4","videoUrl2":"/discovery/D001/7001016.flv"}
					],
			"D002":[{"id":"7002001","name":"为什么冰山能撕裂船体的钢板","src":"","videoUrl1":"/discovery/D002/7002001.MP4","videoUrl2":"/discovery/D002/7002001.flv"},
					{"id":"7002002","name":"为什么气候变暖会使得格陵兰的冰山增加","src":"","videoUrl1":"/discovery/D002/7002002.MP4","videoUrl2":"/discovery/D002/7002002.flv"},
					{"id":"7002003","name":"全球暖化产生的影响会有多严重","src":"","videoUrl1":"/discovery/D002/7002003.MP4","videoUrl2":"/discovery/D002/7002003.flv"},
					{"id":"7002004","name":"冰山对海洋航运有哪些危害","src":"","videoUrl1":"/discovery/D002/7002004.MP4","videoUrl2":"/discovery/D002/7002004.flv"},
					{"id":"7002005","name":"冰山巡逻队是怎样防止冰山危害的","src":"","videoUrl1":"/discovery/D002/7002005.MP4","videoUrl2":"/discovery/D002/7002005.flv"},
					{"id":"7002006","name":"冰山是怎样形成的","src":"","videoUrl1":"/discovery/D002/7002006.MP4","videoUrl2":"/discovery/D002/7002006.flv"},
					{"id":"7002007","name":"冰山水下部分占整体的比例有多大","src":"","videoUrl1":"/discovery/D002/7002007.MP4","videoUrl2":"/discovery/D002/7002007.flv"},
					{"id":"7002008","name":"冰山的破坏能力到底有多大","src":"","videoUrl1":"/discovery/D002/7002008.MP4","videoUrl2":"/discovery/D002/7002008.flv"},
					{"id":"7002009","name":"因全球变暖而导致的冰山融化会对欧洲气候产生什么影响","src":"","videoUrl1":"/discovery/D002/7002009.MP4","videoUrl2":"/discovery/D002/7002009.flv"},
					{"id":"7002010","name":"格陵兰岛冰山是怎样漂流到大西洋的","src":"","videoUrl1":"/discovery/D002/7002010.MP4","videoUrl2":"/discovery/D002/7002010.flv"},
					{"id":"7002011","name":"科学家可以从冰山研究中获得什么有价值的信息","src":"","videoUrl1":"/discovery/D002/7002011.MP4","videoUrl2":"/discovery/D002/7002011.flv"},
					{"id":"7002012","name":"遭遇冰山而遇难的两个案例","src":"","videoUrl1":"/discovery/D002/7002012mp4","videoUrl2":"/discovery/D002/7002012.flv"}
					],
			"D039":[{"id":"7039001","name":"大气","src":"","videoUrl1":"/discovery/D039/7039001.MP4","videoUrl2":"/discovery/D039/7039001.flv"},
					{"id":"7039002","name":"太阳和季节","src":"","videoUrl1":"/discovery/D039/7039002.MP4","videoUrl2":"/discovery/D039/7039002.flv"},
					{"id":"7039003","name":"全球气候带","src":"","videoUrl1":"/discovery/D039/7039003.MP4","videoUrl2":"/discovery/D039/7039003.flv"},
					{"id":"7039004","name":"局部条件对天气的影响","src":"","videoUrl1":"/discovery/D039/7039004.MP4","videoUrl2":"/discovery/D039/7039004.flv"},
					{"id":"7039005","name":"旋风，飓风，龙卷风","src":"","videoUrl1":"/discovery/D039/7039005.MP4","videoUrl2":"/discovery/D039/7039005.flv"},
					{"id":"7039006","name":"飓风，台风和旋风","src":"","videoUrl1":"/discovery/D039/7039006.MP4","videoUrl2":"/discovery/D039/7039006.flv"},
					{"id":"7039007","name":"龙卷风","src":"","videoUrl1":"/discovery/D039/7039007.MP4","videoUrl2":"/discovery/D039/7039007.flv"},
					{"id":"7039008","name":"空气污染","src":"","videoUrl1":"/discovery/D039/7039008mp4","videoUrl2":"/discovery/D039/7039008.flv"}
					],
			"D041":[{"id":"7041001","name":"宇宙大爆炸和宇宙的起源","src":"","videoUrl1":"/discovery/D041/7041001.MP4","videoUrl2":"/discovery/D041/7041001.flv"},
					{"id":"7041002","name":"恒星，星系和银河系","src":"","videoUrl1":"/discovery/D041/7041002.MP4","videoUrl2":"/discovery/D041/7041002.flv"},
					{"id":"7041003","name":"太阳系的起源","src":"","videoUrl1":"/discovery/D041/7041003.MP4","videoUrl2":"/discovery/D041/7041003.flv"},
					{"id":"7041004","name":"内行星和外行星","src":"","videoUrl1":"/discovery/D041/7041004.MP4","videoUrl2":"/discovery/D041/7041004.flv"},
					{"id":"7041005","name":"行星的共性和差异","src":"","videoUrl1":"/discovery/D041/7041005.MP4","videoUrl2":"/discovery/D041/7041005.flv"},
					{"id":"7041006","name":"彗星，小行星和陨石","src":"","videoUrl1":"/discovery/D041/7041006.MP4","videoUrl2":"/discovery/D041/7041006.flv"},
					{"id":"7041007","name":"地球的轨道","src":"","videoUrl1":"/discovery/D041/7041007.MP4","videoUrl2":"/discovery/D041/7041007.flv"},
					{"id":"7041008","name":"地球的轨道","src":"","videoUrl1":"/discovery/D041/7041008mp4","videoUrl2":"/discovery/D041/7041008.flv"}
					],
			"D043":[{"id":"7043001","name":"火山概述","src":"","videoUrl1":"/discovery/D043/7043001.MP4","videoUrl2":"/discovery/D043/7043001.flv"},
					{"id":"7043002","name":"回顾","src":"","videoUrl1":"/discovery/D043/7043002.MP4","videoUrl2":"/discovery/D043/7043002.flv"},
					{"id":"7043003","name":"火山岩及其进程","src":"","videoUrl1":"/discovery/D043/7043003.MP4","videoUrl2":"/discovery/D043/7043003.flv"},
					{"id":"7043004","name":"风化和侵蚀","src":"","videoUrl1":"/discovery/D043/7043004.MP4","videoUrl2":"/discovery/D043/7043004.flv"},
					{"id":"7043005","name":"填空","src":"","videoUrl1":"/discovery/D043/7043005mp4","videoUrl2":"/discovery/D043/7043005.flv"}
					],
			"D048":[{"id":"7048001","name":"宇宙：概述","src":"","videoUrl1":"/discovery/D048/7048001.MP4","videoUrl2":"/discovery/D048/7048001.flv"},
					{"id":"7048002","name":"星团","src":"","videoUrl1":"/discovery/D048/7048002.MP4","videoUrl2":"/discovery/D048/7048002.flv"},
					{"id":"7048003","name":"大爆炸","src":"","videoUrl1":"/discovery/D048/7048003.MP4","videoUrl2":"/discovery/D048/7048003.flv"},
					{"id":"7048004","name":"星球内部","src":"","videoUrl1":"/discovery/D048/7048004.MP4","videoUrl2":"/discovery/D048/7048004.flv"},
					{"id":"7048005","name":"星球的种类","src":"","videoUrl1":"/discovery/D048/7048005.MP4","videoUrl2":"/discovery/D048/7048005.flv"},
					{"id":"7048006","name":"恒星的死亡","src":"","videoUrl1":"/discovery/D048/7048006.MP4","videoUrl2":"/discovery/D048/7048006.flv"},
					{"id":"7048007","name":"中子星和黑洞","src":"","videoUrl1":"/discovery/D048/7048007.MP4","videoUrl2":"/discovery/D048/7048007.flv"},
					{"id":"7048008","name":"变星","src":"","videoUrl1":"/discovery/D048/7048008.MP4","videoUrl2":"/discovery/D048/7048008.flv"},
					{"id":"7048009","name":"双星","src":"","videoUrl1":"/discovery/D048/7048009mp4","videoUrl2":"/discovery/D048/7048009.flv"}
					],
			"D054":[{"id":"7054001","name":"飞行：概述","src":"/discovery/D054/7054001.jpg","videoUrl1":"/discovery/D054/7054001.MP4","videoUrl2":"/discovery/D054/7054001.flv"},
					{"id":"7054002","name":"遥控空中客车-A380","src":"","videoUrl1":"/discovery/D054/7054002.MP4","videoUrl2":"/discovery/D054/7054002.flv"},
					{"id":"7054003","name":"红牛直升机","src":"","videoUrl1":"/discovery/D054/7054003.MP4","videoUrl2":"/discovery/D054/7054003.flv"},
					{"id":"7054004","name":"直升机测试碰撞","src":"","videoUrl1":"/discovery/D054/7054004.MP4","videoUrl2":"/discovery/D054/7054004.flv"},
					{"id":"7054005","name":"SOFIA 747飞机","src":"","videoUrl1":"/discovery/D054/7054005.MP4","videoUrl2":"/discovery/D054/7054005.flv"},
					{"id":"7054006","name":"边 540 飞机","src":"","videoUrl1":"/discovery/D054/7054006.MP4","videoUrl2":"/discovery/D054/7054006.flv"},
					{"id":"7054007","name":"直升机盒","src":"","videoUrl1":"/discovery/D054/7054007.MP4","videoUrl2":"/discovery/D054/7054007.flv"},
					{"id":"7054008","name":"空间战术配合","src":"","videoUrl1":"/discovery/D054/7054008.MP4","videoUrl2":"/discovery/D054/7054008.flv"},
					{"id":"7054009","name":"飓风模拟器","src":"","videoUrl1":"/discovery/D054/7054009.MP4","videoUrl2":"/discovery/D054/7054009.flv"},
					{"id":"7054010","name":"欧洲直升机 NH90","src":"","videoUrl1":"/discovery/D054/7054010.MP4","videoUrl2":"/discovery/D054/7054010.flv"},
					{"id":"7054011","name":"充气机翼","src":"","videoUrl1":"/discovery/D054/7054011.MP4","videoUrl2":"/discovery/D054/7054011.flv"},
					{"id":"7054012","name":"回避者","src":"","videoUrl1":"/discovery/D054/7054012mp4","videoUrl2":"/discovery/D054/7054012.flv"}
					],
			"D057":[{"id":"7057001","name":"地震海啸：概述","src":"","videoUrl1":"/discovery/D057/7057001.MP4","videoUrl2":"/discovery/D057/7057001.flv"},
					{"id":"7057002","name":"地球的结构","src":"","videoUrl1":"/discovery/D057/7057002.MP4","videoUrl2":"/discovery/D057/7057002.flv"},
					{"id":"7057003","name":"板块构造与地震","src":"","videoUrl1":"/discovery/D057/7057003.MP4","videoUrl2":"/discovery/D057/7057003.flv"},
					{"id":"7057004","name":"2004年海啸","src":"","videoUrl1":"/discovery/D057/7057004.MP4","videoUrl2":"/discovery/D057/7057004.flv"},
					{"id":"7057005","name":"海啸带来的连锁反应","src":"","videoUrl1":"/discovery/D057/7057005.MP4","videoUrl2":"/discovery/D057/7057005.flv"},
					{"id":"7057006","name":"地震海啸：本章小结","src":"","videoUrl1":"/discovery/D057/7057006mp4","videoUrl2":"/discovery/D057/7057006.flv"}
					],
			"W004":[{"id":"8004001","name":"为什么飞机能超音速飞行","src":"","videoUrl1":"/discovery/W004/8004001.MP4","videoUrl2":"/discovery/W004/8004001.flv"},
					{"id":"8004002","name":"挑战3倍音速的飞机——“黑鸟”","src":"","videoUrl1":"/discovery/W004/8004002.MP4","videoUrl2":"/discovery/W004/8004002.flv"},
					{"id":"8004003","name":"新型声纳系统如何才能探测到水雷","src":"","videoUrl1":"/discovery/W004/8004003.MP4","videoUrl2":"/discovery/W004/8004003.flv"},
					{"id":"8004004","name":"海军如何应对水雷的威胁","src":"","videoUrl1":"/discovery/W004/8004004.MP4","videoUrl2":"/discovery/W004/8004004.flv"},
					{"id":"8004005","name":"蝙蝠处理高频声音的超凡能力","src":"","videoUrl1":"/discovery/W004/8004005.MP4","videoUrl2":"/discovery/W004/8004005.flv"},
					{"id":"8004006","name":"蝙蝠如何利用声纳看到物体","src":"","videoUrl1":"/discovery/W004/8004006.MP4","videoUrl2":"/discovery/W004/8004006.flv"},
					{"id":"8004007","name":"飞机怎样克服音障而突破音速飞行","src":"","videoUrl1":"/discovery/W004/8004007.MP4","videoUrl2":"/discovery/W004/8004007.flv"},
					{"id":"8004008","name":"飞机穿透音障时形成的冲击波是怎样的","src":"","videoUrl1":"/discovery/W004/8004008mp4","videoUrl2":"/discovery/W004/8004008.flv"}
					],
			"W006":[{"id":"8006001","name":"为什么庙宇的屋顶经常用黄金装饰","src":"","videoUrl1":"/discovery/W006/8006001.MP4","videoUrl2":"/discovery/W006/8006001.flv"},
					{"id":"8006002","name":"为什么黄金被用来补牙","src":"","videoUrl1":"/discovery/W006/8006002.MP4","videoUrl2":"/discovery/W006/8006002.flv"},
					{"id":"8006003","name":"利用碳纤维制作的超级赛车","src":"","videoUrl1":"/discovery/W006/8006003.MP4","videoUrl2":"/discovery/W006/8006003.flv"},
					{"id":"8006004","name":"制作一个原子厚度的黄金薄膜","src":"","videoUrl1":"/discovery/W006/8006004.MP4","videoUrl2":"/discovery/W006/8006004.flv"},
					{"id":"8006005","name":"如何利用特质显微镜观察物质表层原子的排列方式","src":"","videoUrl1":"/discovery/W006/8006005.MP4","videoUrl2":"/discovery/W006/8006005.flv"},
					{"id":"8006006","name":"如何利用碳纤维和树脂制作坚硬的复合材料","src":"","videoUrl1":"/discovery/W006/8006006.MP4","videoUrl2":"/discovery/W006/8006006.flv"},
					{"id":"8006007","name":"如何组合不同的材料制造新的复合材料","src":"","videoUrl1":"/discovery/W006/8006007.MP4","videoUrl2":"/discovery/W006/8006007.flv"},
					{"id":"8006008","name":"材料科学家是怎样了解物质属性的","src":"","videoUrl1":"/discovery/W006/8006008.MP4","videoUrl2":"/discovery/W006/8006008.flv"},
					{"id":"8006009","name":"由于排列方式不同，碳原子可以形成不同的物质","src":"","videoUrl1":"/discovery/W006/8006009.MP4","videoUrl2":"/discovery/W006/8006009.flv"},
					{"id":"8006010","name":"石墨的性质及其利用","src":"","videoUrl1":"/discovery/W006/8006010.MP4","videoUrl2":"/discovery/W006/8006010.flv"},
					{"id":"8006011","name":"金刚石的性质及其利用","src":"","videoUrl1":"/discovery/W006/8006011.MP4","videoUrl2":"/discovery/W006/8006011.flv"},
					{"id":"8006012","name":"黄金的导电性","src":"","videoUrl1":"/discovery/W006/8006012mp4","videoUrl2":"/discovery/W006/8006012.flv"}
					],
			"W011":[{"id":"8011001","name":"X光技术在边境检查中的应用","src":"","videoUrl1":"/discovery/W011/8011001.MP4","videoUrl2":"/discovery/W011/8011001.flv"},
					{"id":"8011002","name":"X射线在医学中应用的利与弊","src":"","videoUrl1":"/discovery/W011/8011002.MP4","videoUrl2":"/discovery/W011/8011002.flv"},
					{"id":"8011003","name":"“航海家”看到的土星和海王星","src":"","videoUrl1":"/discovery/W011/8011003.MP4","videoUrl2":"/discovery/W011/8011003.flv"},
					{"id":"8011004","name":"与传统的X光机相比，数字化X光机有什么优势","src":"","videoUrl1":"/discovery/W011/8011004.MP4","videoUrl2":"/discovery/W011/8011004.flv"},
					{"id":"8011005","name":"为什么哈勃望远镜可以使我们看到宇宙诞生时的情形","src":"","videoUrl1":"/discovery/W011/8011005.MP4","videoUrl2":"/discovery/W011/8011005.flv"},
					{"id":"8011006","name":"为什么士兵能在漆黑的夜晚看到周围的物体","src":"","videoUrl1":"/discovery/W011/8011006.MP4","videoUrl2":"/discovery/W011/8011006.flv"},
					{"id":"8011007","name":"为什么要将哈勃望远镜发射到太空中进行观测","src":"","videoUrl1":"/discovery/W011/8011007.MP4","videoUrl2":"/discovery/W011/8011007.flv"},
					{"id":"8011008","name":"医生是怎样观察胎儿活动的","src":"","videoUrl1":"/discovery/W011/8011008.MP4","videoUrl2":"/discovery/W011/8011008.flv"},
					{"id":"8011009","name":"在太空中修复哈勃望远镜","src":"","videoUrl1":"/discovery/W011/8011009.MP4","videoUrl2":"/discovery/W011/8011009.flv"},
					{"id":"8011010","name":"地面雷达和飞机的“对抗”","src":"","videoUrl1":"/discovery/W011/8011010mp4","videoUrl2":"/discovery/W011/8011010.flv"}
					],
			"W034":[{"id":"8034001","name":"冰山","src":"","videoUrl1":"/discovery/W034/8034001.MP4","videoUrl2":"/discovery/W034/8034001.flv"},
					{"id":"8034002","name":"穿衣和脱衣","src":"","videoUrl1":"/discovery/W034/8034002.MP4","videoUrl2":"/discovery/W034/8034002.flv"},
					{"id":"8034003","name":"数字七","src":"","videoUrl1":"/discovery/W034/8034003.MP4","videoUrl2":"/discovery/W034/8034003.flv"},
					{"id":"8034004","name":"冰上舞蹈","src":"","videoUrl1":"/discovery/W034/8034004.MP4","videoUrl2":"/discovery/W034/8034004.flv"},
					{"id":"8034005","name":"大扫除","src":"","videoUrl1":"/discovery/W034/8034005.MP4","videoUrl2":"/discovery/W034/8034005.flv"},
					{"id":"8034006","name":"听那欢呼声","src":"","videoUrl1":"/discovery/W034/8034006.MP4","videoUrl2":"/discovery/W034/8034006.flv"},
					{"id":"8034007","name":"摇滚迪斯科","src":"","videoUrl1":"/discovery/W034/8034007.MP4","videoUrl2":"/discovery/W034/8034007.flv"},
					{"id":"8034008","name":"两个问题","src":"","videoUrl1":"/discovery/W034/8034008.MP4","videoUrl2":"/discovery/W034/8034008.flv"},
					{"id":"8034009","name":"假日俱乐部","src":"","videoUrl1":"/discovery/W034/8034009.MP4","videoUrl2":"/discovery/W034/8034009.flv"},
					{"id":"8034010","name":"号码虫假日俱乐部","src":"","videoUrl1":"/discovery/W034/8034010mp4","videoUrl2":"/discovery/W034/8034010.flv"}
					],
			"W039":[{"id":"8039001","name":"火：概述","src":"","videoUrl1":"/discovery/W039/8039001.MP4","videoUrl2":"/discovery/W039/8039001.flv"},
					{"id":"8039002","name":"火中行走的世界纪录","src":"","videoUrl1":"/discovery/W039/8039002.MP4","videoUrl2":"/discovery/W039/8039002.flv"},
					{"id":"8039003","name":"吃火的世界纪录","src":"","videoUrl1":"/discovery/W039/8039003.MP4","videoUrl2":"/discovery/W039/8039003.flv"},
					{"id":"8039004","name":"消防防爆训练","src":"","videoUrl1":"/discovery/W039/8039004.MP4","videoUrl2":"/discovery/W039/8039004.flv"},
//					{"id":"8039005","name":"燃烧","src":"","videoUrl1":"/discovery/W039/8039005.MP4","videoUrl2":"/discovery/W039/8039005.flv"},
					{"id":"8039006","name":"电子着火模特","src":"","videoUrl1":"/discovery/W039/8039006.MP4","videoUrl2":"/discovery/W039/8039006.flv"},
					{"id":"8039007","name":"零燃烧的工具","src":"","videoUrl1":"/discovery/W039/8039007.MP4","videoUrl2":"/discovery/W039/8039007.flv"},
					{"id":"8039008","name":"火是如何配合工作的","src":"","videoUrl1":"/discovery/W039/8039008.MP4","videoUrl2":"/discovery/W039/8039008.flv"},
					{"id":"8039009","name":"雷管","src":"","videoUrl1":"/discovery/W039/8039009.MP4","videoUrl2":"/discovery/W039/8039009.flv"},
					{"id":"8039010","name":"热与温度","src":"","videoUrl1":"/discovery/W039/8039010.MP4","videoUrl2":"/discovery/W039/8039010.flv"},
					{"id":"8039011","name":"打火机","src":"","videoUrl1":"/discovery/W039/8039011.MP4","videoUrl2":"/discovery/W039/8039011.flv"},
					{"id":"8039012","name":"激光援助","src":"","videoUrl1":"/discovery/W039/8039012mp4","videoUrl2":"/discovery/W039/8039012.flv"}
					],
			"W040":[{"id":"8040001","name":"水：概述","src":"","videoUrl1":"/discovery/W040/8040001.MP4","videoUrl2":"/discovery/W040/8040001.flv"},
					{"id":"8040002","name":"双子座与水瓶座潜水艇","src":"","videoUrl1":"/discovery/W040/8040002.MP4","videoUrl2":"/discovery/W040/8040002.flv"},
					{"id":"8040003","name":"水中的警察","src":"","videoUrl1":"/discovery/W040/8040003.MP4","videoUrl2":"/discovery/W040/8040003.flv"},
					{"id":"8040004","name":"冲浪","src":"","videoUrl1":"/discovery/W040/8040004.MP4","videoUrl2":"/discovery/W040/8040004.flv"},
					{"id":"8040005","name":"海报","src":"","videoUrl1":"/discovery/W040/8040005.MP4","videoUrl2":"/discovery/W040/8040005.flv"},
					{"id":"8040006","name":"水质下降","src":"","videoUrl1":"/discovery/W040/8040006.MP4","videoUrl2":"/discovery/W040/8040006.flv"},
					{"id":"8040007","name":"大海中的直升机","src":"","videoUrl1":"/discovery/W040/8040007.MP4","videoUrl2":"/discovery/W040/8040007.flv"},
					{"id":"8040008","name":"最大的室内港口","src":"","videoUrl1":"/discovery/W040/8040008.MP4","videoUrl2":"/discovery/W040/8040008.flv"},
					{"id":"8040009","name":"水柱","src":"","videoUrl1":"/discovery/W040/8040009.mp4","videoUrl2":"/discovery/W040/8040009.flv"},
//					{"id":"8040010","name":"人力潜艇","src":"","videoUrl1":"/discovery/W040/8040010.MP4","videoUrl2":"/discovery/W040/8040010.flv"},
					{"id":"8040011","name":"鱼饵","src":"","videoUrl1":"/discovery/W040/8040011.MP4","videoUrl2":"/discovery/W040/8040011.flv"},
					{"id":"8040012","name":"水中漂浮的生物","src":"","videoUrl1":"/discovery/W040/8040012.MP4","videoUrl2":"/discovery/W040/8040012.flv"},
					{"id":"8040013","name":"听诊器","src":"","videoUrl1":"/discovery/W040/8040013mp4","videoUrl2":"/discovery/W040/8040013.flv"}
					],
			"S041":[{"id":"9041001","name":"不可思议的昆虫世界介绍","src":"","videoUrl1":"/discovery/S041/9041001.MP4","videoUrl2":"/discovery/S041/9041001.flv"},
					{"id":"9041002","name":"节肢动物的特点","src":"","videoUrl1":"/discovery/S041/9041002.MP4","videoUrl2":"/discovery/S041/9041002.flv"},
					{"id":"9041003","name":"昆虫的特点","src":"","videoUrl1":"/discovery/S041/9041003.MP4","videoUrl2":"/discovery/S041/9041003.flv"},
					{"id":"9041004","name":"昆虫有三个身体部位：头，胸，腹部","src":"","videoUrl1":"/discovery/S041/9041004.MP4","videoUrl2":"/discovery/S041/9041004.flv"},
					{"id":"9041005","name":"昆虫有六条腿","src":"","videoUrl1":"/discovery/S041/9041005.MP4","videoUrl2":"/discovery/S041/9041005.flv"},
					{"id":"9041006","name":"密切观察昆虫的头","src":"","videoUrl1":"/discovery/S041/9041006.MP4","videoUrl2":"/discovery/S041/9041006.flv"},
					{"id":"9041007","name":"密切观察昆虫的胸","src":"","videoUrl1":"/discovery/S041/9041007.MP4","videoUrl2":"/discovery/S041/9041007.flv"},
					{"id":"9041008","name":"密切观察昆虫的腹部","src":"","videoUrl1":"/discovery/S041/9041008.MP4","videoUrl2":"/discovery/S041/9041008.flv"},
					{"id":"9041009","name":"群居的昆虫","src":"","videoUrl1":"/discovery/S041/9041009.MP4","videoUrl2":"/discovery/S041/9041009.flv"},
					{"id":"9041010","name":"蜜蜂","src":"","videoUrl1":"/discovery/S041/9041010.MP4","videoUrl2":"/discovery/S041/9041010.flv"},
					{"id":"9041011","name":"蚂蚁","src":"","videoUrl1":"/discovery/S041/9041011.MP4","videoUrl2":"/discovery/S041/9041011.flv"},
					{"id":"9041012","name":"伪装：昆虫保护自己的一种方法","src":"","videoUrl1":"/discovery/S041/9041012.MP4","videoUrl2":"/discovery/S041/9041012.flv"},
					{"id":"9041013","name":"昆虫：益处和害处","src":"","videoUrl1":"/discovery/S041/9041013.MP4","videoUrl2":"/discovery/S041/9041013.flv"},
					{"id":"9041014","name":"述评：不可思议的昆虫世界","src":"","videoUrl1":"/discovery/S041/9041014mp4","videoUrl2":"/discovery/S041/9041014.flv"}
					],
			"S043":[{"id":"9043001","name":"简介: 分子遗传学和人类基因组计划","src":"","videoUrl1":"/discovery/S043/9043001.MP4","videoUrl2":"/discovery/S043/9043001.flv"},
					{"id":"9043002","name":"隔离囊性纤维化的基因","src":"","videoUrl1":"/discovery/S043/9043002.MP4","videoUrl2":"/discovery/S043/9043002.flv"},
					{"id":"9043003","name":"人类基因组计划：目标是什么，预测成本和项目的时间跨度？","src":"","videoUrl1":"/discovery/S043/9043003.MP4","videoUrl2":"/discovery/S043/9043003.flv"},
					{"id":"9043004","name":"人类基因组计划：映射过程是如何工作的？","src":"","videoUrl1":"/discovery/S043/9043004.MP4","videoUrl2":"/discovery/S043/9043004.flv"},
					{"id":"9043005","name":"人类基因组计划：DNA指纹","src":"","videoUrl1":"/discovery/S043/9043005.MP4","videoUrl2":"/discovery/S043/9043005.flv"},
					{"id":"9043006","name":"人类基因组计划：项目花时间和金钱值得吗？","src":"","videoUrl1":"/discovery/S043/9043006.MP4","videoUrl2":"/discovery/S043/9043006.flv"},
					{"id":"9043007","name":"人类基因组计划：这个项目对社会的影响是什么？","src":"","videoUrl1":"/discovery/S043/9043007.MP4","videoUrl2":"/discovery/S043/9043007.flv"},
					{"id":"9043008","name":"结束语：分子遗传学和人类基因组计划","src":"","videoUrl1":"/discovery/S043/9043008mp4","videoUrl2":"/discovery/S043/9043008.flv"}
					],
			"S048":[{"id":"9048001","name":"人类身体概述","src":"","videoUrl1":"/discovery/S048/9048001.MP4","videoUrl2":"/discovery/S048/9048001.flv"},
					{"id":"9048002","name":"骨架","src":"","videoUrl1":"/discovery/S048/9048002.MP4","videoUrl2":"/discovery/S048/9048002.flv"},
					{"id":"9048003","name":"肌肉","src":"","videoUrl1":"/discovery/S048/9048003.MP4","videoUrl2":"/discovery/S048/9048003.flv"},
					{"id":"9048004","name":"神经","src":"","videoUrl1":"/discovery/S048/9048004.MP4","videoUrl2":"/discovery/S048/9048004.flv"},
					{"id":"9048005","name":"脑","src":"","videoUrl1":"/discovery/S048/9048005.MP4","videoUrl2":"/discovery/S048/9048005.flv"},
					{"id":"9048006","name":"血","src":"","videoUrl1":"/discovery/S048/9048006.MP4","videoUrl2":"/discovery/S048/9048006.flv"},
					{"id":"9048007","name":"心脏","src":"","videoUrl1":"/discovery/S048/9048007.MP4","videoUrl2":"/discovery/S048/9048007.flv"},
					{"id":"9048008","name":"消化系统","src":"","videoUrl1":"/discovery/S048/9048008.MP4","videoUrl2":"/discovery/S048/9048008.flv"},
					{"id":"9048009","name":"废料处理","src":"","videoUrl1":"/discovery/S048/9048009.MP4","videoUrl2":"/discovery/S048/9048009.flv"},
					{"id":"9048010","name":"呼吸系统","src":"","videoUrl1":"/discovery/S048/9048010.MP4","videoUrl2":"/discovery/S048/9048010.flv"},
					{"id":"9048011","name":"你的身体很特别","src":"","videoUrl1":"/discovery/S048/9048011mp4","videoUrl2":"/discovery/S048/9048011.flv"}
					],
			"S060":[{"id":"9060001","name":"自然世界：概述","src":"","videoUrl1":"/discovery/S060/9060001.MP4","videoUrl2":"/discovery/S060/9060001.flv"},
					{"id":"9060002","name":"原始木筏","src":"","videoUrl1":"/discovery/S060/9060002.MP4","videoUrl2":"/discovery/S060/9060002.flv"},
					{"id":"9060003","name":"海象海豹","src":"","videoUrl1":"/discovery/S060/9060003.MP4","videoUrl2":"/discovery/S060/9060003.flv"},
					{"id":"9060004","name":"去除胎块暗礁","src":"","videoUrl1":"/discovery/S060/9060004.MP4","videoUrl2":"/discovery/S060/9060004.flv"},
					{"id":"9060005","name":"朗格冰川","src":"","videoUrl1":"/discovery/S060/9060005.MP4","videoUrl2":"/discovery/S060/9060005.flv"},
					{"id":"9060006","name":"建造一辆环保汽车","src":"","videoUrl1":"/discovery/S060/9060006.MP4","videoUrl2":"/discovery/S060/9060006.flv"},
					{"id":"9060007","name":"航海板","src":"","videoUrl1":"/discovery/S060/9060007.MP4","videoUrl2":"/discovery/S060/9060007.flv"},
					{"id":"9060008","name":"风场","src":"","videoUrl1":"/discovery/S060/9060008.MP4","videoUrl2":"/discovery/S060/9060008.flv"},
					{"id":"9060009","name":"太阳能","src":"","videoUrl1":"/discovery/S060/9060009.MP4","videoUrl2":"/discovery/S060/9060009.flv"},
					{"id":"9060010","name":"冰岛深钻工程","src":"","videoUrl1":"/discovery/S060/9060010.mp4","videoUrl2":"/discovery/S060/9060010.flv"},
					{"id":"9060011","name":"极地指南","src":"","videoUrl1":"/discovery/S060/9060011.MP4","videoUrl2":"/discovery/S060/9060011.flv"},
					{"id":"9060012","name":"冰川","src":"","videoUrl1":"/discovery/S060/9060012.MP4","videoUrl2":"/discovery/S060/9060012.flv"},
					{"id":"9060013","name":"人工蒸馏水","src":"","videoUrl1":"/discovery/S060/9060013mp4","videoUrl2":"/discovery/S060/9060013.flv"}
					],
			"S061":[{"id":"9061001","name":"鲨鱼：概述","src":"","videoUrl1":"/discovery/S061/9061001.MP4","videoUrl2":"/discovery/S061/9061001.flv"},
					{"id":"9061002","name":"鲨鱼家族","src":"","videoUrl1":"/discovery/S061/9061002.MP4","videoUrl2":"/discovery/S061/9061002.flv"},
					{"id":"9061003","name":"戴尔岛","src":"","videoUrl1":"/discovery/S061/9061003.MP4","videoUrl2":"/discovery/S061/9061003.flv"},
					{"id":"9061004","name":"标记鲨鱼","src":"","videoUrl1":"/discovery/S061/9061004.MP4","videoUrl2":"/discovery/S061/9061004.flv"},
					{"id":"9061005","name":"戴尔岛的哨所","src":"","videoUrl1":"/discovery/S061/9061005.MP4","videoUrl2":"/discovery/S061/9061005.flv"},
					{"id":"9061006","name":"孩子们的游戏","src":"","videoUrl1":"/discovery/S061/9061006.MP4","videoUrl2":"/discovery/S061/9061006.flv"},
					{"id":"9061007","name":"一家人遇到的困难","src":"","videoUrl1":"/discovery/S061/9061007.MP4","videoUrl2":"/discovery/S061/9061007.flv"},
					{"id":"9061008","name":"咬破喉管","src":"","videoUrl1":"/discovery/S061/9061008.MP4","videoUrl2":"/discovery/S061/9061008.flv"},
					{"id":"9061009","name":"鲨鱼笼子","src":"","videoUrl1":"/discovery/S061/9061009mp4","videoUrl2":"/discovery/S061/9061009.flv"}
					],
			"S067":[{"id":"9067001","name":"极地：概述","src":"","videoUrl1":"/discovery/S067/9067001.MP4","videoUrl2":"/discovery/S067/9067001.flv"},
					{"id":"9067002","name":"掠食者","src":"","videoUrl1":"/discovery/S067/9067002.MP4","videoUrl2":"/discovery/S067/9067002.flv"},
					{"id":"9067003","name":"北极熊","src":"","videoUrl1":"/discovery/S067/9067003.MP4","videoUrl2":"/discovery/S067/9067003.flv"},
					{"id":"9067004","name":"白鲸","src":"","videoUrl1":"/discovery/S067/9067004.MP4","videoUrl2":"/discovery/S067/9067004.flv"},
					{"id":"9067005","name":"海豹","src":"","videoUrl1":"/discovery/S067/9067005.MP4","videoUrl2":"/discovery/S067/9067005.flv"},
					{"id":"9067006","name":"第一个独处的夏日","src":"","videoUrl1":"/discovery/S067/9067006.MP4","videoUrl2":"/discovery/S067/9067006.flv"},
					{"id":"9067007","name":"白鲸2","src":"","videoUrl1":"/discovery/S067/9067007.MP4","videoUrl2":"/discovery/S067/9067007.flv"},
					{"id":"9067008","name":"熊","src":"","videoUrl1":"/discovery/S067/9067008.MP4","videoUrl2":"/discovery/S067/9067008.flv"},
					{"id":"9067009","name":"壮年海豹","src":"","videoUrl1":"/discovery/S067/9067009.MP4","videoUrl2":"/discovery/S067/9067009.flv"},
					{"id":"9067010","name":"海鸥","src":"","videoUrl1":"/discovery/S067/9067010.MP4","videoUrl2":"/discovery/S067/9067010.flv"},
					{"id":"9067011","name":"海豹猎食","src":"","videoUrl1":"/discovery/S067/9067011.MP4","videoUrl2":"/discovery/S067/9067011.flv"},
					{"id":"9067012","name":"北极熊猎食","src":"","videoUrl1":"/discovery/S067/9067012.MP4","videoUrl2":"/discovery/S067/9067012.flv"},
					{"id":"9067013","name":"北极熊搏斗","src":"","videoUrl1":"/discovery/S067/9067013.MP4","videoUrl2":"/discovery/S067/9067013.flv"}
					]
		   };var jsonName;
function gainVideoList(id){
	$("#videoListPup").show();
	jsonName = eval("books."+id);
	for(var xilie in xilies.list){
		if(xilies.list[xilie].id==id)
		$("#xiLieName").html('<h2>'+xilies.list[xilie].name+'</h2>');
	}
	var listStr="";
	var iNow=0;
	for(var i in jsonName){
		iNow++;
		listStr+='<li class="cur"><input type="hidden" value="'+id+'"><span style="width:30px; height:40px; font-size:20px; color:#666; float:left;">'+iNow+'、</span><a href="javascript:;" onClick="gainVideo($(this).html())">'+jsonName[i].name+'</a></li>';	
	}
	$("#videoList").append(listStr);				
}

function gainVideo(str){
	$(".videoPup").show();
	var videoStr="";
	for(var book in jsonName){
		var name=jsonName[book].name;
		if(str==name){
			videoStr+='<h2>'+str+'</h2>';
			var url1=vhost+jsonName[book].videoUrl1;
			var url2=vhost+jsonName[book].videoUrl2;
			if(url1){
				var flashvars={
					f:url1,
					c:0,
					p:1,
					e:1,
					wh:'3:2'
				};		
			}
			else{
			var flashvars={
				f:url2,
				c:0,
				p:1,
				e:1,
				wh:'3:2'
			};
			}
			var params={bgcolor:'#FFF',allowFullScreen:false,allowScriptAccess:'always',wmode:'transparent'};
			var video=[url1+"->video/mp4'"];
			CKobject.embed(phost+'ckplayer/ckplayer.swf','a1','ckplayer_a1','100%','100%',true,flashvars,video,params);
		}
	}
	$("#name").append(videoStr);
}