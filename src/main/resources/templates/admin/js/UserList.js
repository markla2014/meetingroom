var userList;

$(document).ready(function () {
   $.get("/MeetingRoom/UserServlet/getUserList",function (data) {
       userList = eval("("+data+")");
      createList(userList);
   });

    $("#seBtn").click(function () {
        var uId = $("#uId").val();
        var uName = $("#uName").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var filter = {
            id:uId,
            username:uName,
            phone:phone,
            email:email
        };

        createList(userFilter(userList,filter));
    })
});

function createList(list) {
    $("tbody").text("");
    for (let i = 0; i < list.length; i++) {
        var time = new Date(list[i].regTime);
        var t =  time.getFullYear()+"年-"+(time.getMonth()+1)+"月-"+time.getDate()+"日";
        $("tbody").append(" <tr class=\"row\">\n" +
            "                <td class=\"col-2\">"+list[i].id+"</td>\n" +
            "                <td class=\"col-2\">"+list[i].username+"</td>\n" +
            "                <td class=\"col-2\">"+list[i].phone+"</td>\n" +
            "                <td class=\"col-2\">"+list[i].email+"</td>\n" +
            "                <td class=\"col-2\">"+t+"</td>\n" +
            "                <td class=\"col-2 text-center\" data-id='"+list[i].id+"' data-username='"+list[i].username+"' data-phone='"+list[i].phone+"' data-email='"+list[i].email+"'>" +
            "                   <a class='mr-3 btn btn-info'>编辑</a>"+"<a class='ml-3 btn btn-danger'>删除</a>" +
            "                </td>\n" +
            "            </tr>")
    }

    $(".btn-danger").click(function () {
        $.get("/MeetingRoom/UserServlet/delUserAdmin",{uid:$(this).parent().attr("data-id")},function () {
            window.location.reload();
        })
    });
    $(".btn-info").click(function () {
        var flag = $(this).parent();
        $("#username").val(flag.attr("data-username"));
        $("#altphone").val(flag.attr("data-phone"));
        $("#altemail").val(flag.attr("data-email"));
        $("#altTip").modal();
    })
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