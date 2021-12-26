$(document).ready(function () {
    $.get("/MeetingRoom/NoticeServlet/getNoticeList",function (data) {
        nlist = eval("("+data+")");
        for (let i = 0; i < nlist.length; i++) {
            var data = new Date(nlist[i].cTime);
            nlist[i].cTime = data.getFullYear()+"年-"+(data.getMonth()+1)+"月-"+data.getDate()+"日";
            $("#content").append("<div class=\"card shadow-lg mt-3 p-4\" style=\"border-radius: 35px\">\n" +
                "            <div class=\"card-body\">\n" +
                "                <p class=\"card-text small\">公告ID："+nlist[i].nId+"</p>\n" +
                "                <p class=\"card-text small\">创建时间："+nlist[i].cTime+"</p>\n" +
                "                <p class='card-text small' data-nid=\""+nlist[i].nId+"\">创建人：</p>" +
                "                <p class=\"card-text small\">公告标题："+nlist[i].nTitle+"</p>\n" +
                "                <p class=\"card-text\">正文：&emsp;"+nlist[i].nText+"</p>\n" +
                "            </div>\n" +
                "            <br>" +
                "            <a class='mx-auto col-6 btn btn-danger' data-id='"+nlist[i].nId+"'>删除公告</a>" +
                "        </div>");
            getUser(nlist[i].cUserId,$("[data-nid='"+nlist[i].nId+"']"));
        }

        $(".btn").click(function () {
            $.get("/MeetingRoom/NoticeServlet/delNotice",{nId:$(this).attr("data-id")},function () {
                window.location.reload();
            })
        })
    });
    function getUser(uid,el){
        $.get("/MeetingRoom/UserServlet/findUser",{uid:uid},function (data) {
            var user = eval("("+data+")");
            var uname = user.username;
            el.append(uname);
        })
    }
});