jQuery(document).ready(function ($) {

    $(".nav-toggle").on("click", function () {
        $(this).toggleClass("active");
        $(".mobile-menu").slideToggle('300');
        $(".mobile-search").slideToggle('300');
        return false;
    });

    $(".search-toggle").on("click", function () {
        $(this).toggleClass("active");
        $(".header-search").slideToggle();
        if ($(this).hasClass("active")) {
            $(".header-search .search-field").focus();
        } else {
            $(".header-search .search-field").blur();
        }
        return false;
    });
    $(window).resize(function () {
        if ($(window).width() > 930) {
            $(".nav-toggle").removeClass("active");
            $(".mobile-menu").hide();
            $(".mobile-search").hide();
        }
        if ($(window).width() < 930) {
            $(".search-toggle").removeClass("active");
            $(".header-search").hide();
        }
    });

    $('.to-the-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 500);
        return false;
    });

    var vidSelector = "iframe, object, video";
    var resizeVideo = function (sSel) {
        $(sSel).each(function () {
            var $video = $(this), $container = $video.parent(), iTargetWidth = $container.width();
            if (!$video.attr("data-origwidth")) {
                $video.attr("data-origwidth", $video.attr("width"));
                $video.attr("data-origheight", $video.attr("height"));
            }
            var ratio = iTargetWidth / $video.attr("data-origwidth");
            $video.css("width", iTargetWidth + "px");
            $video.css("height", ($video.attr("data-origheight") * ratio) + "px");
        });
    };
    resizeVideo(vidSelector);
    $(window).resize(function () {
        resizeVideo(vidSelector);
    });
});