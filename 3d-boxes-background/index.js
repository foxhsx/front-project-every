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

const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

function createBoxed() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxed();

btn.onclick = () => boxesContainer.classList.toggle("big");
