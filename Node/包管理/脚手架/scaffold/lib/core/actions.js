const path = require("path")
const download = require("download-git-repo")
const { vueRepo, directRepo } = require("../config/repo-config")
const createProject = (project, others) => {
  console.log("创建项目", project, others)
  // 1. 创建项目目录
  const projectDir = path.join(process.cwd(), project)
  // 2. clone 项目
  const handleCallback = (err) => {
    if (err) {
      console.error("项目创建失败:", err)
    } else {
      console.log("项目创建成功")
    }
  }
  download(directRepo, projectDir, { clone: true }, handleCallback)
}

module.exports = {
  createProject,
}
