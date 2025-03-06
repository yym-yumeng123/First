const express = require('express')

const app = express()

// 解析 params 参数
app.get('/product/:id/:name', (req, res) => {
  console.log(req.params)
  res.send('商品详情数据')
})

// 解析 query 参数 ?id=1&name=2
app.get('/login', (req, res) => {
  console.log(req.query)
  res.send('登录成功')
})



app.listen(3000, () => {
  console.log('服务器启动成功')
})

