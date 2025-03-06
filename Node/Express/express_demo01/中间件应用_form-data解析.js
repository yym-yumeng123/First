const express = require("express")
const multer = require("multer")
const app = express()

// 配置multer
const upload = multer({
  // 配置文件存储路径
  dest: "./uploads/",
})

// app.use(upload.any())

// app.post("/login", (req, res, next) => {
//   console.log(req.body, 'req.body')
//   res.send('登录成功')
// })

// 上传文件 单个文件 single('文件名key')
app.post("/upload", upload.single("file"), (req, res, next) => {
  console.log(req.file, "req.file")
  res.send("上传成功")
})

// 上传文件 多个文件
// app.post("/uploads", upload.array("files"), (req, res, next) => {
//   console.log(req.body, 'req.body')
//   res.send('上传成功')
// })

app.listen(3000, () => {
  console.log("form-data解析服务器启动成功")
})
