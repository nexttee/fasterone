/**
 * @file
 * Provides jQuery operations for initializing jQuery TouchSwipe.
 */

(function($) {
  Drupal.behaviors.views_slideshow_swipe = {
    attach: function (context, settings) {
      //Assign handlers to the simple direction handlers.
      var swipeOptions=
      {
        swipeLeft:swipeLeft,
        swipeRight:swipeRight,
        threshold:30
      }
      $(function() {
        //Enable swiping...
        $(Drupal.settings.views_slideshow_swipe['swipe_selector']).swipe( swipeOptions );
      });

      //Swipe handlers.
      //The only arg passed is the original touch event object
      function swipeLeft(event, direction) {
        $('.views_slideshow_controls_text_previous a').trigger('click');
      }
      function swipeRight(event, direction) {
        $('.views_slideshow_controls_text_previous a').trigger('click');
      }
    }
  }
})(jQuery);
