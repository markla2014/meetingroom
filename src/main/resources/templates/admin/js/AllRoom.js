var roomList;

$(document).ready(function () {
    $.get("/MeetingRoom/RoomServlet/RoomList",function (data) {
        roomList = eval("("+data+")");
        createList(roomList)
    })

    $("#seBtn").click(function () {
        var rId = $("#rId").val();
        var rNum = $("#rNum").val().toUpperCase();
        var rName = $("#rName").val();
        var cap = $("#cap").val();
        var filter = {
            id:rId,
            num:rNum,
            roomName:rName,
            capacity:cap
        };

        createList(userFilter(roomList,filter));
    })
});

function createList(list) {
    $("tbody").text("");
    for (let i = 0; i < list.length; i++) {
        $("tbody").append("<tr class=\"row\">\n" +
            "            <td class=\"col-2\">"+list[i].id+"</td>\n" +
            "            <td class=\"col-2\">"+list[i].num+"</td>\n" +
            "            <td class=\"col-3\">"+list[i].roomName+"</td>\n" +
            "            <td class=\"col-2\">"+list[i].capacity+"</td>\n" +
            "            <td class=\"col-3 text-center\">"+"<a class='mr-3 btn btn-info'>编辑</a>"+"<a class='ml-3 btn btn-danger'>删除</a>"+"</td>\n" +
            "        </tr>")
    }
}

//筛选
function userFilter(array, filters) {
    const filterKeys = Object.keys(filters);
    return array.filter((item) => {
        return filterKeys.every(key => {
            if(!filters[key].length) return true;
            return !!~filters[key].indexOf(item[key])
        })
    })
}