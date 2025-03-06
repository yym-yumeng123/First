const express = require("express")

// 创建应用对象, 类似 http.createServer()
const app = express()

// 编写普通的中间件
// use 方法注册中间件, 可以注册多个中间件
app.use((req, res, next) => {
  console.log("注册了第一个中间件")
  next()
})

app.use((req, res, next) => {
  console.log("注册了第二个中间件")
  next()
})

// 编写路由
app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(3000, () => {
  console.log("服务器启动成功")
})
