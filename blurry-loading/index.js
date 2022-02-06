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

const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 0, 1);
  bg.style.filter = `blur(${scale(load, 0, 100, 0, 30)}px)`;
}

/**
 * 计算从方法开始执行到结束，每次执行后的值
 * @param {递增值} num
 * @param {和递增值挂钩，可以理解为递增值的最小值} in_min
 * @param {和递增值挂钩，可以理解为递增值的最大值} in_max
 * @param {实际上可以使用的值，这里可以理解起始值} out_min
 * @param {实际上可以使用的值，这里可以理解最终值} out_max
 * @returns { 计算后的值 } number 计算后的最终值
 * @description num 递增，返回值递减，这里的重要点在 out_min 上，这个值实际上是某个属性的初始值，我们需要在这个值的基础上去进行递减操作，这里
 * 的方法是使用反向逆推。
 * 1. 我们先按 num 递增，计算值也递增的正向思路进行计算；
 * 2. num，(in_min in_max)，(out_min out_max) 为三组数据
 *  a. num 是变化值，递增
 *  b. in_min 和 in_max 是 num 递增的区间范围
 *  c. out_min 和 out_max 是实际值的区间范围
 * 3. 按照正向思维，num 递增，函数求得的值也递增，那就有 in_min < in_max，out_min < out_max
 * 4. in_max 和 out_max 之间的对应关系：当 num === in_max 时，函数计算值 === out_max
 * 5. 此时的计算公式应该是 (out_max - out_min) / (in_max - in_min) * load
 * 6. 那如果要从 num 递增而函数计算值递减，我们只需要用 out_max 减去上一步的值即可
 */
function scale(num, in_min, in_max, out_min, out_max) {
  return out_max - ((out_max - out_min) / (in_max - in_min)) * num;
}
