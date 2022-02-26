const note = document.getElementById('note');

note.addEventListener('click', async (e) => {
  if (note.classList.length > 0) {
    note.innerHTML = 'Note';
    note.classList.remove('show');
    return;
  }
  const { data } = await axios('./README.md');
  note.classList.add('show');
  const close = document.createElement('div');
  close.innerHTML = 'X';
  close.classList.add('close');
  note.innerHTML = marked.parse(data);
  note.appendChild(close);
});

function clock() {
  var hours = document.getElementById('hour');
  var minutes = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

var interval = setInterval(clock, 1000);
