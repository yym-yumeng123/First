const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")

const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users")

// 后台管理
const adminArticlesRouter = require("./routes/admins/articles")
const adminCategoriesRouter = require("./routes/admins/categories")
const adminSettingsRouter = require("./routes/admins/settings")

const app = express()

app.use(logger("dev"))
// 解析请求体
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// 解析cookie
app.use(cookieParser())
// 静态文件
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/users", usersRouter)

// 后台管理
app.use("/admin/articles", adminArticlesRouter)
app.use("/admin/categories", adminCategoriesRouter)
app.use("/admin/settings", adminSettingsRouter)

module.exports = app
