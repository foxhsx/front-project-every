const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreateBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const downloadBtn = document.getElementById("download");

const ctx = canvas.getContext("2d");

const imageTypes = ["png", "jpeg", "jpg", "webp"];

let size = 10;
let isPressed = false;
colorEl.value = "black";
let color = colorEl.value;
let x, y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  downloadBtn.style.display = "block";

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

increaseBtn.addEventListener("click", () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreateBtn.addEventListener("click", () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));

clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  downloadBtn.style.display = "none";
});

function getImageUrl(type) {
  return canvas.toDataURL(`image/${type}`);
}

function downLoad(url) {
  const downLoadA = document.createElement("a");
  downLoadA.download = new Date().getTime();
  downLoadA.href = url;
  document.body.appendChild(downLoadA);
  downLoadA.click();
  downLoadA.remove();
}

downloadBtn.addEventListener("click", () => {
  const ask = window.prompt("请输入图片的格式，如 png,jpg 等");
  if (ask !== null && ask !== "") {
    if (imageTypes.indexOf(ask) > -1) {
      downLoad(getImageUrl(ask));
    } else {
      alert("暂不支持该格式");
    }
  }
});
