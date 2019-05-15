// Variabels

var h2 = document.querySelectorAll('h2');
var svgElement = document.querySelectorAll('svg');


// functions

function logKey(e) {
  for (var i = 0; i < h2.length; i++) {
    h2[i].textContent = e.key;
    console.log(e);
  }
}

function revealAnimation() {
  for (var i = 0; i < h2.length; i++) {
    h2[i].classList.toggle('animated');
  }
}

function triggerSVG(e) {
    e.target.classList.toggle('svgAnimation');
}


// addEventListeners

document.onkeypress = logKey;

window.addEventListener('load', revealAnimation);
for (var i = 0; i < svgElement.length; i++) {
  svgElement[i].addEventListener('click', triggerSVG);
}
