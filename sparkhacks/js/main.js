$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: [],
    autoScrolling: true,
    scrollHorizontally: true,
    scrollBar: true,
    keyboardScrolling: true,
    scrollBar: true,
    scrollVertically: true,
    parallax: true,
  });

  $.fn.fullpage.setAllowScrolling(true);
});
