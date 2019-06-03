$(".item2 > .imgSlide:gt(0)").hide();

setInterval(function() { 
  $('.item2 > .imgSlide:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#item2');
},  3000);