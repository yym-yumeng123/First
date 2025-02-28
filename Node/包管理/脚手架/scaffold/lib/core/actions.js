const { promisify } = require("util")
const path = require("path")
const { vueRepo, directRepo } = require("../config/repo-config")
const { commandSpawn } = require("../utils/terminal")

const download = promisify(require("download-git-repo"))
const createProject = async (project, others) => {
  console.log("创建项目", project, others)
  // 1. 创建项目目录 返回项目路径
  const projectDir = path.join(process.cwd(), project)
  // 2. clone 项目
  await download(directRepo, projectDir, { clone: true })
  console.log(projectDir, "projectDir")
  // 3. 安装依赖
  // await installDependencies(projectDir);
  await commandSpawn("npm.cmd", ["install"], { cwd: projectDir })

  // 4. npm run dev
  await commandSpawn("npm.cmd", ["run", "start"], { cwd: projectDir })

  // 5. 打开浏览器
  // open 模块
}

module.exports = {
  createProject,
}
