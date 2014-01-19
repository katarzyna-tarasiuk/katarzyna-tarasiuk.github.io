$( function () {
  console.log('x');
  $('a.scrollto').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top - $('.hdr').height()
    }, 500);
    return false;
  });
});
