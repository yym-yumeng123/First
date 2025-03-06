const express = require('express')
const userRouter = require('./routes/user')

const app = express()

app.use(userRouter)


app.listen(3000, () => {
  console.log('服务器启动成功')
})

