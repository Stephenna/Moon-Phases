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

let fullMoonInfo = document.getElementById('fullMoonINFO');
fullMoonInfo.style.visibility = 'hidden';




function fullMoonE(){
    let fullMoonImg = document.createElement('img')
    fullMoonImg.src = './img/full-moon.jpg';
    imgDiv.appendChild(fullMoonImg);
    fullMoonInfo.style.visibility = 'visible';
    
}


fullMoon.addEventListener('click', fullMoonE, {once : true});

let fullMoonImg = new Image();
    fullMoonImg.src = './img/full-moon.jpg';
//     imgDiv.appendChild(fullMoonImg);