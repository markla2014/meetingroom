<%--
  Created by IntelliJ IDEA.
  User: lu'ye
  Date: 2020/6/2
  Time: 18:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="statics/css/bootstrap.min.css">
    <link rel="stylesheet" href="statics/css/gijgo.css">
    <link rel="stylesheet" href="statics/css/admin.css">

    <script src="statics/js/jquery-3.4.1.js"></script>
    <script src="statics/js/bootstrap.min.js"></script>
    <script src="statics/js/gijgo.js"></script>
    <script src="statics/js/messages/messages.zh-cn.min.js"></script>
    <script src="statics/js/admin.js"></script>

    <title>会议室管理系统后台</title>
</head>
<body>

    <div class="container-fluid">
        <div class="row align-items-stretch">
            <nav class="flex-column justify-content-start bg-light navbar-light shadow-lg" id="nav">
                <div class="header">
                    <a href="#" class="navbar-toggler" data-toggle="collapse" data-target=".collapseItem">
                        <img src="statics/img/logo.png">
                    </a>
                    <a class="navbar-brand mx-auto" href="#">
                        <span>会议室管理系统后台</span>
                    </a>
                </div>
                <div class="line"></div>
                <ul>
                    <li>
                        <div class="nav-title">
                            <a class="nav-link" href="#">
                                <img src="statics/img/roomAd.svg">
                                <span>会议室管理</span>
                            </a>
                        </div>
                        <div class="nav-content">
                            <a class="nav-link small" href="#" data-src="statics/admin/ItemApplyList.html">会议室申请处理 <span class="badge badge-danger" id="applyNum"></span></a>
                            <a class="nav-link small" href="#" data-src="statics/admin/AllRoom.html">查看所有会议室</a>
                            <a class="nav-link small" href="#" data-src="statics/admin/AddRoom.html">添加会议室</a>
                        </div>
                    </li>
                    <li>
                        <div class="nav-title">
                            <a class="nav-link" href="#">
                                <img src="statics/img/userAd.svg">
                                <span>用户管理</span>
                            </a>
                        </div>
                        <div class="nav-content">
                            <a class="nav-link small" href="#" data-src="statics/admin/UserList.html">查看所有用户</a>
                            <a class="nav-link small" href="#" data-src="statics/admin/AddUser.html">添加用户</a>
                        </div>
                    </li>
                    <li>
                        <div class="nav-title">
                            <a class="nav-link" href="#">
                                <img src="statics/img/noticeAd.svg">
                                <span>公告管理</span>
                            </a>
                        </div>
                        <div class="nav-content">
                            <a class="nav-link small" href="#" data-src="statics/admin/NoticeList.html">查看历史公告</a>
                            <a class="nav-link small" href="#" data-src="statics/admin/AddNotice.html">新建公告</a>
                        </div>
                    </li>
                </ul>
                <div class="line"></div>
            </nav>

            <div class="flex-grow-1" id="mainstay">
                <iframe frameborder="0" scrolling="auto" src="statics/admin/ItemApplyList.html"></iframe>
            </div>
        </div>
    </div>

</body>
</html>
