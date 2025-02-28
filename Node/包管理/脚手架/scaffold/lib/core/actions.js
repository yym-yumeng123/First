const path = require("path")
const download = require("download-git-repo")
const createProject = (project, others) => {
  console.log("创建项目", project, others)
  // 1. 创建项目目录
  const projectDir = path.join(process.cwd(), project)
  // 2. clone 项目
  download(
    "direct:https://github.com/vuejs/vitepress.git",
    projectDir,
    (err) => {
      if (err) {
        console.error(err)
      }
    }
  )
}

module.exports = {
  createProject,
}
