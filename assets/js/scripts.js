"use strict";

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

let removePrev = document.querySelector('.owl-prev');
removePrev.style.display = 'none';

let stylingNext = document.querySelector('.owl-next');
stylingNext.style.position = 'absolute';
stylingNext.style.top = '-5px';
stylingNext.style.right = '-5px';
stylingNext.style.height = '300px';
stylingNext.style.width = '80px';
stylingNext.style.color = '#ffffff';
stylingNext.style.backgroundColor = '#918f90';
stylingNext.style.fontSize = '6em';
stylingNext.style.borderRadius = '0';

