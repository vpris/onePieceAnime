let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let mainColor = rootStyles.getPropertyValue('--nightModeHColor');
let dayOrNight = document.querySelector('.dayOrNight');
/* alert(mainColor); */
let numOfClicks = 0;


dayOrNight.addEventListener("click", function(){

    if (this.click) {
        ++numOfClicks;
    }

    localStorage.getItem('numOfClicks');
    localStorage.setItem('numOfClicks', numOfClicks);

    console.log(localStorage.getItem('numOfClicks'));

    if (numOfClicks % 2 ) {
        root.style.setProperty('--nightModeHColor', 'rgba(232,72,72,0.78)');
        root.style.setProperty('--nightModeMColor', 'darkgray');
        root.style.setProperty('--nightModeColor', '#fff');
        root.style.setProperty('--nightModeFontColor', '#000');

    } else {
        root.style.setProperty('--nightModeHColor', '#181521');
        root.style.setProperty('--nightModeMColor', '#201c2b');
        root.style.setProperty('--nightModeColor', '#392e5c');
        root.style.setProperty('--nightModeFontColor', '#dad8de');
    }

});
