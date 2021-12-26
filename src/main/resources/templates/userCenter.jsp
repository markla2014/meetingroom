<%--
  Created by IntelliJ IDEA.
  User: lu'ye
  Date: 2020/6/16
  Time: 19:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="userHead.jsp" %>
<link rel="stylesheet" href="statics/css/userCenter.css">
<script src="statics/js/userCenter.js"></script>

<div class="container mx-auto" style="margin: 0;padding: 2%;min-height: 90vh;background-color: #fff;">
    <div class="row align-items-start">
        <nav class="bg-light navbar-light m-lg-0 m-5 col-lg-2 col-10 shadow-sm card">
            <ul class="navbar-nav">
                <li>
                    <div class="nav-title" id="main">
                        <a class="nav-link" href="#">
                            <img src="statics/img/user.svg" style="width: 30px">
                            <span>账号操作</span>
                        </a>
                    </div>
                    <div class="nav-content">
                        <a class="nav-link small" id="userDetail" href="#">修改信息</a>
                        <a class="nav-link small" id="changePassword" href="#">修改密码</a>
                        <a class="nav-link small" id="delUser" href="#">账号注销</a>
                    </div>
                </li>
            </ul>
        </nav>

        <div class="ml-4 mr-4 flex-grow-1">
            <div class="card shadow-lg p-0">
                <div class="card-body">
                    <h4 class="card-title">
                    </h4>
                </div>
            </div>
            <div class="card shadow-lg mt-3">
                <div class="card-body" id="content">
                </div>
            </div>
        </div>
    </div>
</div>

<%@ include file="userFoot.jsp"%>
