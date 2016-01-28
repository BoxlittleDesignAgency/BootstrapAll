$(document).ready(function () {
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target, length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    var emailOffset = $("#mail-iface").offset().top;
    var settingsOffset = $("#settings-iface").offset().top;
    var videoOffset = $("#video-iface").offset().top;
    var searchOffset = $("#search-iface").offset().top;

    var $w = $(window).scroll(function () {

        if ($w.scrollTop() >= emailOffset) {
            $("#email").css("background", "url(images/icon-email-active.png) no-repeat");
            inactiveLinks("email");
        }
        if ($w.scrollTop() >= settingsOffset) {
            $("#settings").css("background", "url(images/icon-cog-active.png) no-repeat");
            inactiveLinks("settings");
        }
        if ($w.scrollTop() >= videoOffset) {
            $("#video").css("background", "url(images/icon-video-active.png) no-repeat");
            inactiveLinks("video");
        }
        if ($w.scrollTop() >= searchOffset) {
            $("#search").css("background", "url(images/icon-search-active.png) no-repeat");
            inactiveLinks("search");
        }
    })

});

function inactiveLinks(exclude) {
    if (exclude != "email")
        $("#email").css("background", "url(images/icon-email-inactive.png) no-repeat");

    if (exclude != "settings")
        $("#settings").css("background", "url(images/icon-cog-inactive.png) no-repeat");

    if (exclude != "video")
        $("#video").css("background", "url(images/icon-video-inactive.png) no-repeat");

    if (exclude != "search")
        $("#search").css("background", "url(images/icon-search-inactive.png) no-repeat");
}