const express = require("express")

const app = express()


// 路径和方法匹配中间件
app.get("/home", (req, res, next) => {
  console.log("注册了路径和方法匹配中间件01")
  next()
})

app.post("/home", (req, res, next) => {
  console.log("注册了路径和方法匹配中间件02")
  next()
})


app.listen(3000, () => {
  console.log("服务器启动成功")
})
