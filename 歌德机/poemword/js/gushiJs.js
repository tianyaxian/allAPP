// JavaScript Document
$(document).ready(function(e) {
    $(".box").height($(window).height()-414+'px');
	var arr=[];		//每一块自身的高度
	var arr2=[];    //每一块距离父级的高度
	var arr2Child;
	var flag=0;		//滚动时查找该显示哪一块
	var lastStr='';
	
	for(var i=0;i<$("#main ul").length;i++){
		arr.push($("#main ul").eq(i).height());
	}
	console.log(arr);
	
	for(var i=0; i<$("#main .title").length; i++){
		arr2Child=0;
		for(var j=0;j<=i;j++){
			arr2Child+=arr[i-j];
			arr2Child+=125;	
		}	
		arr2.push(arr2Child);			
	}	
	console.log(arr2);
	
	$(".box").scroll(function(){
		for(var i=0;i<arr2.length;i++){
			if($(this).scrollTop()>=arr2[i]){flag=i+1;}
			$("#title1").html($("#main .title").eq(flag).html());	
			if($(this).scrollTop()<arr2[0]){
				$("#title1").html($(".shaixuan ul li").eq(0).html());
				$(".shaixuan ul li").eq(0).addClass('cur').siblings().removeClass();
			}else{
				$(".shaixuan ul li").eq(flag).addClass('cur').siblings().removeClass();
			}
		}
	});
	
	$(".shaixuan ul li").click(function(){
		var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
        var nScrollTop = 0;   //滚动到的当前位置
        var nDivHight = $(".box").height();
		/*点击导航定位*/
		//$(this).addClass('cur').siblings().removeClass();
		
		var _index=$(this).index()-1;
		var top=0;
		var index;
		for(var x=0; x<=_index; x++){
			index=_index-x;
			top+=arr[index]+125;			
		}
		$(".box").scrollTop(top);
		/*点击导航定位*/
		
		nScrollHight = $(".box")[0].scrollHeight;
        nScrollTop = $(".box")[0].scrollTop;
		if(nScrollTop + nDivHight >= nScrollHight){
			lastStr=$("#title1").html();
			//alert("滚动条到底部了");alert(lastStr);
			$("#title1").html(lastStr);	
			$(this).addClass('cur').siblings().removeClass();
		}else{
			$("#title1").html($(this).html());
		}
	})
});