/**
 * 执行终端命令
 */

// child_process 模块提供了创建子进程的能力
// spawn 方法可以创建一个子进程来执行命令
const { spawn } = require("child_process")

// 安装依赖
const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args)
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    childProcess.on("close", () => {
      resolve()
    })
  })
}

function installDependencies(projectPath) {
  return new Promise((resolve, reject) => {
    const isWindows = process.platform === "win32" ? "npm.cmd" : "npm";
    const npm = spawn(isWindows, ['install'], {
      cwd: projectPath, // 指定项目路径
      stdio: 'inherit', // 继承父进程的输入输出
    });

    npm.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`npm install 失败，退出码：${code}`));
      }
    });

    npm.on('error', (err) => {
      reject(new Error(`无法启动 npm 进程：${err.message}`));
    });
  });
}


module.exports = {
  commandSpawn,
  installDependencies,
}

