let root = document.querySelector(':root');
// let rootStyles = getComputedStyle(root);
// let mainColor = rootStyles.getPropertyValue('--nightModeHColor');
let dayOrNight = document.querySelector('.dayOrNight');
localStorage.getItem('numOfClicks');
console.log(localStorage.getItem('numOfClicks'));

function dayMode() {
    root.style.setProperty('--nightModeHColor', 'rgba(232,72,72,0.78)');
    root.style.setProperty('--nightModeMColor', 'darkgray');
    root.style.setProperty('--nightModeColor', '#fff');
    root.style.setProperty('--nightModeFontColor', '#000');
    root.style.setProperty('--nightSwitchButton', '#392e5c');
}

function nightMode() {
    root.style.setProperty('--nightModeHColor', '#181521');
    root.style.setProperty('--nightModeMColor', '#201c2b');
    root.style.setProperty('--nightModeColor', '#392e5c');
    root.style.setProperty('--nightModeFontColor', '#dad8de');
    root.style.setProperty('--nightSwitchButton', '#ffeb3b');
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
        dayMode();

    } else {
        nightMode();
    }
}
setColor(numOfClicks);