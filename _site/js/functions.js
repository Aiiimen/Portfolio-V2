$(document).ready(function(){
  smoothScrool(1000);
  galleryScroll();
  //more button shake
  setInterval(function(){
  $('.gallery .more').velocity('callout.shake');
  }, 10000);
  galleryToggle();

});



//smooth scrolling method
function smoothScrool (duration){
  $('a[href^="#"]').on('click', function(event){
    var target = $( $(this).attr('href'));
    if(target.length){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration)
    }
  });
}

//gallery scroll
function galleryScroll(){

$('nav a').click(function(){

  if( $(this).hasClass('street')){
    $('.notShowing').hide("fast");
    $('nav a').removeClass('active');
    $('.street').addClass('active');
    $('.belt').animate({"left": "-100%"}, 700);
  }else if ($(this).hasClass('fineart')) {
    $('.notShowing').hide("fast");
    $('nav a').removeClass('active');
    $('.fineart').addClass('active');
    $('.belt').animate({"left": "-200%"}, 700);
  }else if ($(this).hasClass('other')) {
    $('.notShowing').hide("fast");
    $('nav a').removeClass('active');
    $('.other').addClass('active');
    $('.belt').animate({"left": "-300%"}, 700);
  }else if ($(this).hasClass('events')){
    $('.notShowing').hide("fast");
    $('nav a').removeClass('active');
    $('.events').addClass('active');
    $('.belt').animate({"left": "0%"}, 700);
  }

});
}

//expand gallery
function galleryToggle() {
$('.notShowing').hide();
$('.expandless').hide();
$('#more-gallery img').click(function(){
  $('.notShowing').slideToggle("slow");
  $('.expandless').toggle("fast");
  $('.expandmore').toggle("fast");
});
}
