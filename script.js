$( function () {
  $('a.scrollto').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top - $('.hdr').height()
    }, 500);
    
    return false;
  });

  var classes = [];
  $('.mn').each(function (i,el) {
    classes.push({top: $(el).position().top, el: $(el)})
  });

  $(window).scroll(function(e){
    var y = $(document).scrollTop();
    for(var i =0; i< classes.length; i+=1) {

      console.log(classes[i].top);
    console.log(y);
    if($(window).scrollTop() + $(window).height() >= $(document).height() - 50) {
        $('#menu li a').removeClass('active');
        $('#menu li a[href=#'+classes[classes.length-1].el.attr('id')+']').addClass('active') ;
        return;

    }
      if(classes[i].top > y - classes[i].el.height() + 50) {
        $('#menu li a').removeClass('active');
        $('#menu li a[href=#'+classes[i].el.attr('id')+']').addClass('active') ;
        return;
      }
    }
  });
});
