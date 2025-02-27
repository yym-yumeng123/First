#!/usr/bin/env node
const { program } = require("commander")
const helpOptions = require("./lib/core/help")
const packageInfo = require("./package.json")

// 动态获取 package.json 中的 version 版本号
program.version(packageInfo.version)

// 帮助和可选信息
helpOptions()

// 解析命令行参数
program.parse(process.argv)

// 获取命令行参数
const options = program.opts()
console.log(options)
