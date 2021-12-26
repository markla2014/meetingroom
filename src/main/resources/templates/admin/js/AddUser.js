$(document).ready(function () {
    var checkUsername = false;
    var checkPassword = false;
    var checkEmail = false;
    var checkTelephone = false;
    //校验用户名
    $("#username").blur(function () {
        //校验是否为空
        if ($("#username").val().length == 0){
            $("#username").removeClass("is-valid").addClass("is-invalid");
            $("#usernameTip").text("姓名不能为空");
            checkUsername = false;
        } else {
            if (CheckUsername($("#username").val())){
                $("#username").removeClass("is-invalid").addClass("is-valid");
                checkUsername = true;
            } else {
                $("#username").removeClass("is-valid").addClass("is-invalid");
                $("#usernameTip").text("姓名输入格式错误");
                checkUsername = false;
            }
        }
    });

    //校验密码
    $("#password").blur(function () {
        //校验是否为空
        if ($("#password").val().length == 0){
            $("#password").removeClass("is-valid").addClass("is-invalid");
            $("#passwordTip").text("密码不能为空");
            checkPassword = false;
        } else {
            if (CheckPassword($("#password").val())){
                $("#password").removeClass("is-invalid").addClass("is-valid");
                checkPassword = true;
            } else {
                $("#password").removeClass("is-valid").addClass("is-invalid");
                $("#passwordTip").text("密码输入格式错误");
                checkPassword = false;
            }
        }
    });

    //校验邮箱
    $("#email").blur(function () {
        //校验是否为空
        if ($("#email").val().length == 0){
            $("#email").removeClass("is-valid").addClass("is-invalid");
            $("#emailTip").text("邮箱不能为空");
            checkEmail = false;
        } else {
            if (CheckEmail($("#email").val())){
                $.get("/MeetingRoom/UserServlet/isExist",{email: $(this).val()},function (data) {
                    if (data == 1){
                        $("#email").removeClass("is-valid").addClass("is-invalid");
                        $("#emailTip").text("该邮箱已被注册");
                        checkEmail = false;
                    } else{
                        $("#email").removeClass("is-invalid").addClass("is-valid");
                        checkEmail = true;
                    }
                })
            } else {
                $("#email").removeClass("is-valid").addClass("is-invalid");
                $("#emailTip").text("邮箱输入格式错误");
                checkEmail = false;
            }
        }
    });

    //校验手机号码
    $("#telephone").blur(function () {
        //校验是否为空
        if ($("#telephone").val().length == 0){
            $("#telephone").removeClass("is-valid").addClass("is-invalid");
            $("#telephoneTip").text("手机号码不能为空");
            checkTelephone = false;
        } else {
            if (CheckTelephone($("#telephone").val())){
                $.get("/MeetingRoom/UserServlet/isExist",{"phone": $(this).val()},function (data) {
                    if (data == 1){
                        $("#telephone").removeClass("is-valid").addClass("is-invalid");
                        $("#telephoneTip").text("该手机已被注册");
                        checkTelephone = false;
                    } else{
                        $("#telephone").removeClass("is-invalid").addClass("is-valid");
                        checkTelephone = true;
                    }
                })
            } else {
                $("#telephone").removeClass("is-valid").addClass("is-invalid");
                $("#telephoneTip").text("手机号码输入格式错误");
                checkTelephone = false;
            }
        }
    });

    //姓名格式检验
    function CheckUsername (value){
        if (/^[\u4e00-\u9fa5]{1,20}$/.test(value)) return true;
        else return false;
    }

    //密码格式校验
    function CheckPassword (value){
        if (/^[a-zA-Z0-9]{6,16}$/.test(value)) return true;
        return false;
    }

    //邮箱格式校验
    function CheckEmail(value){
        if (/^([A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)){1,50}$/.test(value)) return true;
        return false;
    }

    //电话格式校验
    function CheckTelephone(value){
        if (/^1(3|4|5|7|8)\d{9}$/.test(value)) return true;
        return false;
    }

});