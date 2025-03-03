const { promisify } = require("util")
const path = require("path")
const { vueRepo, directRepo } = require("../config/repo-config")
const { commandSpawn } = require("../utils/terminal")
const { compile, writeToFile } = require("../utils/utils")

const download = promisify(require("download-git-repo"))

// 创建项目的 命令
const createProject = async (project, others) => {
  console.log("创建项目", project, others)
  // 1. 创建项目目录 返回项目路径
  const projectDir = path.join(process.cwd(), project)
  // 2. clone 项目
  await download(directRepo, projectDir, { clone: true })
  console.log(projectDir, "projectDir")
  // 3. 安装依赖
  // await installDependencies(projectDir);
  const isWindows = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpawn(isWindows, ["install"], { cwd: projectDir })

  // 4. 启动项目
  await commandSpawn(isWindows, ["run", "start"], { cwd: projectDir })

  // 5. 打开浏览器
  // open 模块
}

// 添加组件的 命令
const createComponent = async (name, dest) => {
  console.log("添加组件", name, dest)
  // 增加组件, 先有组件模板 .ejs 文件
  const result = await compile("vue-component.ejs", { name, lowerName: name.toLowerCase() })
  console.log(result, "result")
}

module.exports = {
  createProject,
  createComponent,
}
