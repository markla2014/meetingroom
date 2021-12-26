$(document).ready(function () {
    $("#imgBtn").click(function () {
        $("#imgForm").submit();
        var t = setTimeout(function () {
            var word = $("#ifr").contents().find("body").text();
            if (word != ""){
                alert(word);
            }
        },1000)
    });
    $("#sub").click(function () {
        $(".texForm").submit();
        var t = setTimeout(function () {
            var word = $("#ifr").contents().find("body").text();
            if (word != ""){
                alert(word);
            }
        },1000)
    });

    $("#imgUp").change(function () {
        $("#imgShow").text($("#imgUp").val());
    })
});