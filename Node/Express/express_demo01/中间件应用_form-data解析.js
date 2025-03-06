const express = require("express")
const multer = require("multer")
const app = express()

const upload = multer()

app.use(upload.any())

app.post("/login", (req, res, next) => {
  console.log(req.body, 'req.body')
  res.send('登录成功')
})


app.listen(3000, () => {
  console.log("form-data解析服务器启动成功")
})
