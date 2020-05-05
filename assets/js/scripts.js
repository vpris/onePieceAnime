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

/*  $("html").on("contextmenu",function(e){
    return false;
}); */

var releaseDescription = ('.releaseDescription');
var button = ('.showMoreDescription');

$(button).click(function () {
      $(releaseDescription).removeClass('releaseDescription').toggleClass('releaseDescriptionActive');
      $(button).css("display", "none");
    })


    (function () {
      var app = "https://script.googleusercontent.com/macros/echo?user_content_key=AY0nubBrO6fxv2C7JA0A0WO1ydcbtBUnQTbEZ9rJ_otrJXm6XTZT5-u0a5dgfBtPSk37Yndu-HKIydS9iP_HRe6AWqIWtBclm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDv9fMtrRuWYqTGRgrGwqxu8pt0AHbCtYRjpOW3H9u0qV9kM18FOjZlN2Dzp8AowX-IqWsDnSrEd&lib=MTm1d2VhxMXdkI-R0C0RtPJZBpkQJSAEH",
         output = '',
         xhr = new XMLHttpRequest();
      xhr.open('GET', app);
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status == 200) {
           try {
               var r = JSON.parse(xhr.responseText),
                  result = r["name"];
               for (var i = 0; i < result.length; i++){
                     var obj = 
                      '<div class="staffName col-md-6">' + 
                              r["name"][i] + 
                      '</div>' +
                      '<div class="staffPosition col-md-6">' +
                              r["position"][i] + 
                      '</div>';
                     output += obj;
               }
  
  
  
           } catch(e) {}
        } 
  
        var lelel ='<div class="col-md-6">Ник</div><div class="col-md-6">Позиция</div>';
  
        const info = document.getElementById('staffInfo');
        info.innerHTML = lelel + output;
      }
      xhr.send()
   })()