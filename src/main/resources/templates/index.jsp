<%--
  Created by IntelliJ IDEA.
  User: lu'ye
  Date: 2020/6/16
  Time: 12:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ include file="userHead.jsp" %>
<link rel="stylesheet" href="statics/css/index.css">
<script src="statics/js/index.js"></script>


<div class="container mx-auto" style="margin: 0;padding: 2%;min-height: 90vh;background-color: #fff;">
    <nav class="navbar bg-light justify-content-around" id="bodyNav">
        <div class="form-row col-12">
            <div class="form-group col-sm-5 col-lg-3 col-md-5">
                <label for="data">选择日期:</label>
                <input id="data" name="data" class="form-control" autocomplete="off">
            </div>
            <div class="dropdown form-group col-sm-3 col-lg-2 col-md-3">
                <label for="interval">选择时段:</label>
                <select id="interval" class="form-control">
                    <option value="0">上午</option>
                    <option value="1">下午</option>
                    <option value="2">晚上</option>
                </select>
            </div>
            <div class="dropdown form-group col-sm-4 col-lg-2 col-md-4">
                <label for="sort">排序:</label>
                <select id="sort" class="form-control">
                    <option value="0">编号&emsp;升序</option>
                    <option value="1">编号&emsp;降序</option>
                    <option value="2">状态&emsp;升序</option>
                    <option value="3">状态&emsp;降序</option>
                </select>
            </div>
            <div class="form-group d-none d-md-block flex-grow-1">
                <label>&emsp;</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="searchIn" placeholder="输入会议室编号、名称或地点进行搜索">
                    <div class="input-group-append">
                        <button class="btn btn-info" id="search">搜索</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <hr class="bg-secondary">
    <div class="container-fluid row align-items-stretch" id="roomList"></div>
</div>

<%@ include file="userFoot.jsp"%>
