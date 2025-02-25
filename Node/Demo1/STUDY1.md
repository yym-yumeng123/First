#### V8引擎

1. 解析和编译：Parse
   - 解析：将JavaScript代码转换为抽象语法树（AST）。
2. Ignition: 解释器
   - 解释器：解释字节码，执行JavaScript代码。
3. 垃圾回收:
   - 垃圾回收：收集不再使用的对象，释放内存。


### Node.js

Node.js是一个基于Chrome V8引擎的JavaScript运行环境。它允许JavaScript代码在服务器上运行，而不是在浏览器中运行。Node.js使用事件驱动、非阻塞式I/O模型，使其成为适用于高负载的Web应用程序的理想平台。

### Node 版本

- LTS: 长期支持版本
- Current: 最新版本


### Node 版本管理

- nvm: Node Version Manager 管理多个Node.js版本 不支持windows
- n: Node.js的包管理工具 不支持windows
- nvm-windows: Node Version Manager for Windows 管理多个Node.js版本 支持windows


### NODE 的 REPL

- Read Eval Print Loop: 读取-执行-打印-循环
- 是一个交互式解释器，可以输入JavaScript代码并立即执行
- 可以输入多行代码
- 可以输入多行代码


### Node 传递参数

全局对象: process 进程

- process.argv: 获取传递的参数 => 数组 第一个参数是node 第二个参数是文件名 第三个参数是传递的参数
- process.env: 获取环境变量
- process.cwd(): 获取当前工作目录
- process.exit(): 退出程序

