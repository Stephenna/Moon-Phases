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
// let fullMoonInfo = document.getElementById('fullMoonINFO');
// fullMoonInfo.style.visibility = 'hidden';

// let wanningGibINFO = document.getElementById('wanningGibINFO');
// wanningGibINFO.style.visibility = 'hidden';

// let lastQuartINFO = document.getElementById('lastQuartINFO');
// lastQuartINFO.style.visibility = 'hidden';

// let waningCrescentINFO = document.getElementById('waningCrescentINFO');
// waningCrescentINFO.style.visibility = 'hidden';

// let newMoonINFO = document.getElementById('newMoonINFO');
// newMoonINFO.style.visibility = 'hidden';

// let waxingCrescentINFO = document.getElementById('waxingCrescentINFO');
// waxingCrescentINFO.style.visibility = 'hidden';

// let firstQuarterINFO = document.getElementById('firstQuarterINFO');
// firstQuarterINFO.style.visibility = 'hidden';

// let waxingGibINFO = document.getElementById('waxingGibINFO');
// waxingGibINFO.style.visibility = 'hidden';

let fullMoonInfo = document.getElementById('fullMoonINFO');
fullMoonInfo.style.display = 'none';

let wanningGibINFO = document.getElementById('wanningGibINFO');
wanningGibINFO.style.display = 'none';

let lastQuartINFO = document.getElementById('lastQuartINFO');
lastQuartINFO.style.display = 'none';

let waningCrescentINFO = document.getElementById('waningCrescentINFO');
waningCrescentINFO.style.display = 'none';

let newMoonINFO = document.getElementById('newMoonINFO');
newMoonINFO.style.display = 'none';

let waxingCrescentINFO = document.getElementById('waxingCrescentINFO');
waxingCrescentINFO.style.display = 'none';

let firstQuarterINFO = document.getElementById('firstQuarterINFO');
firstQuarterINFO.style.display = 'none';

let waxingGibINFO = document.getElementById('waxingGibINFO');
waxingGibINFO.style.display = 'none';






function fullMoonE(event){
    let fullMoonImg = document.createElement('img');
    fullMoonImg.src = './img/full-moon.jpg';
    imgDiv.appendChild(fullMoonImg);
    fullMoonInfo.style.display = '';
    
}


function waningGibE(){
    let waningGibImg = document.createElement('img');
    waningGibImg.src = './img/wanning-gibbous.jpg';
    imgDiv.appendChild(waningGibImg);
    wanningGibINFO.style.display = '';
}

function lastQaurterE(){
    let lastQaurterIMG = document.createElement('img');
    lastQaurterIMG.src = './img/last-quarter.jpg';
    imgDiv.appendChild(lastQaurterIMG);
    wanningGibINFO.style.display = '';
}

function waningCrescentE(){
    let wanCrescIMG = document.createElement('img');
    wanCrescIMG.src = './img/wanning-crescent.jpg';
    imgDiv.appendChild(wanCrescIMG);
    waningCrescentINFO.style.display = ''
}

function newMoonE(){
    let newMoonIMG = document.createElement('img');
    newMoonIMG.src = './img/new-moon.jpg';
    imgDiv.appendChild(newMoonIMG);
    newMoonINFO.style.display = ''
}

function waxingCrescentE(){
     let waxingCrescentIMG = document.createElement('img');
     waxingCrescentIMG.src = './img/waxing-crecent.jpg';
     imgDiv.appendChild(waxingCrescentIMG);
     waxingCrescentINFO.style.display = ''
}

function firstQuarterE(){
    let firstQuarterIMG = document.createElement('img');
    firstQuarterIMG.src = './img/first-quarter.png';
    imgDiv.appendChild( firstQuarterIMG);
    firstQuarterINFO.style.display = ''
}

function waxingGibbousE(){
    let wxGibIMG = document.createElement('img');
    wxGibIMG.src = './img/waxing-gibbous copy.jpg';
    imgDiv.appendChild(wxGibIMG);
    waxingGibINFO.style.display = ''
}



// Adding event listener to images
fullMoon.addEventListener('click', fullMoonE, {once : true});
wanningGib.addEventListener('click', waningGibE, {once : true});
lastQuart.addEventListener('click', lastQaurterE, {once : true});
wanningCrescent.addEventListener('click', waningCrescentE, {once : true});
newMoon.addEventListener('click', newMoonE, {once : true});
waxingCrescent.addEventListener('click', waxingCrescentE, {once : true});
firstQuarter.addEventListener('click', firstQuarterE, {once : true});
WaxingGibbous.addEventListener('click', waxingGibbousE, {once : true});

// let fullMoonImg = new Image();
//     fullMoonImg.src = './img/full-moon.jpg';
//     imgDiv.appendChild(fullMoonImg);