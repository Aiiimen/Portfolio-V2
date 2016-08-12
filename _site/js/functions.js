$(document).ready(function(){
  smoothScrool(1000);
  galleryScroll();
  //more button shake
  setInterval(function(){
  $('.gallery .more').velocity('callout.shake');
  }, 10000);



  //SLIDING ANIMATION WHEN SCROLLING
  var notFiredGallery = false;
  var notFiredProjects = false;
  var notFiredBlog = false;
  var notFiredAbout = false;
  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    switch (scroll != 0 ){
        case (scroll > $('.gallery-container').offset().top -
          ($('#gallery').height() / 0.1) && !notFiredGallery):
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


  //insert next function here
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

//gallery scroll
function galleryScroll(){

$('nav a').click(function(){

  if( $(this).hasClass('street')){
    $('nav a').removeClass('active');
    $('.street').addClass('active');
    $('.belt').animate({"left": "-100%"}, 700);
  }else if ($(this).hasClass('fineart')) {
    $('nav a').removeClass('active');
    $('.fineart').addClass('active');
    $('.belt').animate({"left": "-200%"}, 700);
  }else if ($(this).hasClass('other')) {
    $('nav a').removeClass('active');
    $('.other').addClass('active');
    $('.belt').animate({"left": "-300%"}, 700);
  }else if ($(this).hasClass('events')){
    $('nav a').removeClass('active');
    $('.events').addClass('active');
    $('.belt').animate({"left": "0%"}, 700);
  }

});
}
