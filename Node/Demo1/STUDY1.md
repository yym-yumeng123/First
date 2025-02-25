#### V8 引擎

1. 解析和编译：Parse
   - 解析：将 JavaScript 代码转换为抽象语法树（AST）。
2. Ignition: 解释器
   - 解释器：解释字节码，执行 JavaScript 代码。
3. 垃圾回收:
   - 垃圾回收：收集不再使用的对象，释放内存。

### Node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。它允许 JavaScript 代码在服务器上运行，而不是在浏览器中运行。Node.js 使用事件驱动、非阻塞式 I/O 模型，使其成为适用于高负载的 Web 应用程序的理想平台。

### Node 版本

- LTS: 长期支持版本
- Current: 最新版本

### Node 版本管理

- nvm: Node Version Manager 管理多个 Node.js 版本 不支持 windows
- n: Node.js 的包管理工具 不支持 windows
- nvm-windows: Node Version Manager for Windows 管理多个 Node.js 版本 支持 windows

### NODE 的 REPL

- Read Eval Print Loop: 读取-执行-打印-循环
- 是一个交互式解释器，可以输入 JavaScript 代码并立即执行
- 可以输入多行代码
- 可以输入多行代码

### Node 传递参数

全局对象: process 进程

- process.argv: 获取传递的参数 => 数组 第一个参数是 node 第二个参数是文件名 第三个参数是传递的参数
- process.env: 获取环境变量
- process.cwd(): 获取当前工作目录
- process.exit(): 退出程序

### 常见全局对象

- process 对象: process 提供了与当前进程相关的信息和控制
  - Node 的运行环境
  - 获取传递的参数
  - 获取环境变量
  - 获取当前工作目录
- console: 控制台
- 定时器: setTimeout、setInterval、clearTimeout、clearInterval
- 立即执行: setImmediate
- 微任务: process.nextTick
- Global: 全局对象 在浏览器中是 window 在 Node 中是 global
- Buffer: 缓冲区
- `__filename`: 获取当前文件的文件名 => 绝对路径 => 不在命令行中使用
- `__dirname`: 获取当前文件的目录名 => 绝对路径 => 不在命令行中使用
