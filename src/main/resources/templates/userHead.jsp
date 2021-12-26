<%--
  Created by IntelliJ IDEA.
  User: lu'ye
  Date: 2020/5/17
  Time: 16:06
  To change this template use File | Setti
  ngs | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="statics/css/bootstrap.min.css">
    <link rel="stylesheet" href="statics/css/background.css">
    <link rel="stylesheet" href="statics/css/userHead.css">
    <link rel="stylesheet" href="statics/css/gijgo.css">

    <script src="statics/js/jquery-3.4.1.js"></script>
    <script src="statics/js/bootstrap.min.js"></script>
    <script src="statics/js/background.js"></script>
    <script src="statics/js/userHead.js"></script>
    <script src="statics/js/gijgo.js"></script>
    <script src="statics/js/messages/messages.zh-cn.min.js"></script>

    <title>会议室申请系统</title>
  </head>
  <body>
<%--  背景--%>
  <canvas id="canvas"></canvas>

<%--  导航栏--%>
  <nav class="navbar navbar-expand-md bg-light navbar-light" id="topNav">
    <a href="index.jsp" class="navbar-brand"><img src="statics/img/logo.png" id="logo"></a>

      <ul class="navbar-nav m-lg-auto">
          <li class="nav-item">
              <a class="navbar-brand" href="index.jsp"><h2>会议室申请系统</h2></a>
          </li>
      </ul>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div class="collapse navbar-collapse collapsibleNavbar">
          <ul class="navbar-nav" id="navbarL">
              <li class="nav-item">
                  <a class="btn btn-danger" href="#" id="notice">公告 <span class="badge badge-light" id="noticeNum"></span></a>
              </li>
          </ul>
      </div>

      <div class="collapse navbar-collapse flex-row-reverse collapsibleNavbar">
          <ul class="navbar-nav">
              <c:if test="${empty sessionScope.user}">
                  <li class="nav-item">
                      <a href="statics/register.html">注册</a>
                  </li>
                  <li>
                      <span class="gun">丨</span>
                  </li>
                  <li class="nav-item">
                      <a href="statics/login.html">登录</a>
                  </li>
              </c:if>
              <c:if test="${!empty sessionScope.user}">
                  <li class="dropdown d-none d-md-block">
                    <a class="dropdown-toggle font-weight-bold" data-toggle="dropdown" href="#" style="text-decoration: none" id="userId" data-userId=${sessionScope.user.id}>${sessionScope.user.username}&emsp;</a>
                      <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="userApply.jsp">我的会议室申请</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="userCenter.jsp">安全中心</a>
                          <a class="dropdown-item" href="userEditProfile.jsp">修改资料</a>
                          <a class="dropdown-item logout" >退出登录</a>
                      </div>
                  </li>
                  <li class="nav-item d-md-none"><a href="userApply.jsp">我的会议室申请</a></li>
                  <li class="nav-item d-md-none"><a href="userCenter.jsp">安全中心</a></li>
                  <li class="nav-item d-md-none"><a href="userEditProfile.jsp">修改资料</a></li>
                  <li class="nav-item d-md-none"><a class="logout">退出登录</a></li>
              </c:if>
             <%-- <br>
              <li class="nav-item">
                  <div class="d-md-none">
                      <div class="input-group">
                          <input type="text" class="form-control" placeholder="输入会议室编号、名称或地点进行搜索">
                          <div class="input-group-append">
                              <button class="btn btn-info" type="submit">搜索</button>
                          </div>
                      </div>
                  </div>
              </li>--%>
          </ul>
      </div>
  </nav>
