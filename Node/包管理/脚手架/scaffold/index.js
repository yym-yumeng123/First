#!/usr/bin/env node

const { program } = require("commander")

// 动态获取 package.json 中的 version 版本号
program.version(require("./package.json").version)

// 解析命令行参数
program.parse(process.argv)
