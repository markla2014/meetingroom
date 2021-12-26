var Rlist;

$(document).ready(function () {


    $.get("/MeetingRoom/RoomServlet/RoomApplyList",function (data) {
        Rlist = eval(data);
        createList(Rlist);
    });

    function createList(list) {
        for (let i = 0; i < list.length; i++) {
            $("tbody").append("<tr class=\"row\" id=\""+list[i].id+"\"></tr>");
            findUser(list[i].userId,list[i].roomId,list[i].id);
            switch (list[i].tInterval) {
                case 0:list[i].tInterval = "上午";break;
                case 1:list[i].tInterval = "下午";break;
                case 2:list[i].tInterval = "晚上";break;
            }
            $("#"+list[i].id+"").append(
                "<td class=\"col-2\"><a class=\"tdText\">日期:"+list[i].data+"<br>时段:"+list[i].tInterval+"</a></td>\n" +
                "<td class=\"col-3\"><a class=\"tdText\">"+list[i].reason+"</a></td>\n" +
                "<td class=\"col-2 text-center\" data-id='"+list[i].id+"'><a class=\"btn btn-success text-white\">同意申请</a> <a class=\"btn btn-danger text-white mt-1\">拒绝申请</a></td>\n")
        }

        $(".btn-success").click(function () {
            $.get("/MeetingRoom/ItemServlet/applyChange",{Iid:$(this).parent().attr("data-id"),state:2},function () {
                window.location.reload();
            })
        });
        $(".btn-danger").click(function () {
            $.get("/MeetingRoom/ItemServlet/applyChange",{Iid:$(this).parent().attr("data-id"),state:3},function () {
                window.location.reload();
            })
        });
    }

    function findRoom(id,Iid) {
        $.ajaxSettings.async = false;
        $.get("/MeetingRoom/RoomServlet/getRoomById",{rid:id},function (data) {
            var room= eval("("+data+")");
            Room = room;
            $("#"+Iid+"").append(
                "<td class=\"col-2\"><a class=\"tdText\">编号:"+room.num+"<br>名称:"+room.roomName+"</a></td>\n")
        });
    }

    function findUser(id,rid,Iid) {
        $.ajaxSettings.async = false;
        $.get("/MeetingRoom/UserServlet/findUser",{uid:id},function (data) {
            var user = eval("("+data+")");
            User = user;
            $("#"+Iid+"").append(
                "<td class=\"col-1\"><a class=\"tdText\">"+user.username+"</a></td>\n" +
                "<td class=\"col-2\"><a class=\"tdText\">手机:"+user.phone+"<br>邮箱:"+user.email+"</a></td>\n")
            findRoom(rid,Iid);
        });
    }


});