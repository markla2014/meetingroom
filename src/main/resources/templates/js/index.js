var roomList;  //会议室列表

$(document).ready(function () {
    //时段下拉框
    $("#interval").dropdown({
        uiLibrary: 'bootstrap4',
        change: function () {
            changeState()
        }
    });

    //搜索
    $("#search").click(function () {
       if ($("#searchIn").val().length == 0){
           crateRoomList(roomList);
       } else {
           $.get("/MeetingRoom/RoomServlet/fuzzySearch",{value:$("#searchIn").val()},function (data) {
               var rl = eval(data);
               crateRoomList(rl);
           })
       }
    });

    //日期选择器
    $("#data").datepicker({
        locale:'zh-cn',
        format:'yyyy-mm-dd',
        uiLibrary: 'bootstrap4',
        value: getTime(),
        minDate:minDate(),
        maxDate:maxDate(),
        showOtherMonths: false,
        close: function (){
            changeState();
        }
    });
    function minDate() {
        var data = new Date();
        data.setDate(data.getDate()+1);
        return new Date(data.getFullYear(),data.getMonth(),data.getDate());
    }
    function maxDate() {
        var data = new Date();
        data.setMonth(data.getMonth()+1);
        return new Date(data.getFullYear(),data.getMonth(),data.getDate())
    }

    //动态room列表
    $.get("/MeetingRoom/RoomServlet/RoomList",function (data) {
        if (data != null){
            roomList = eval(data);
            crateRoomList(roomList);
        }

        //排序下拉框
        $("#sort").dropdown({
            uiLibrary: 'bootstrap4',
            change: function (){
                sortChange($(this).val())
            }
        });

    });

});

//初始时间
function getTime(){
    var data = new Date();
    var m = data.getMonth()+1;
    var d = data.getDate()+1;
    m = (m.toString().length == 1) ? ("0" + m) : m;
    d = (d.toString().length == 1) ? ("0" + d) : d;
    return data.getFullYear()+"-"+m+"-"+d;
}

//排序
function sortChange(type) {
    switch (type) {
        case "0":
            roomList.sort(function (a,b) {
                if (a.num > b.num) return 1;
                else if (a.num < b.num) return -1;
                else return 0;
            });
            crateRoomList(roomList);
            break;
        case "1":
            roomList.sort(function (a,b) {
                if (b.num > a.num) return 1;
                else if (b.num < a.num) return -1;
                else return 0;
            });
            crateRoomList(roomList);
            break;
        case "2":
            roomList.sort(function (a,b) {
                return a.state - b.state
            });
            crateRoomList(roomList);
            break;
        case "3":
            roomList.sort(function (a,b) {
                return b.state - a.state
            });
            crateRoomList(roomList);
            break;
    }
}

//改变会议室状态
function changeState() {
    $(".applyBtn").removeClass("btn-danger").removeClass("btn-warning").addClass("btn-success").text("空闲").attr("data-state","0");
    changeBtn();
    $.get("/MeetingRoom/RoomServlet/getRoomState",function (data) {
        var rl = eval(data);
        for (let i = 0; i < rl.length; i++) {
            if ($("#data").val() == rl[i].data && $("#interval").val() == rl[i].interval){
                var temp = $("#"+rl[i].roomId+"");
                temp.attr("data-state",rl[i].state);
                if (rl[i].state == 1){
                    temp.removeClass("btn-success").addClass("btn-warning").text("申请中");
                } else if (rl[i].state == 2){
                    temp.removeClass("btn-success").addClass("btn-danger").text("已预定").addClass("disabled");
                }
            }
        }
    })
}

//生成会议室列表
function crateRoomList(list) {
    $("#roomList").text("");   //清空列表
    for (let i = 0; i < list.length; i++) {
        if (list[i].imgUrl == null || list[i].imgUrl == ""){
            list[i].imgUrl = "statics/img/noImg.png";
        }
        $("#roomList").append("<div class=\"col-lg-3 col-md-4 col-6 p-0\">"+
            "<div class=\"card shadow-lg\">" +
            "<img class=\"card-img-top room-img\" src=\""+list[i].imgUrl+"\" />" +
            "<div class=\"card-body\">" +
            "<h5 class=\"card-title\">"+ list[i].roomName + "</h5>" +
            "<p class=\"card-text small\">编号:" + list[i].num + "</p>" +
            "<p class=\"card-text small font-weight-light\" style='white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100px;'>" + list[i].introduction +"</p>" +
            "<a class=\"btn btn-info detail\">详情</a>" + "<a class=\"btn applyBtn btn-success float-right\" data-state=\"0\" id="+list[i].id+">空闲</a>" +
            "</div></div></div>"
        );
    }
    changeState();

    //申请按钮
    $(".applyBtn").click(function () {
        $.post("/MeetingRoom/ItemServlet/applying",{data:$("#data").val(),interval:$("#interval").val(),uid:$("#userId").attr("data-userId"),rid:$(this).attr("id"),state:$(this).attr("data-state")},function () {
            window.location.href = "applyingRoom.jsp"
        })
    });

    //详情按钮
    $(".detail").click(function () {
        var ch = $(this).parent().children(".applyBtn");
        $.get("/MeetingRoom/UserServlet/isUser",function (data) {
            if ("true" === data){
                $.post("/MeetingRoom/ItemServlet/applying",{data:$("#data").val(),interval:$("#interval").val(),uid:$("#userId").attr("data-userId"),rid:ch.attr("id"),state:ch.attr("data-state")},function () {
                    $.post("/MeetingRoom/RoomServlet/saveRid",{rid:ch.attr("id")},function () {
                        window.location.href = "statics/roomDetail.html";
                    })
                });
            } else {
                $.post("/MeetingRoom/RoomServlet/saveRid",{rid:ch.attr("id")},function () {
                    window.location.href = "statics/roomDetail.html";
                })
            }
        })
    });
}

//检测浏览的是游客还是用户
function changeBtn() {
    $.get("/MeetingRoom/UserServlet/isUser",function (data) {
        if ("true" === data){
            $(".applyBtn").removeClass("disabled")
        } else {
            $(".applyBtn").addClass("disabled")
        }
    });
}