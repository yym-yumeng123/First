const express = require("express")

// 创建应用对象, 类似 http.createServer()
const app = express()

// 创建路由
app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(3000, () => {
  console.log("服务器启动成功")
})
