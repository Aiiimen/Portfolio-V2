$(document).ready(function(){
  smoothScrool(1000);

  //SLIDING ANIMATION WHEN SCROLLING
  var notFiredGallery = false;
  var notFiredProjects = false;
  var notFiredBlog = false;
  var notFiredAbout = false;
  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    switch (scroll != 0 ){
        case (scroll > $('.gallery-container').offset().top -
          ($('#gallery').height() / 1.7) && !notFiredGallery):
          slideRightIn('.gallery-container', '.img');
          notFiredGallery = true;
        break;
        case (scroll > $('.projects-container').offset().top -
            ($('#projects').height() / 0.7) && !notFiredProjects):
            slideLeftIn('.projects-container', '.project1, .project2');
            notFiredProjects = true;
        break;
        case (scroll > $('.blog-container').offset().top -
            ($('.post-container').height() / 0.9) && !notFiredBlog):
            slideRightIn('.blog-container', '.post-container');
            notFiredBlog = true;
        break;
        case (scroll > $('.about-container').offset().top -
            ($('#about').height() / 0.9) && !notFiredAbout):
            slideLeftIn('.about-container', '.about-content, .about-image');
            //stops the animation from looping
            notFiredAbout = true;
        break;
      }
  });
  // END OF SLIDING ANIMATION

});



//slide left in method
function slideLeftIn (main_container, child1, child2){
    $(main_container).removeClass('hidden');
    $(child1, child2)
    .velocity("transition.slideLeftIn", {stagger: 250})
    .delay(750);
}



//slide right in method
function slideRightIn (main_container, child){
    $(main_container).removeClass('hidden');
    $(child)
    .velocity("transition.slideRightIn", {stagger: 250})
    .delay(750);
}


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
