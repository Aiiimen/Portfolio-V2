$(document).ready(function() {


// Smooth scrolling
  var scrollLink = $('.scroll');
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  //underline switching
  $("a").click(function () {
    $('table tr th a').removeClass('active');
    $('table tr td a').removeClass('active');
    $(this).toggleClass('active');
 });


 //sidenav toggle - mobile view
 $('.sidenav-toggle').click(function(){

   $('.sidenav-toggle img').toggleClass('rotate');
   $('.sidenav').toggleClass('open');
 })

})
