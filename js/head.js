$(function() {
  $(function() {
    $('h1').css('left', '0');
    $('.element a').css('top', '-15vw');
    $('.element a').css('opacity', '0');
    $('.works').animate({
      top: '0',
      opacity: '1'
    }, 1500);
    $('.about').delay(250).animate({
      top: '0',
      opacity: '1'
    }, 1500);
    $('.contact').delay(500).animate({
      top: '0',
      opacity: '1'
    }, 1500);
  });

  $('.element a').click(function() {
    $(this).animate({
      top: '-7vw',
      opacity: '0'
    }, 1500);
    $('.element a').delay(500).animate({
      top: '2vw',
      opacity: '0'
    }, 1500);
    $('h1').delay(1000).animate({
      left: '49.7vw'
    }, 1500, (
        function(href) {
          return function() {
            window.location.href = href;
          };
        })($(this).attr('href'))
      );
    return false;
  });
});