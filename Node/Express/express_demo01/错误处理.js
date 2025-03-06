const express = require('express')

const app = express()

app.post("/login", (req, res) => {
  // res.send("登录成功")
  throw new Error("登录失败")
})

// 错误处理中间件
// 参数: err, req, res, next
app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send({
    code: 500,
    message: err.message
  })
})


app.listen(3000, () => {
  console.log('服务器启动成功')
})

