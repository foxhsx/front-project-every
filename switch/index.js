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

const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(theClickdOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickdOne) {
      fast.checked = false;
    }
    if (cheap === theClickdOne) {
      good.checked = false;
    }
    if (fast === theClickdOne) {
      cheap.checked = false;
    }
  }
}
