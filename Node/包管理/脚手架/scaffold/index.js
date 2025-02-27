#!/usr/bin/env node

const { program } = require("commander")

// 添加命令行参数, 在 --help 中显示
program.option("-n, --name", "显示脚手架名称")
program.option("-d, --dest <dest>", "a destination folder, default is current folder")
program.option("-f, --framework <framework>", "a framework, default is vue3")

program.on("--help", () => {
  console.log("其他参数:")
  console.log("  -n, --name 显示脚手架名称")
  console.log("  -d, --dest 指定目标文件夹, 默认是当前文件夹")
  console.log("  -f, --framework 指定框架, 默认是 vue3")
})

// 动态获取 package.json 中的 version 版本号
program.version(require("./package.json").version)

// 解析命令行参数
program.parse(process.argv)

// 获取命令行参数
const options = program.opts()
console.log(options)
