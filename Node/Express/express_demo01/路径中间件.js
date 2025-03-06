const express = require("express")

const app = express()

// 编写路径匹配中间件
app.use("/home", (req, res, next) => {
  console.log("注册了路径匹配中间件01")
  next()
})

app.use("/home", (req, res, next) => {
  console.log("注册了路径匹配中间件02")
  next()
})



app.listen(3000, () => {
  console.log("服务器启动成功")
})
