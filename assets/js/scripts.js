"use strict";
//

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    video: true,


    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

//owl buttons

let removePrev = document.querySelector('.owl-prev');
removePrev.style.display = 'none';

let stylingNext = document.querySelector('.owl-next');
stylingNext.style.position = 'absolute';
stylingNext.style.top = '-5px';
stylingNext.style.right = '-5px';
stylingNext.style.height = '300px';
stylingNext.style.width = '80px';
stylingNext.style.color = '#ffffff';
stylingNext.style.backgroundColor = '#21252985';
stylingNext.style.fontSize = '6em';
stylingNext.style.borderRadius = '0';

// footer

(function(){

    footer();
  
    $(window).resize(function() {
      footer();
    });
  
    function footer() {
      var docHeight = $(window).height(),
          footerHeight = $('footer').outerHeight(),
          footerTop = $('footer').position().top + footerHeight;
  
      if (footerTop < docHeight) {
        $('footer').css('margin-top', (docHeight - footerTop) + 'px');
      }
    }
  
  
  
  })();