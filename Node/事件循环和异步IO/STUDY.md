### 什么是时间循环

- 我把时间循环理解为我们编写的 JavaScript 和 浏览器或者 Node 之间的桥梁

### 进程和线程

- 进程(process): 计算机已经运行的程序
  - 启动一个 应用程序, 会默认启动一个进程(也可能多个进程)
- 线程(thread): 操作系统能够运行运算调度的最小单位
  - 每一个进程中, 都会启动一个线程来执行程序中的代码, 称为主线程
- 进程是线程的容器

- 举例:
  - 操作系统类似工厂
  - 工厂有很多车间, 车间就是进程
  - 每个车间有工人, 工人就是线程

### 宏任务 微任务

事件循环维护两个队列:

- 宏任务队列: ajax setTimeout setInterval DOM监听 UI Rending
- 微任务队列: Promise的then回调 Mutation Observer API queneMicrotask() 等


优先级:

1. 顶层 script 代码先执行
2. 在执行任何一个宏任务之前, 查看微任务队列是否有任务需要执行
   1. 宏任务执行之前, 必须保证微任务队列是空的
   2. 不为空, 优先执行微任务队列中的任务

async await 是 Promise 的一个语法糖

- await xxx 相当于 new Promise 立即执行
- await 下面相当于 .then 中 微任务回调