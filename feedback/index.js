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

const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

ratingsContainer.onclick = (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.innerText;
    alert(selectedRating);
  }
};

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}

sendBtn.onclick = (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
};
