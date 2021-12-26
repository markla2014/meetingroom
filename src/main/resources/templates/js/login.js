$(document).ready(function () {

    //表单提交
    $("#submit").click(function () {
        //设置ajax同步提交
        $.ajaxSettings.async = false;
       if (checkIsUser()){
           if ($("#username").val() === "" || $("#password").val() === "" || $("#checkCodeU").val() === ""){
               $("#formTip_title").text("登录失败");
               $("#formTip_body").html("请检查是否有<mark class=\"font-weight-bold\">输入项为空</mark>！");
               $("#formTip").modal();
           } else {
               if (!checkImg("#checkCodeU")){
                   $("#formTip_title").text("登录失败");
                   $("#formTip_body").html("<mark class=\"font-weight-bold\">验证码错误</mark>！");
                   $("#formTip").modal();
               } else {
                   if (!checkUser()){
                       $("#formTip_title").text("登录失败");
                       $("#formTip_body").html("<mark class=\"font-weight-bold\">用户名</mark>或<mark class=\"font-weight-bold\">密码</mark>错误！");
                       $("#formTip").modal();
                   } else {
                       window.location.href = "/MeetingRoom/index.jsp";
                   }
               }
           }
       } else {
           if ($("#adminname").val() === "" || $("#adminpassword").val() === "" || $("#checkCodeA").val() === ""){
               $("#formTip_title").text("登录失败");
               $("#formTip_body").html("请检查是否有<mark class=\"font-weight-bold\">输入项为空</mark>！");
               $("#formTip").modal();
           } else {
               if (!checkImg("#checkCodeA")){
                   $("#formTip_title").text("登录失败");
                   $("#formTip_body").html("<mark class=\"font-weight-bold\">验证码错误</mark>！");
                   $("#formTip").modal();
               } else {
                   if (!checkAdmin()){
                       $("#formTip_title").text("登录失败");
                       $("#formTip_body").html("<mark class=\"font-weight-bold\">工号</mark>或<mark class=\"font-weight-bold\">密码</mark>错误！");
                       $("#formTip").modal();
                   } else {
                       window.location.href = "/MeetingRoom/admin.jsp";
                   }
               }
           }
       }
    });

    function checkAdmin() {
        var flag = false;
        $.get("/MeetingRoom/UserServlet/login",{username:$("#adminname").val(),password:$("#adminpassword").val(),state:1},function (data) {
            if (data == 1)
            flag = true;
        });
        return flag;
    }

    function checkUser() {
        var flag = false;
        /*$.ajax({
            url: "/MeetingRoom/UserServlet/login",
            data: {username:$("#username"),password:$("#password"),state:0},
            dataType: "GET",
            async: false,
            success: flag = true
        });*/
        $.get("/MeetingRoom/UserServlet/login",{username:$("#username").val(),password:$("#password").val(),state:0},function (data) {
            if (data == 1)
            flag = true;
        });
        return flag;
    }

    function checkImg(imgId) {
        var flag = false;
       /* $.ajax({
            url: "/MeetingRoom/UtilServlet/checkCode",
            data: {"checkCode": $(imgId).val()},
            dataType: "get",
            async: false,
            success: function (data) {
                alert(data);
                if (data === "true") flag = true;
            }
        });*/
        $.get("/MeetingRoom/UtilServlet/checkCode",{"checkCode": $(imgId).val()},function (data) {
            if ("true" == data)
            flag = true;
        });
        return flag;
    }

    function checkIsUser(){
        if ("用户登录" === $(".nav-link.active").text()){
            return true;
        } else {
            return false;
        }
    }

    //刷新验证码
    $(".codeImg").click(function () {
        var data = new Date().getTime();
        this.src = "/MeetingRoom/UtilServlet/checkImg?"+data;
    });
    $(".nav-link").click(function () {
        var data = new Date().getTime();
        $(".form-control").val("");
        if (checkIsUser()){
            $("#codeImgA").attr('src','/MeetingRoom/UtilServlet/checkImg?'+data)
        } else {
            $("#codeImgU").attr('src','/MeetingRoom/UtilServlet/checkImg?'+data)
        }
    });

    //邮箱格式校验
    function CheckEmail(value){
        if (/^([A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)){1,50}$/.test(value.val())) return true;
        return false;
    }

    //电话格式校验
    function CheckTelephone(value){
        if (/^1(3|4|5|7|8)\d{9}$/.test(value.val())) return true;
        return false;
    }
});