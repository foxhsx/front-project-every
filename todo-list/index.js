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

const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todoEl.onclick = () => {
      todoEl.classList.toggle("completed");
      updateLS();
    };

    todoEl.oncontextmenu = (e) => {
      e.preventDefault();

      todoEl.remove();
      updateLS();
    };

    todosUL.appendChild(todoEl);
    input.value = "";

    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((el) => {
    todos.push({
      text: el.innerText,
      completed: el.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

form.onsubmit = (e) => {
  e.preventDefault();

  addTodo();
};
