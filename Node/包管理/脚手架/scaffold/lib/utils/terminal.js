/**
 * 执行终端命令
 */

// child_process 模块提供了创建子进程的能力
// spawn 方法可以创建一个子进程来执行命令
const { spawn } = require("child_process")

const commandSpawn = (...args) => {
  // 子进程的输出和错误信息 返回
  return new Promise((resolve, reject) => {
    // 创建子进程
    const childProcess = spawn(...args)
    // 监听子进程的输出
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    // 监听子进程的退出
    childProcess.on("close", () => {
      resolve()
    })
  })
}

module.exports = {
  commandSpawn,
}

