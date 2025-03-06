const express = require("express")

const app = express()

// 必须调用 next() 方法, 否则请求会被挂起
app.use((req, res, next) => {
  console.log("注册了第一个中间件")
  next()
})

app.get('/home', (req, res, next) => {
  console.log("注册了第二个中间件")
  next()
}, (req, res, next) => {
  console.log("注册了第三个中间件")
  next()
})

app.listen(3000, () => {
  console.log("服务器启动成功")
})
