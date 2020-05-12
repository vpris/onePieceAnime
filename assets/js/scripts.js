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


/* D&N mode */

// Day/Night mode script

let root = document.querySelector(':root');
// let rootStyles = getComputedStyle(root);
// let mainColor = rootStyles.getPropertyValue('--nightModeHColor');
let dayOrNight = document.querySelector('.dayOrNight');
localStorage.getItem('numOfClicks');
console.log(localStorage.getItem('numOfClicks'));

function dayMode() {
    root.style.setProperty('--reds-color', '#e84848');
    root.style.setProperty('--secondReds-color', '#c53d3d');
    root.style.setProperty('--dark', '#232123');
    root.style.setProperty('--dayBackground', '#edeef0');
    root.style.setProperty('--white', '#ffffff');

}

function nightMode() {
    root.style.setProperty('--reds-color', '#181521');
    root.style.setProperty('--secondReds-color', '#2c0054');
    root.style.setProperty('--dark', '#340261');
    root.style.setProperty('--dayBackground', '#201c2b');
    root.style.setProperty('--white', 'gray');
}

let numOfClicks = localStorage.getItem('numOfClicks');

if (!numOfClicks) {
	numOfClicks = 0;
}

dayOrNight.addEventListener("click", function(){

	if (this.click) {
		++numOfClicks;
	}
	localStorage.setItem('numOfClicks', numOfClicks);
	console.log(localStorage.getItem('numOfClicks'));


	setColor(numOfClicks);
});

function setColor(numOfClicks) {
	if (numOfClicks % 2 ) {
		nightMode();
	} else {
		dayMode();
	}
}
setColor(numOfClicks);