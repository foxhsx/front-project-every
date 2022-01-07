#!/usr/bin/env node

const commander = require('commander');
const genFile = require('./bin')

// 定义指令
commander.command('gen <name>').action(name => {
  // 这里不要提问，直接下载模板
  console.log(name);
  genFile(name);
})

// commander parse 方法来接收命令
commander.parse(process.argv)