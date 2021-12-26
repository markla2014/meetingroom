<%--
  Created by IntelliJ IDEA.
  User: lu'ye
  Date: 2020/6/23
  Time: 0:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="statics/css/bootstrap.min.css">
    <link rel="stylesheet" href="statics/css/background.css">
    <link rel="stylesheet" href="statics/css/gijgo.css">

    <script src="statics/js/jquery-3.4.1.js"></script>
    <script src="statics/js/bootstrap.min.js"></script>
    <script src="statics/js/gijgo.js"></script>
    <script src="statics/js/messages/messages.zh-cn.min.js"></script>
    <script src="statics/js/background.js"></script>
    <script src="statics/js/applyingRoom.js"></script>

    <title>申请会议室</title>
</head>
<body style="min-height: 100vh">
<canvas id="canvas"></canvas>
<div class="container p-2" style="min-height: 100vh;background-color:#fff;">
    <a href="/MeetingRoom/index.jsp" style="color: black">
        <img class="mb-1" src="statics/img/return.svg" style="width: 2.5vh;">
        <span>返回首页</span>
    </a>
    <div class="container p-lg-4">
        <form class="d-flex flex-column align-items-center" method="post" action="/MeetingRoom/ItemServlet/addItem">
            <div class="input-group col-lg-6 m-3">
                <div class="input-group-prepend">
                    <label for="roomNum" class="input-group-text">会议室编号：</label>
                </div>
                <input type="text" class="form-control" id="roomNum" name="roomNum">
            </div>
            <div class="input-group col-lg-6 m-3">
                <div class="input-group-prepend">
                    <label for="roomNum" class="input-group-text">会议室名称：</label>
                </div>
                <input style="box-shadow: none" type="text" class="form-control" id="roomName" readonly>
            </div>
            <div class="input-group col-lg-6 m-3">
                <div class="input-group-prepend">
                    <label for="roomNum" class="input-group-text">会议室地址：</label>
                </div>
                <input style="box-shadow: none" type="text" class="form-control" id="roomPlace" readonly>
            </div>
            <div class="input-group col-lg-6 m-3">
                <div class="input-group-prepend">
                    <label for="data" class="input-group-text">申请日期：</label>
                </div>
                <div class="flex-grow-1">
                    <input type="text" class="form-control" id="data" autocomplete="off" name="data" style="border-bottom-left-radius: 0px;border-top-left-radius: 0px">
                </div>
            </div>
            <div class="input-group col-lg-6 m-3">
                <div class="input-group-prepend">
                    <label for="interval" class="input-group-text">申请时段：</label>
                </div>
                <select id="interval" class="form-control" name="interval">
                    <option value="0">上午</option>
                    <option value="1">下午</option>
                    <option value="2">晚上</option>
                </select>
            </div>
            <div class="form-group col-lg-6 m-3">
                <label>申请理由：</label>
                <textarea class="form-control" id="reason" rows="5" name="reason"></textarea>
            </div>
            <br>
            <input type="submit" class="btn btn-primary col-4" id="submit" value="确认">
        </form>
    </div>
</div>

<div class="modal fade" id="formTip">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- 头部 -->
            <div class="modal-header">
                <h4 class="modal-title" id="formTip_title">申请中会议室</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- 主体 -->
            <div class="modal-body" id="formTip_body">
                当前时段会议室已被申请，是否继续申请
            </div>

            <!-- 底部 -->
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">确定</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" id="return">取消</button>
            </div>

        </div>
    </div>
</div>
</body>
</html>
