$(function() {
  $(function() {
    $('.contents').fadeIn(1000);
  });

  $('.back').click(function() {
    $('.contents').fadeOut(1000);
    $('h1').delay(1000).animate({
      left: '0'
    }, 1500, (
        function(href) {
          return function() {
            window.location.href = href;
          };
        })($(this).attr('href'))
      );
    return false;
  });

  $('.fa-angle-double-up').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
});