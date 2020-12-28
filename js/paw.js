$(window).on('scroll', function() {
    $(".paw").css("transform", "rotate(" + $(window).scrollTop()/2 + "deg)");
  });
  