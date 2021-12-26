<%--
  Created by IntelliJ IDEA.
  User: lu'ye
  Date: 2020/6/24
  Time: 21:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="userHead.jsp" %>

<style>
    .input-group{
        margin-top: 5vh;
    }
</style>
<script>
    $(document).ready(function () {
        $(".btn").click(function () {
            $(this).parent().parent().children(".form-control").attr("readonly",false).focus();
        });
        $(".form-control").blur(function () {
            $(this).attr("readonly",true);
        });
        $.get("/MeetingRoom/UserServlet/getUser",function (data) {
            var user = eval("("+data+")");
            var date = new Date(user.regTime);
            var d = ""+date.getFullYear()+"年-"+(date.getMonth()+1)+"月-"+date.getDate()+"日";
            $("#username").val(user.username);
            $("#phone").val(user.phone);
            $("#email").val(user.email);
            $("#regTime").val(d);
        })
    })
</script>

<div class="container mx-auto" style="margin: 0;padding: 2%;min-height: 90vh;background-color: #fff;">
    <form class="col-8 mx-auto" method="post" action="/MeetingRoom/UserServlet/alterUser">
        <div class="form-inline input-group">
            <label for="username" class="font-weight-bold">姓名：&emsp;&emsp;&emsp;</label>
            <input class="form-control" id="username" name="username" autocomplete="off" readonly style="border-bottom-left-radius: 25rem;border-top-left-radius: 25rem">
            <div class="input-group-append">
                <a class="input-group-text btn" style="border-bottom-right-radius: 25rem;border-top-right-radius: 25rem" href="#">
                    <img src="statics/img/edit.svg " style="height: 24px;">
                </a>
            </div>
        </div>
        <div class="form-inline input-group">
            <label for="phone" class="font-weight-bold">手机号码：&emsp;</label>
            <input class="form-control" id="phone" name="phone" autocomplete="off" readonly style="border-bottom-left-radius: 25rem;border-top-left-radius: 25rem">
            <div class="input-group-append">
                <a class="input-group-text btn" style="border-bottom-right-radius: 25rem;border-top-right-radius: 25rem" href="#">
                    <img src="statics/img/edit.svg " style="height: 24px;">
                </a>
            </div>
        </div>
        <div class="form-inline input-group">
            <label for="email" class="font-weight-bold">电子邮箱：&emsp;</label>
            <input class="form-control" id="email" name="email" autocomplete="off" readonly style="border-bottom-left-radius: 25rem;border-top-left-radius: 25rem">
            <div class="input-group-append">
                <a class="input-group-text btn" style="border-bottom-right-radius: 25rem;border-top-right-radius: 25rem" href="#">
                    <img src="statics/img/edit.svg " style="height: 24px;">
                </a>
            </div>
        </div>
        <div class="form-inline input-group">
            <label class="font-weight-bold">注册时间：&emsp;</label>
            <input class="form-control" id="regTime"readonly style="border-radius: 25rem">
        </div>
        <div class="col-8 mx-auto" style="margin-top: 25vh">
            <button type="submit" class="btn btn-primary btn-block">提交修改</button>
        </div>
    </form>
</div>

<%@ include file="userFoot.jsp"%>
