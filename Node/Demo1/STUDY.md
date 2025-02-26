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

### JavaScript 的模块化

- 模块化: 将一个复杂的程序拆分成多个模块, 每个模块都有自己的功能, 模块之间可以相互调用
  - 每个模块都有自己的作用域, 互不干扰
  - 可以暴露模块中的内容, 供其他模块使用
  - 可以导入其他模块的内容, 供自己使用
- 立即执行函数: 立即执行函数可以创建一个独立的作用域, 互不干扰 (IIFE)
  - 代码混乱; 每个人写代码的规范不一样, 导致代码难以维护
- CommonJS 模块化规范 cjs
  - 每个文件就是一个模块
  - 导出: `module.exports = value`
  - 导入: `require(path)`
  - Node 中实现 CommonJS 模块化规范, 本质是对象引用赋值, 浅拷贝

```js
// 导出 exports = {}
exports.name = "张三"
exports.age = 18

// Module 是一个类, 每个文件都是一个模块
// module.exports = exports
// 会覆盖 exports, 导致 exports 失效, 新建一个对象
module.exports = {
  name: "李四",
  age: 20,
}

// 导入
const { name, age } = require("./module")
```

require 查找规则

1. 先看是否是内置模块, 例如: http, fs, path 等
2. 再看是否是第三方模块, 例如: express, mongoose 等
3. 再看是否是文件模块, 例如: ./module.js, ../module.js 等
   1. 如果文件模块没有指定文件后缀, 会按照以下顺序查找
      - 按照确切的文件名进行查找
      - 补全 `.js` 后缀进行查找
      - 补全 `.json` 后缀进行查找
      - 补全 `.node` 后缀进行查找
   2. 如果是目录, 会按照以下顺序查找
   - 查找 `package.json` 的 `main` 属性
   - 查找 `index.js`
   - 查找 `index.json`
   - 查找 `index.node`

- 模块在第一次加载后会被缓存, 所以多次调用 require 不会重复加载模块
- require 的加载过程是同步的, 所以 require 是一个阻塞操作
- require 循环引入, 加载顺序为图结构, 图在遍历的过程中采用深度优先遍历

### ES Modules

- ES Modules 是 JavaScript 的模块化规范, 是 ES6 引入的模块化规范
- 采用 `import` 和 `export` 关键字进行导入和导出

export 和 import 结合使用

```js
// named export 具名导出
import { name } from "./foo.js"
import { name as n } from "./foo.js"
import * as all from "./foo.js"

// 一般用于第三方库默认导出所有
export { name } from "./foo.js" // 结合使用

// 默认导出, 一个模块只能有一个默认导出
export default name from "./foo.js"
```


import 函数 `import()`

- 不能放在代码逻辑中, 必须放在代码的顶层
- 返回一个 Promise 对象
- 可以动态导入, 根据条件导入

```js
import("./foo.js").then((module) => {
  console.log(module)
})
```

#### ES Module 加载过程

- 异步加载: JS引擎在解析过程中, 遇到 import 会异步加载模块, 不会阻塞主线程
   - 设置了 type=module的 代码,相当于在script标签上加上了 async 属性


### Node 对 ES Modules 的支持

- 在 Node 中使用 ES Modules 需要设置 `type` 为 `module`
- 在 Node 中使用 ES Modules 需要使用 `import` 和 `export` 关键字


