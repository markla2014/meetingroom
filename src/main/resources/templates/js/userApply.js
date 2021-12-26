var roomStateList; //会议室列表

$(document).ready(function () {
    getApplyList();

    //日期选择器
    $("#data").datepicker({
        locale:'zh-cn',
        format:'yyyy-mm-dd',
        uiLibrary: 'bootstrap4',
        value: "全部",
        minDate:minDate(),
        maxDate:maxDate(),
        showOtherMonths: false
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

    $(".tBtn").click(function () {
        $.get("/MeetingRoom/ItemServlet/userDel",{itemId:$(this).attr("id")},function () {
            getApplyList();
        })
    });

    $(".btn-info").click(function () {
        var rNum = $("#rNum").val().toUpperCase();
        var interval1 = ($("#interval").val() == 4?"":$("#interval").val());
        var data1 = ($("#data").val() == "全部"?"":$("#data").val());
        var state1 = ($("#state").val() == 0?"":$("#state").val());
        var filter = {
            roomNum:rNum,
            data:data1,
            interval:interval1,
            state:state1
        };

        crateList(roomFilter(roomStateList,filter));
    })
});

//筛选
function roomFilter(array, filters) {
    const filterKeys = Object.keys(filters);
    return array.filter((item) => {
        return filterKeys.every(key => {
            if(!filters[key].length) return true;
            return !!~filters[key].indexOf(item[key])
        })
    })
}

function getApplyList() {
    $.ajaxSettings.async = false;
    $.get("/MeetingRoom/RoomServlet/getRoomStateByUser",function (data) {
        roomStateList = eval(data);
        crateList(roomStateList);
    })
}

function crateList(rl) {
    $(document).resize();
    $("tbody").text("");
    var flag = 1;
    for (let i = 0; i < rl.length; i++) {
        getRoom(rl[i].roomId,flag);
        $("#"+flag+"").append("<td class=\"col-1 interval\"></td>\n" +
            "                <td class=\"col-2\">"+rl[i].data+"</td>\n" +
            "                <td class=\"col-1 text-center bg-warning state\"></td>\n" +
            "                <td class=\"col-2 text-center\"><a class=\"btn tBtn btn-dark text-white\" id=\"Item-"+rl[i].itemId+"\">取消申请</a></td>");
        var ch = $("#"+flag+" .interval");
        switch (rl[i].interval) {
            case 0: ch.text("上午");break;
            case 1: ch.text("下午");break;
            case 2: ch.text("晚上");break;
        }
        var ch1 = $("#"+flag+" .state");
        ch1.removeClass("bg-warning").removeClass("bg-secondary").removeClass("bg-danger").removeClass("bg-success");
        switch (rl[i].state) {
            case 0: ch1.text("已取消").addClass("bg-secondary");break;
            case 1: ch1.text("申请中").addClass("bg-warning") ;break;
            case 2: ch1.text("已通过").addClass("bg-success");break;
            case 3: ch1.text("未通过").addClass("bg-danger");break;
        }
        if (rl[i].state != 1){
            $("#"+flag+" .btn").removeClass("btn-dark").addClass("btn-secondary").text("删除记录");
        }

        flag++;
    }
}

function getRoom(rid,flag) {
    $.get("/MeetingRoom/RoomServlet/getRoomById",{rid:rid},function (data2) {
        var r = eval("("+data2+")");
        $("tbody").append("<tr class=\"row\" id=\""+flag+"\">\n" +
            "                <td class=\"col-2\">"+r.num+"</td>\n" +
            "                <td class=\"col-2\">"+r.roomName+"</td>\n" +
            "                <td class=\"col-2\">"+r.place+"</td>\n" +
            "            </tr>");
    });
}