const express = require('express')

const app = express()

// 设置静态资源目录
app.use(express.static("public"))
app.listen(3000, () => {
  console.log('服务器启动成功')
})

