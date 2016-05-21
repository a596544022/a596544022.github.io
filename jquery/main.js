document.onreadystatechange = subSomething;
//当页面加载状态改变的时候执行这个方法.
function subSomething() {
    if ("complete" == document.readyState) {
    //当页面加载状态为完全结束时进入
    document.getElementById("cav").style.display = "none";
}
}
$(document).ready(function () {
        var he = $(window).height() - 100;
        $(".cont_t").css({
                "height": he + "px"
            }
        )
    }
);
$(document).ready(function () {
        $(window).resize(function () {
                var he = $(window).height() - 100;
                $(".cont_t").css({
                        "height": he + "px"
                    }
                )
            }
        );
    }
);
$(document).ready(function () {
        $(".cont").on("click", "img", function () {
                var he = $(window).height() - 150;
                $("#cav-img").css({"height": he + "px"});
                var str = $(this).attr("src");
                console.log(str);
                var strs = new Array();
                strs = str.split("list");
                var oimg = new Image();
                oimg.src = "img/002/list" + strs[1];
                $("#cav-img").css({
                        "display": "block"
                    }
                );
                if (oimg.complete = true) {
                    oimg.onload = function () {
                        console.log(oimg.complete);
                        $("#qq").attr("src", "img/002/list" + strs[1]);
                        $("#cav1").css({
                                "display": "none"
                            }
                        );
                    }
                }
            }
        );
    }
);
$(document).ready(function () {
        $(".close").click(
            function () {
                $("#cav-img").css({
                        "display": "none"
                    }
                );
                $("#cav1").css({
                        "display": "block"
                    }
                );

            }
        )
        //滚动加载
        var tim = 1;
        $(".cont_t").scroll(
            function () {
                var oimg = new Image();
                var hei = $(".bottom").offset().top - 100 - $(".cont_t").height();
                console.log(hei)
                if (tim == 0) {
                    return false
                }
                if (hei < 0) {
                    var len = $(".pic-max>img").length;
                    var Olen = len + 1;
                    if (Olen < 10) {
                        Olen = "0" + Olen
                    }
                    if (len < 10) {
                        if (len % 2 == 0) {
                            tim = 0;
                            oimg.src = "img/001/list" + Olen + ".jpg";
                            if (oimg.complete = true) {
                                oimg.onload = function () {
                                    var sc = "<div class='pic_n'><div id='pic_l' class='pic-max'><img src='img/001/list" + Olen + ".jpg'></div><div id='pic_r' class='pic-min'></div></div>";
                                    $(".bottom").before(sc);
                                    tim = 1;
                                }
                            }
                        }
                        else {
                            tim = 0;
                            oimg.src = "img/001/list" + Olen + ".jpg";
                            if (oimg.complete = true) {
                                oimg.onload = function () {
                                    var sc = "<div class='pic_n'><div id='pic_l' class='pic-min'></div><div id='pic_r' class='pic-max'><img src='img/001/list" + Olen + ".jpg'></div></div>";
                                    $(".bottom").before(sc);
                                    tim = 1;
                                    if (Olen == 10) {
                                        $(".bottom").css({
                                                "display": "none"
                                            }
                                        );
                                    }
                                }
                            }
                        }
                    }
                }
            }
        )
    }
);
//动态设置高度
$(document).ready(function () {
        var he = $(window).height() - 100;
        $(".cont_t").css({
                "height": he + "px"
            }
        )
    }
);
$(document).ready(function () {
        $(window).resize(function () {
                var he = $(window).height() - 100;
                $(".cont_t").css({"height": he + "px"});
                $("#cav-img").css({"height": he - 50 + "px"});
            }
        );
    }
);
$(function () {
    $(".my_l_c").click(
        function () {
            $(".my_l_t").fadeOut();
            $(".my_l_b").fadeOut();
            $(".my_l_c").fadeOut();
            $(".my_first_one").animate({width: "320px"}, 2000);
            $(".my_first_one2").animate({width: "230px"}, 2000);
            $(".my_first_one3").animate({width: "160px"}, 2000);
        })
})
				