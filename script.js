// Grabbing all those elements!
const fullMoon = document.getElementById('full'), 
wanningGib = document.getElementById('wanningGib'),
lastQuart = document.getElementById('lastQuart'),
wanningCrescent = document.getElementById('wanningCrescent'),
newMoon = document.getElementById('newMoon'),
waxingCrescent = document.getElementById('waxingCrescent'),
firstQuarter = document.getElementById('firstQuarter'),
WaxingGibbous = document.getElementById('waxingGibou'),
imgDiv = document.getElementById('moonImg'),
moonInfo = document.getElementById('moonInfo');

// Setting phase info to hidden
let fullMoonInfo = document.getElementById('fullMoonINFO');
fullMoonInfo.style.visibility = 'hidden';

let wanningGibINFO = document.getElementById('wanningGibINFO');
wanningGibINFO.style.visibility = 'hidden';

let lastQuartINFO = document.getElementById('lastQuartINFO');
lastQuartINFO.style.visibility = 'hidden';

let waningCrescentINFO = document.getElementById('waningCrescentINFO');
waningCrescentINFO.style.visibility = 'hidden';

let newMoonINFO = document.getElementById('newMoonINFO');
newMoonINFO.style.visibility = 'hidden';

let waxingCrescentINFO = document.getElementById('waxingCrescentINFO');
waxingCrescentINFO.style.visibility = 'hidden';

let firstQuarterINFO = document.getElementById('firstQuarterINFO');
firstQuarterINFO.style.visibility = 'hidden';

let waxingGibINFO = document.getElementById('waxingGibINFO');
waxingGibINFO.style.visibility = 'hidden';





function fullMoonE(){
    let fullMoonImg = document.createElement('img');
    fullMoonImg.src = './img/full-moon.jpg';
    imgDiv.appendChild(fullMoonImg);
    fullMoonInfo.style.visibility = 'visible';
    
}

function waningGibE(){
    let waningGibImg = document.createElement('img');
    waningGibImg.src = './img/wanning-gibbous.jpg';
    imgDiv.appendChild(waningGibImg);
    wanningGibINFO.style.visibility = 'visible';
}

fullMoon.addEventListener('click', fullMoonE, {once : true});


wanningGib.addEventListener('click', waningGibE, {once : true});

// let fullMoonImg = new Image();
//     fullMoonImg.src = './img/full-moon.jpg';
//     imgDiv.appendChild(fullMoonImg);