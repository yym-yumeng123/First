const { promisify } = require('util')
const path = require("path")
const { vueRepo, directRepo } = require("../config/repo-config")
const { commandSpawn } = require("../utils/terminal")

const download = promisify(require("download-git-repo"))
const createProject = async (project, others) => {
  console.log("创建项目", project, others)
  // 1. 创建项目目录
  const projectDir = path.join(process.cwd(), project)
  // 2. clone 项目
  await download(directRepo, projectDir, { clone: true })
  // 3. 安装依赖
  const isWindows = process.platform === "win32" ? "yarn.cmd" : "yarn";
  await commandSpawn(isWindows, ["install"], { cwd: `./${projectDir}` });

  // 4. npm run dev
  await commandSpawn("npm", ["run", "dev"], { cwd: `./${projectDir}` });

  // 5. 打开浏览器
  await commandSpawn("start", [`http://localhost:8080`], { cwd: `./${projectDir}` });
}

module.exports = {
  createProject,
}
