<%--
  Created by IntelliJ IDEA.
  User: lu'ye
  Date: 2020/6/16
  Time: 14:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="userHead.jsp"%>
<script src="statics/js/userApply.js"></script>

<style>
    .card{
        border-radius: 35px;
    }
    .nav-item{
        margin-right: 5px;
    }
</style>

<div class="container mx-auto" style="margin: 0;padding: 2%;min-height: 90vh;background-color: #fff;">
    <div class="container p-2">
        <nav class="bg-light navbar-light shadow-sm card">
            <ul class="nav p-2 pl-4 pr-4">
                <li class="nav-item pt-2"><h6 class="font-weight-bold">筛选：</h6></li>
                <li class="nav-item"><input id="rNum" class="form-control" type="text" placeholder="编号"></li>
                <li class="nav-item pt-2"><span>时段：</span></li>
                <li class="nav-item">
                    <select id="interval" class="form-control">
                        <option value="4">全部</option>
                        <option value="0">上午</option>
                        <option value="1">下午</option>
                        <option value="2">晚上</option>
                    </select>
                </li>
                <li class="nav-item pt-2"><span>日期：</span></li>
                <li class="nav-item">
                    <input id="data" name="data" class="form-control" autocomplete="off">
                </li>
                <li class="nav-item pt-2"><span>状态：</span></li>
                <li class="nav-item">
                    <select id="state" class="form-control">
                        <option value="0">全部</option>
                        <option value="1">申请中</option>
                        <option value="2">已通过</option>
                        <option value="3">未通过</option>
                        <option value="4">已取消</option>
                    </select>
                </li>
                <li class="nav-item flex-grow-1"><a class="btn btn-info float-right">确认</a></li>
            </ul>
        </nav>
        <hr style="border-color: black">
        <table class="table table-hover">
            <thead>
            <tr class="row table-secondary">
                <th class="col-2">会议室编号</th>
                <th class="col-2">会议室名称</th>
                <th class="col-2">会议室地点</th>
                <th class="col-1">申请时段</th>
                <th class="col-2">申请日期</th>
                <th class="col-1 text-center">状态</th>
                <th class="col-2 text-center">操作</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</div>
<%@ include file="userFoot.jsp"%>