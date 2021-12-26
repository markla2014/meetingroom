$(document).ready(function () {
    //初始化
    $(".nav-content").hide();
    $("#main").css("color","black").css("font-weight","bold");

    $(".nav-title").click(function () {
        var elc = $(this).parent().children(".nav-content");
        /*elc.slideDown();
        $(this).parent().siblings().children(".nav-content").slideUp();
        $(this).parent().siblings().children(".nav-title").css("color","#8c8c8c").css("font-weight","normal");
        $(this).css("color","black").css("font-weight","bold");*/
        if (elc.css("display") != "none"){
            elc.slideUp();
            $(this).css("color","#8c8c8c").css("font-weight","normal");
        } else {
            elc.slideDown();
            $(this).parent().siblings().children(".nav-content").slideUp();
            $(this).parent().siblings().children(".nav-title").css("color","#8c8c8c").css("font-weight","normal");
            $(this).css("color","black").css("font-weight","bold");
        }
    });

    userDetail();

    $("#userDetail").click(function () {
        userDetail();
    });
    $("#changePassword").click(function () {
        changePassword();
    });
    $("#delUser").click(function () {
        delUser();
    });


});

function delUser() {
    $(".card-title").text("账号注销");
    $("#content").text("");
    $("#content").append(" <div class=\"form-inline input-group\">\n" +
        "                        <label class=\"font-weight-bold\">请输入密码：</label>\n" +
        "                        <input type=\"password\" class=\"form-control\" id=\"password\" autocomplete=\"off\" style=\"border-radius: 25rem\">\n" +
        "                    </div>\n" +
        "                    <input type=\"submit\" id='delPassword' class=\"btn btn-block btn-danger\" value=\"确认注销\" style=\"margin-top: 20vh\">")
    $("#delPassword").click(function () {
        $.get("/MeetingRoom/UserServlet/delUser",{password:$(this).val()},function (data) {
            if ("true" === data){
                alert("注销成功！！！");
            }else {
                alert("注销失败，请检查密码是否正确")
            }
        })
    })

}

function changePassword() {
    $(".card-title").text("修改密码");
    $("#content").text("");
    $("#content").append("<div class=\"form-inline input-group\">\n" +
        "                        <label class=\"font-weight-bold\">原密码：</label>\n" +
        "                        <input type='password' class=\"form-control\" id=\"oldPassword\" autocomplete=\"off\" style=\"border-radius: 25rem\">\n" +
        "                    </div>\n" +
        "                    <div class=\"form-inline input-group\">\n" +
        "                        <label class=\"font-weight-bold\">新密码：</label>\n" +
        "                        <input class=\"form-control\" type='password' id=\"newPassword\" autocomplete=\"off\" style=\"border-radius: 25rem;margin-top: 5vh\">\n" +
        "                    </div>\n" +
        "                    <input type=\"submit\" id='changPassword' class=\"btn btn-block btn-primary\" value=\"确认修改\" style=\"margin-top: 20vh\">")
    $("#changePassword").click(function () {
        $.get("/MeetingRoom/UserServlet/alterPassword",{oldPassword:$("#oldPassword").val(),newPassword:$("#newPassword").val()},function (data) {
            if ("true" === data){
                alert("修改成功！！！");
            }else {
                alert("修改失败，请检查原密码是否正确")
            }
        })
    })
}

function userDetail() {
    $(".card-title").text("");
    $("#content").text("");
    $.get("/MeetingRoom/UserServlet/getUser",function (data) {
        var user = eval("("+data+")");
        var date = new Date(user.regTime);
        var d = ""+date.getFullYear()+"年-"+(date.getMonth()+1)+"月-"+date.getDate()+"日";
        $(".card-title").text("个人信息");
        $("#content").append("<div class=\"form-inline input-group\">\n" +
            "                        <label class=\"font-weight-bold\">用户ID：&emsp;&emsp;&emsp;</label>\n" +
            "                        <input class=\"form-control\" id=\"userId\" autocomplete=\"off\" readonly style=\"border-radius: 25rem\" value="+user.id+">\n" +
            "                    </div>\n" +
            "                    <div class=\"form-inline input-group\">\n" +
            "                        <label class=\"font-weight-bold\">姓名： &emsp;&emsp;&emsp;&emsp;</label>\n" +
            "                        <input class=\"form-control\" id=\"username\" name=\"username\" autocomplete=\"off\" readonly style=\"border-bottom-left-radius: 25rem;border-top-left-radius: 25rem\" value="+user.username+">\n" +
            "                        <div class=\"input-group-append\">\n" +
            "                            <a class=\"input-group-text btn edit\" style=\"border-bottom-right-radius: 25rem;border-top-right-radius: 25rem\" href=\"#\">\n" +
            "                                <img src=\"statics/img/edit.svg \" style=\"height: 24px;\">\n" +
            "                            </a>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"form-inline input-group\">\n" +
            "                        <label class=\"font-weight-bold\">电子邮箱： &emsp;&emsp;</label>\n" +
            "                        <input class=\"form-control\" id=\"email\" name=\"email\" autocomplete=\"off\" readonly style=\"border-bottom-left-radius: 25rem;border-top-left-radius: 25rem\" value="+user.email+">\n" +
            "                        <div class=\"input-group-append\">\n" +
            "                            <a class=\"input-group-text btn edit\" style=\"border-bottom-right-radius: 25rem;border-top-right-radius: 25rem\" href=\"#\">\n" +
            "                                <img src=\"statics/img/edit.svg \" style=\"height: 24px;\">\n" +
            "                            </a>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"form-inline input-group\">\n" +
            "                        <label class=\"font-weight-bold\">手机号码： &emsp;&emsp;</label>\n" +
            "                        <input class=\"form-control\" id=\"phone\" name=\"phone\" autocomplete=\"off\" readonly style=\"border-bottom-left-radius: 25rem;border-top-left-radius: 25rem\" value="+user.phone+">\n" +
            "                        <div class=\"input-group-append\">\n" +
            "                            <a class=\"input-group-text btn edit\" style=\"border-bottom-right-radius: 25rem;border-top-right-radius: 25rem\" href=\"#\">\n" +
            "                                <img src=\"statics/img/edit.svg \" style=\"height: 24px;\">\n" +
            "                            </a>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"form-inline input-group\">\n" +
            "                        <label class=\"font-weight-bold\">注册时间： &emsp;&emsp;</label>\n" +
            "                        <input class=\"form-control\" id=\"regTime\" autocomplete=\"off\" readonly style=\"border-radius: 25rem\" value="+d+">\n" +
            "                    </div>" +
            "                    <input type='submit' id='changD' class='btn btn-primary btn-block' value='确认' style='margin-top: 10vh'>");
        $(".edit").click(function () {
            $(this).parent().parent().children(".form-control").attr("readonly",false).focus();
        });
        $(".form-control").blur(function () {
            $(this).attr("readonly",true);
        });

        $("#changD").click(function () {
            $.get("/MeetingRoom/UserServlet/alterUser",{username:$("#username").val(),phone:$("#phone").val(),email:$("#email").val()},function (data) {
                if ("true" === data){
                    alert("修改成功！！！");
                }else {
                    alert("修改失败！！！");
                }
            })
        })
    });

}