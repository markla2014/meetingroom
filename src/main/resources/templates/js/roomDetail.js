$(document).ready(function () {
   $.get("/MeetingRoom/RoomServlet/getRoomById",function (data) {
      var room = eval("("+data+")");
      $("#rid").text(room.id);
      $("#rNum").text(room.num);
      $("#rName").text(room.roomName);
      $("#rPlace").text(room.place);
      $("#cap").text(room.capacity);
      $("#intro").text(room.introduction);
      if (room.imgUrl != null){
         $("#img").attr("src",room.imgUrl);
      }

      $("#content").append("<a class=\"btn btn-primary applyBtn btn-block mt-4\" href='/MeetingRoom/applyingRoom.jsp'>预定</a>");
      changBtn();
   });

   function changBtn() {
      $.get("/MeetingRoom/UserServlet/isUser",function (data) {
         if ("true" === data){
            $(".applyBtn").removeClass("disabled");
         } else {
            $(".applyBtn").addClass("disabled");
         }
      })
   }
});