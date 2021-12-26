var isExist = false;

$(document).ready(function () {
    $.get("/MeetingRoom/ItemServlet/getContent",function (data) {
        var d = eval("("+data+")");

        $("#roomNum").val(d.roomNum);
        $("#roomName").val(d.roomName);
        $("#roomPlace").val(d.roomPlace);
        $("#data").val(d.data);
        $("#interval").val(d.interval);
        if (d.state == 1) $("#formTip").modal();
    });

    //日期选择器
    $("#data").datepicker({
        locale:'zh-cn',
        format:'yyyy-mm-dd',
        uiLibrary: 'bootstrap4',
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

    $("#roomNum").blur(function () {
        changeVal();
    });
    $("#data").blur(function () {
        changeVal();
    });
    $("#interval").blur(function () {
        changeVal();
    });

    $("#submit").submit(function () {
        if (!isExist){
            return true;
        } else {
            return false;
        }
    })
});

$(document).on("click","#return",function () {
    window.location.href = "/MeetingRoom/index.jsp";
});

function changeVal() {
    $.get("/MeetingRoom/ItemServlet/isExist",{roomNum:$("#roomNum").val(),data:$("#data").val(),interval:$("#interval").val()},function (data) {
        if ("true" == data) isExist = true;
    });
}

function getQuery(name) {
    var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}