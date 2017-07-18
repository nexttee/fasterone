/* DOM ready event */
(function($){

    /* component.teaser-bio */
    var teaserBioCarousel = function() {

        // Check if #teaser-bio-carousel selector exists
        var carousel = $('.field-name-field-slides div:first-child');
        console.log("show me the money 2"+carousel.length);
        if (carousel.length) {
            $(carousel).carouFredSel({
                width: '100%',
                items: 1,
                scroll: {
                    items: 1,
                    easing: "linear",
                    timeoutDuration: 5000,
                    pauseOnHover: true
                },
                auto: false,
                items: {
                    visible: 1,
                    height: 'variable'
                },
                swipe: {
                    onMouse: true,
                    onTouch: true,
                    options: {
                        excludedElements: "label, button, input, select, textarea, .noSwipe"
                    }
                }
            });
        }
    }

    teaserBioCarousel();

    $(window).resize(function() {
        teaserBioCarousel();
    });
})(jQuery);