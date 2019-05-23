// Variabels

var scale = 1;
var h1 = document.querySelector('h1');
var h2 = document.querySelectorAll('h2');
var p = document.querySelector('p');
var svgElement = document.querySelectorAll('svg');
var grid = document.querySelector('.container-grid');
var input = document.querySelector('.metadata input');



// Functions

function logKey(e) {
  for (var i = 0; i < h2.length; i++) {
    h2[i].textContent = e.key;  // .key event src = https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
    // console.log(e);
  }
}

function revealAnimation() {
  grid.classList.toggle('animated');
}

function triggerSVG(e) {
    e.target.classList.toggle('svgAnimation');
}

function zoom(e) { // zoom event src = https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
  e.preventDefault();
  
  scale += e.deltaY * -0.01;

  scale = Math.min(Math.max(.125, scale), 4);

  h1.style.transform = `scale(${scale})`;
}

function scaleThis() {  // dblclick event src = https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
  for (var i = 0; i < h2.length; i++) {
    h2[i].classList.toggle('scaleNow');
  }
  console.log('successfull');
}

function glowThis() { 
  grid.classList.toggle('glowNow');
  console.log('successfull');
}


// addEventListeners

document.addEventListener('keydown', logKey);  // keydown src =  https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
input.addEventListener('keydown', logKey);

window.addEventListener('load', revealAnimation);

for (var i = 0; i < svgElement.length; i++) {
  svgElement[i].addEventListener('click', triggerSVG);
}

h1.addEventListener('wheel', zoom);
p.addEventListener('dblclick', scaleThis);
p.addEventListener('contextmenu', glowThis);
