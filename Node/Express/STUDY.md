### 为什么使用框架

1. 原生 http 模块开发, 需要处理请求头, 请求体, 响应头, 响应体, 路由, 中间件, 静态资源, 模板引擎, 数据库, 缓存, 日志, 监控, 部署, 运维等
2. 使用框架, 只需要关注业务逻辑, 其他的都交给框架处理
3. 框架: express

### 什么是 Express

Express 是一个基于 Node.js 平台的极速、开放、极简的 Web 开发框架。

### 基本使用

1. 安装

```bash
npm install express
```

2. 创建应用对象

```js
const express = require("express")
const app = express()
```

3. 创建路由

```js
app.get("/", (req, res) => {
  res.send("Hello World")
})
```

4. 启动服务器

```js
app.listen(3000, () => {
  console.log("服务器启动成功")
})
```

### 中间件

Express 是一个路由和中间件的 Web 框架。

- Express 应用程序本质上是一系列中间件函数的调用

中间件是 Express 中的一个重要概念, 它是一个函数, 可以访问请求对象(req), 响应对象(res), 以及应用对象(app)。

1. 执行任何代码
2. 更改请求和响应对象
3. 结束请求-响应周期
4. 调用堆栈中的下一个中间件 (放进 Stack 中)

如果中间件功能没有结束请求-响应周期, 必须调用 next() 方法将请求传递给下一个中间件, 否则请求将被挂起。

#### 应用中间件

```js
// 1. app.use()
app.use(function (req, res, next) {
  console.log("中间件")
  next()
})

// 2. app.get()
app.get("/", function (req, res, next) {
  console.log("中间件")
  next()
})
```


### 常用中间件

1. 解析请求体

```js
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
```
2. multer

```js
const multer = require("multer")
const upload = multer({ dest: "./uploads/" })

app.use(upload.any())
```

3. morgan

- 记录请求日志
```js
const morgan = require("morgan")

app.use(morgan("dev"))
```


### 客户端发送请求的方式

- get 请求的 URL 的 params 参数 `/user/:id`
- get 请求的 URL 的 query 参数 `/user?id=1`
- post 请求的 body 的 json 格式 `/user`
- post 请求的 form-data 参数 `/user`
- post 请求的 body 的 x-www-form-urlencoded 格式 `/user`

