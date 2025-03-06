const express = require('express')

const app = express()

app.get('/', (req, res) => {
  // res.send({
  //   name: '张三',
  //   age: 18
  // })
  res.status(204)
  res.json({
    name: '张三',
    age: 18
  })
})

app.listen(3000, () => {
  console.log('服务器启动成功')
})
