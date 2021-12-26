$(document).ready(function () {
    //改变公告按钮
    noticeChange();

    $.get("/MeetingRoom/UserServlet/isUser",function (data) {
        if ("true" === data){
            $("#notice").removeClass("disabled");
            $.get("/MeetingRoom/NoticeServlet/getUnreadNum",function (data) {
                if (data > 0){
                    $("#noticeNum").text(data)
                } else {
                    $("#noticeNum").text("");
                }
            });
            $(".logout").click(function () {
                $.get("/MeetingRoom/UserServlet/logout",function () {
                    window.location.href = "index.jsp";
                })
            });
        } else {
            $("#notice").addClass("disabled");
        }
    });

    $("#notice").click(function () {
        $.get("/MeetingRoom/NoticeServlet/upUserTime",function () {
            window.location.href = "statics/notice.html";
        })
    })
});

$(window).resize(function () {
    noticeChange();
});

function noticeChange() {
    //分辨率小于768公告按钮变超链接
    if (window.innerWidth<768){
        $("#notice").removeClass("btn-danger");
        $(".collapsibleNavbar a").addClass("btn").addClass("btn-block").addClass("btn-light");
        $(".gun").text("");
        $("#navbarL").css("margin-left","0");
    } else {
        $(".collapsibleNavbar a").removeClass("btn-block").removeClass("btn").removeClass("btn-light");
        $("#notice").addClass("btn").addClass("btn-danger");
        $(".gun").text("丨");
        $("#navbarL").css("margin-left","20");
    }
}