const express = require("express")
const fs = require("fs")
const morgan = require("morgan")

const app = express()

app.use(morgan("combined", {
  stream: fs.createWriteStream("./logs/access.log", { flags: "a+" })
}))

app.get("/home", (req, res) => {
  res.send("Hello World")
})

app.listen(3000, () => {
  console.log("服务器启动成功")
})
