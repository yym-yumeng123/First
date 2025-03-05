const express = require("express")

const app = express()

// 创建路由
app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(3000, () => {
  console.log("服务器启动成功")
})
