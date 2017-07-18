(function ($) {

    Drupal.behaviors.myBehavior = {
        attach: function (context, settings) {
            var str = $("span.views-slideshow-controls-text-previous a").html();
            console.log(str);
            $("span.views-slideshow-controls-text-previous a").text("❮");
            //$("span.views-slideshow-controls-text-previous a").addClass("fa fa-facebook-square");
            $("span.views-slideshow-controls-text-next a").text("❯");
            //$("span.views-slideshow-controls-text-next a").addClass("fa fa-facebook-square");
            $('.block-menu a.fa').text(" ");
        }
    };
}(jQuery));