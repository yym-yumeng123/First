const express = require("express")
const cors = require("cors")
require("dotenv").config()
const usersRouter = require("./routes/users")
const ledgerRouter = require("./routes/ledger")
const { authenticate } = require("./middlewares/authMiddleware")
const app = express()
const port = process.env.PORT || 3000

// 中间件
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(authenticate)

// 路由
app.use("/api/users", usersRouter)
app.use("/api/ledgers", ledgerRouter)

// 测试路由
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Express API with Prisma and MySQL" })
})

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
