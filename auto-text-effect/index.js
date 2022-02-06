const note = document.getElementById("note");

note.addEventListener("click", async (e) => {
  if (note.classList.length > 0) {
    note.innerHTML = "Note";
    note.classList.remove("show");
    return;
  }
  const { data } = await axios("./README.md");
  note.classList.add("show");
  const close = document.createElement("div");
  close.innerHTML = "X";
  close.classList.add("close");
  note.innerHTML = marked.parse(data);
  note.appendChild(close);
});

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
