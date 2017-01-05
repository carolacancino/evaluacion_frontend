  /*CUSTOM LINKS SCROLLING FUNCTION */
$(document).ready$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// NAV BAR CLOSE ON PAGE CLICK
$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
})

//Fade header on scroll
$(window).scroll(function(){
    $(".main-title").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".hr-size").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".fa-chevron-down").css("opacity", 1 - $(window).scrollTop() / 500);
  });

window.sr = ScrollReveal();
sr.reveal('.section-header');
sr.reveal('.effect-sarah');
sr.reveal('.bio-text');
sr.reveal('.about-item');
sr.reveal('.contact-wrapper');