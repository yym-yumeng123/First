const express = require("express")

const app = express()

// 解析请求体
app.use(express.json()) // 解析json请求体
// extended: true 表示使用 querystring 模块解析, false 表示使用 qs 模块解析
app.use(express.urlencoded({ extended: true })) // 解析urlencoded请求体

app.post("/login", (req, res, next) => {
  console.log(req.body, 'req.body')
  res.send('登录成功')
})


app.listen(3000, () => {
  console.log("服务器启动成功")
})
