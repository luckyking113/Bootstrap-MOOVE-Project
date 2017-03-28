$(document).ready(function() {
    $(".adapter-image-rate").click(function() {
        $(".adapter-image-rate").removeClass("active");
        $(this).addClass("active");
        $("#imgarea").attr("src", $(this).find("img").attr("src"));
    });

});