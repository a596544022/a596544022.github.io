//uninitialized,loading ,interactive ,complete 
//17%
// document.onreadystatechange = subSomething;
//			//当页面加载状态改变的时候执行这个方法. 
//			function subSomething() 
//			{
//				if(document.readyState == "loading"){
//					$(".cav").animate({left:"-61%"},1500);
//				}
//				else if(document.readyState == "interactive"){
//					$(".cav").animate({left:"-44%"},1500);
//				} 
//				else if(document.readyState == "complete"){
//					$(".cav").animate({left:"-27%"},1500);
//				}
//}
//var oHeight=0;
//var beforeScrollTop=0;
//window.onload=ScrollHeight();
//function ScrollHeight(){
//		oHeight=$("html").height()*4;
//		beforeScrollTop=$(window).scrollTop();
////		alert(beforeScrollTop);
//console.log(beforeScrollTop);
//	}
//$(function(){
//	$(window).scroll(function(){
//		console.log($(document).height())
////		alert(oHeight)
//	var afterScrollTop=$(window).scrollTop();
//console.log(afterScrollTop);
//delta = afterScrollTop - beforeScrollTop;
////console.log(delta);
//	})
//})
var initTop = 0;
$(window).scroll(function(){
 var scrollTop = $(document).scrollTop();
 if(scrollTop > initTop){
scrollDown();
 } else {
scrollUp();
 }
 initTop = scrollTop;
});
function scrollUp(){
	 var scTop = $(document).scrollTop();
// var x=scrollTop/3;
var x=$(document).height();
var x=x*0.75/3;
var x=x+110;
//console.log(x);
   if(scTop<=x){
   	$(".list1").css("transform","translatey(-"+scTop+"px)")
   }
}
function scrollDown(){
 var scTop = $(document).scrollTop();
// var x=scrollTop/3;
var x=$(document).height();
var x=x*0.75/3;
var x=x+110;
//console.log(x);
   if(scTop<=x){
   	$(".list1").css("transform","translatey(-"+scTop+"px)")
   }
//$(".list1").css("transform","translatey(-"+top+"px)")
//console.log(top);
}
