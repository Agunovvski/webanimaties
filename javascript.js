var h2 = document.querySelectorAll('h2');

document.onkeypress = logKey;

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

window.addEventListener('load', revealAnimation);
