$(function () {
    function openPrimary(cityName, elmnt, color, colorr) {
        var i, tabcontent, tablinks;
        tabcontent = $("#tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].css("display", "none");
        }
        tablinks = $(".tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].css("background-color", "");
            tablinks[i].css("color", "white");
        }
        $("#" + cityName).css("display", "block");
        elmnt.css("background-color", `${color}`);
        elmnt.css("color", `${colorr}`);
    }
})