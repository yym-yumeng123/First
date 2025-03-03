const { program } = require("commander")
const { createProject, createComponent } = require("./actions")
const createCommands = () => {
  program
    // [others...] 表示可选参数
    .command("create <project> [others...]")
    .description("创建项目")
    .action((project, others) => {
      // project 是必选参数 代表项目名称
      // others 是可选参数 代表其他参数
      // 获取命令行参数 项目名称
      createProject(project, others)
    })

  // 添加 命令, 扩展命令
  program.command("addcpn <name>")
    .description("add vue component, 例: vite addcpn HelloWorld -d src/components")
    .action((name) => {
      createComponent(name, program.dest || 'src/components')
    })
}

module.exports = createCommands
