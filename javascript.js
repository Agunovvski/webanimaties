var h2 = document.querySelectorAll('h2');

document.onkeypress = logKey;

function logKey(e) {
  for (var i = 0; i < h2.length; i++) {
    h2[i].textContent = e.key;
    console.log(e);
  }
}
