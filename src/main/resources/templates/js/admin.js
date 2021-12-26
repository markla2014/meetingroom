$(document).ready(function () {
    $(".nav-content").hide();

    //导航副标题点击事件
    $(".nav-title").click(function () {
        // $(".index").css("padding-left","5px").css("color","#8c8c8c").css("font-weight","normal").removeClass("index");
        // $(this).css("padding-left","40px").css("color","black").css("font-weight","bold");
        // $(this).addClass("index");
        var elc = $(this).parent().children(".nav-content");
        if (elc.css("display") != "none"){
            elc.slideUp();
            $(this).css("padding-left","5px").css("color","#8c8c8c").css("font-weight","normal");
        } else {
            elc.slideDown();
            $(this).parent().siblings().children(".nav-content").slideUp();
            $(this).parent().siblings().children(".nav-title").css("padding-left","5px").css("color","#8c8c8c").css("font-weight","normal");
            $(this).css("padding-left","20px").css("color","black").css("font-weight","bold");
        }
    });

    //导航项事件
    $(".nav-link").hover(function () {
        $(this).css("color","black");
    },function () {
        $(this).css("color","#8c8c8c");
    }).click(function () {
        var address = $(this).attr("data-src");
        $("iframe").attr("src",address);
        if ($(window).width() <= 992){
            $(".nav-content").hide();
            $("span").hide(350);
        }
    });

    $(window).resize(function () {
        navChange();
    });

    //logo 点击事件
    $("header").click(function () {
        if ($(window).width() <= 992){
            if ($("span").css("display") != "none"){
                $("span").hide(350);
            } else {
                $("span").show(350);
            }
        } else {
            $("iframe").attr("src","statics/admin/ItemApplyList.html");
        }
    });

    window.onload = navChange();
    //不同分辨率下导航栏状态
    function navChange() {
        if ($(window).width() <= 992){
            $("header img").css("padding-left","7px");
            $(".nav-title").css("padding-left","5px").css("color","#8c8c8c").css("font-weight","normal");
            $(".nav-content").hide();
            $("span").hide();
            $("header").addClass("mt-2");
        } else {
            $("span").show();
            //unbind 取消事件绑定
            $("header").removeClass("mt-2");
        }
    }

    $.get("/MeetingRoom/RoomServlet/RoomApplyList",function (data) {
        $("#applyNum").text(eval(data).length)
    })
});