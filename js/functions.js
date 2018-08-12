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



 function myFunction() {
   var winScroll =$(window).scrollTop();
   var height = $(document).height();
   var winHeight = $(window).height();
   var scrolled = (winScroll /(height - winHeight)) * 100;
   console.log(scrolled);
   document.getElementById("myBar").style.width = scrolled + "%";
 }
// var pctScrolled;
// //scroll indicator
// function amountscrolled(){
//     var winheight = $(window).height();
//     //console.log("windowns Height: " + winheight);
//     var docheight = $(document).height();
//     //console.log("documents height: " + docheight);
//     var scrollTop = $(window).scrollTop();
//     //console.log("win scroll top: " + scrollTop);
//     var trackLength = docheight - winheight;
//     //console.log("trackLength: " + trackLength);
//     pctScrolled = Math.floor(scrollTop/winheight * 100); // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
//     var sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
//     console.log(pctScrolled + '% scrolled');
//     document.getElementById("myBar").style.width = pctScrolled  + "%";
// }
//
//
$(window).on("scroll", function(){
    myFunction();

})
})
