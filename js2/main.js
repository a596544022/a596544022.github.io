document.onreadystatechange = subSomething;
//当页面加载状态改变的时候执行这个方法.
function subSomething() {
    if ("complete" == document.readyState) {
    //当页面加载状态为完全结束时进入
    document.getElementById("cav").style.display = "none";
}
}
//$(document).ready(function () {
//      var he = $(window).height() - 100;
//      $(".cont_t").css({
//              "height": he + "px"
//          }
//      )
//  }
//);
//$(document).ready(function () {
//      $(window).resize(function () {
//              var he = $(window).height() - 100;
//              $(".cont_t").css({
//                      "height": he + "px"
//                  }
//              )
//          }
//      );
//  }
//);
//$(document).ready(function () {
//  var sl=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg","10.jpg"];
//      $(".cont").on("click", "img", function () {
//              var he = $(window).height() - 150;
//              $("#cav-img").css({"height": he + "px"});
//              var str = $(this).attr("src");
//              console.log(str);
//              var strs = new Array();
//              strs = str.split("list");
//              var oimg = new Image();
//              oimg.src = "img/002/list" + strs[1];
//              $("#cav-img").css({
//                      "display": "block"
//                  }
//              );
//              if (oimg.complete = true) {
//                  oimg.onload = function () {
//                      $("#qq").attr("src", "img/002/list" + strs[1]);
//                      $("#cav1").css({
//                              "display": "none"
//                          }
//                      );
//                  }
//                  var num=0;
//                  document.body.addEventListener("DOMMouseScroll", function zc(event) {event = event || window.event;
//                      var ob=$("#qq").attr("src");
//                      strs = str.split("list");
//                      var oimg = new Image();
//                      if(event.wheelDelta < 0){
//                          //向下
//                          if(num>=9){alert("已经是最后一张了")}
//                          else{
//                              oimg.src = "img/002/list" + sl[num+1];
//                              $("#cav1").css({"display": "block"});
//                              if (oimg.complete = true) {
//                                  oimg.onload = function () {
//                                      $("#qq").attr("src", "img/002/list" + sl[num+1]);
//                                      num=num+1;
//                                      $("#cav1").css({"display": "none" }); }}}}
//                      else{
//                          //向上
//                          if(num<=0){alert("已经是第一张了");}
//                          else{
//                              oimg.src = "img/002/list" + sl[num-1];
//                              $("#cav1").css({"display": "block"});
//                              if (oimg.complete = true) {
//                                  oimg.onload = function () {
//                                      $("#qq").attr("src", "img/002/list" + sl[num-1]);
//                                      num=num-1;
//                                      $("#cav1").css({"display": "none"}); }}}}});
//                  document.body.onmousewheel = function(event) {
//                      event = event || window.event;
//                      var ob=$("#qq").attr("src");
//                      strs = str.split("list");
//                      var oimg = new Image();
//                      if(event.wheelDelta < 0){
//                          //向下
//                          if(num>=9){alert("已经是最后一张了")}
//                          else{
//                              oimg.src = "img/002/list" + sl[num+1];
//                              $("#cav1").css({"display": "block" });
//                              if (oimg.complete = true) {
//                                  oimg.onload = function () {
//                                      $("#qq").attr("src", "img/002/list" + sl[num+1]);
//                                      num=num+1;
//                                      $("#cav1").css({"display": "none" });}}}}
//                      else{
//                          //向上
//                          if(num<=0){alert("已经是第一张了");}
//                          else{
//                              oimg.src = "img/002/list" + sl[num-1];
//                              $("#cav1").css({"display": "block" });
//                              if (oimg.complete = true) {
//                                  oimg.onload = function () {
//                                      $("#qq").attr("src", "img/002/list" + sl[num-1]);
//                                      num=num-1;
//                                      $("#cav1").css({"display": "none" });}}}}};
//
//              }
//          }
//      );
//  }
//);
//$(document).ready(function () {
//      $(".close").click(
//          function () {
//                  document.body.onmousewheel=null;
//              if (document.body.DOMMouseScroll){
//              document.body.removeEventListener("DOMMouseScroll",zc());}
//              $("#cav-img").css({
//                      "display": "none"
//                  }
//              );
//              $("#cav1").css({
//                      "display": "block"
//                  }
//              );
//
//          }
//      )
//      //滚动加载
//      var tim = 1;
//      $(".cont_t").scroll(
//          function () {
//              var oimg = new Image();
//              var hei = $(".bottom").offset().top - 100 - $(".cont_t").height();
//              console.log(hei)
//              if (tim == 0) {
//                  return false
//              }
//              if (hei < 0) {
//                  var len = $(".pic-max>img").length;
//                  var Olen = len + 1;
//                  if (Olen < 10) {
//                      Olen = "0" + Olen
//                  }
//                  if (len < 10) {
//                      if (len % 2 == 0) {
//                          tim = 0;
//                          oimg.src = "img/001/list" + Olen + ".jpg";
//                          if (oimg.complete = true) {
//                              oimg.onload = function () {
//                                  var sc = "<div class='pic_n'><div id='pic_l' class='pic-max'><img src='img/001/list" + Olen + ".jpg'></div><div id='pic_r' class='pic-min'></div></div>";
//                                  $(".bottom").before(sc);
//                                  tim = 1;
//                              }
//                          }
//                      }
//                      else {
//                          tim = 0;
//                          oimg.src = "img/001/list" + Olen + ".jpg";
//                          if (oimg.complete = true) {
//                              oimg.onload = function () {
//                                  var sc = "<div class='pic_n'><div id='pic_l' class='pic-min'></div><div id='pic_r' class='pic-max'><img src='img/001/list" + Olen + ".jpg'></div></div>";
//                                  $(".bottom").before(sc);
//                                  tim = 1;
//                                  if (Olen == 10) {
//                                      $(".bottom").css({
//                                              "display": "none"
//                                          }
//                                      );
//                                  }
//                              }
//                          }
//                      }
//                  }
//              }
//          }
//      )
//  }
//);
////动态设置高度
//$(document).ready(function () {
//      var he = $(window).height() - 100;
//      $(".cont_t").css({
//              "height": he + "px"
//          }
//      )
//  }
//);
//$(document).ready(function () {
//      $(window).resize(function () {
//              var he = $(window).height() - 100;
//              $(".cont_t").css({"height": he + "px"});
//              $("#cav-img").css({"height": he - 50 + "px"});
//          }
//      );
//  }
//);
//$(function () {
//  $(".my_l_c").click(
//      function () {
//          $(".my_l_t").fadeOut();
//          $(".my_l_b").fadeOut();
//          $(".my_l_c").fadeOut();
//          $(".my_first_one").animate({width: "320px"}, 2000);
//          $(".my_first_one2").animate({width: "230px"}, 2000);
//          $(".my_first_one3").animate({width: "160px"}, 2000);
//      })
//})
//				