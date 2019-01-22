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
 });

 //on project click
 $('.project').click(function(){
   window.location = $(this).find("a").attr("href");
   return false;
 })



 function myFunction() {
   var winScroll =$(window).scrollTop();
   var height = $(document).height();
   var winHeight = $(window).height();
   var scrolled = (winScroll /(height - winHeight)) * 100;
   //console.log(scrolled);
   document.getElementById("myBar").style.width = scrolled + "%";
 }

$(window).on("scroll", function(){
    myFunction();

})
})
