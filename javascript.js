var h2 = document.querySelector('h2');

document.onkeypress = logKey;

function logKey(e) {
  h2.textContent = e.key;
  console.log(e)
}
