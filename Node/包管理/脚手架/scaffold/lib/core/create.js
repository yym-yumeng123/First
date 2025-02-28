const { program } = require("commander")

const createCommands = () => {
  program
    // [others...] 表示可选参数
    .command("create <project> [others...]")
    .description("创建项目")
    .action((project, others) => {
      // project 是必选参数 代表项目名称
      // others 是可选参数 代表其他参数
      // 获取命令行参数 项目名称
      console.log(project, others)
    })
}

module.exports = createCommands
