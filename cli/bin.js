const fs = require("fs");
const ora = require("ora");
const chalk = require("chalk");

// 执行时，路径是在根目录下的，以  package.json 为准
const templatePath = "./cli/template";

function cli(name) {
  const spinner = ora(chalk.rgb(212, 99, 23).bgRgb(33, 44, 66)("下载中..."));

  fs.mkdir("./" + name, function () {
    const arr = makeArr();
    down(arr, name, spinner);
  });
}

function makeArr() {
  const arr = [];
  const newArr = read(arr, templatePath);
  return newArr;
}

function read(arr, path) {
  // 同步读取文件列表
  const files = fs.readdirSync(path);

  files.forEach((item) => {
    // 拿到每一条完整的路径
    const currentPath = path + "/" + item;

    // 检查状态
    const stat = fs.statSync(currentPath);

    // 根据类型放入不同的数组
    if (stat.isDirectory()) {
      arr.push(["dir", currentPath]);
      // 如果是一个目录，我们需要递归调用此方法本身
      read(arr, currentPath);
    } else {
      arr.push(["file", currentPath]);
    }
  });

  return arr;
}

function down(arr, name, spinner) {
  // 下载的目标目录
  const targetPath = "./" + name;

  // 循环
  while (arr.length > 0) {
    // arr 是二维数组，第一个值是 type，第二个才是路径
    const item = arr.shift();

    const path = targetPath + "/" + item[1].replace("./cli/template/", "");

    if (item[0] === "file") {
      const data = fs.readFileSync(item[1]);
      fs.writeFileSync(path, data);
    } else {
      fs.mkdirSync(path);
    }
  }
  finish(spinner);
}

function finish(spinner) {
  spinner.stop();
  console.log(chalk.green("下载完成"));
}

module.exports = cli;
