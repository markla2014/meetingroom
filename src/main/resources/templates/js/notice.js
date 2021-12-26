$(document).ready(function () {
    $.get("/MeetingRoom/NoticeServlet/getNoticeList",function (data) {
        nlist = eval("("+data+")");
        for (let i = 0; i < nlist.length; i++) {
            var data = new Date(nlist[i].cTime);
            nlist[i].cTime = data.getFullYear()+"年-"+(data.getMonth()+1)+"月-"+data.getDate()+"日";
                $("#content").append("<div class=\"card shadow-lg mt-3 p-4\" style=\"border-radius: 35px\">\n" +
                    "            <h5 class=\"card-title\">"+nlist[i].nTitle+"</h5>\n" +
                    "            <div class=\"card-body\">\n" +
                    "                <p class=\"card-text small\">创建时间："+nlist[i].cTime+"</p>\n" +
                    "                <p class=\"card-text\">"+nlist[i].nText+"</p>\n" +
                    "            </div>\n" +
                    "        </div>");
        }
    });
});