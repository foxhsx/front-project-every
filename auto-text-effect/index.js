const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";

let idx = 1;
let speed = 300 / speedEl.value;

wirteText();

function wirteText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(wirteText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
