const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const adminAuth = require("./middlewares/admin-auth")
const cors = require("cors")

require("dotenv").config()

// 前台
const indexRouter = require("./routes/index")
const catrgoriesRouter = require("./routes/categories")
const usersRouter = require("./routes/users")

// 后台管理
const adminArticlesRouter = require("./routes/admins/articles")
const adminCategoriesRouter = require("./routes/admins/categories")
const adminSettingsRouter = require("./routes/admins/settings")
const adminUsersRouter = require("./routes/admins/users")
const adminCoursesRouter = require("./routes/admins/courses")
const adminChaptersRouter = require("./routes/admins/chapters")
const adminChartRouter = require("./routes/admins/charts")
const adminAuthRouter = require("./routes/admins/auth")

const app = express()

app.use(logger("dev"))
// 解析请求体
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// 解析cookie
app.use(cookieParser())
// 静态文件
app.use(express.static(path.join(__dirname, "public")))

// 跨域
app.use(cors())

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/categories", catrgoriesRouter)

// 后台管理
app.use("/admin/articles", adminAuth, adminArticlesRouter)
app.use("/admin/categories", adminAuth, adminCategoriesRouter)
app.use("/admin/settings", adminAuth, adminSettingsRouter)
app.use("/admin/users", adminAuth, adminUsersRouter)
app.use("/admin/courses", adminAuth, adminCoursesRouter)
app.use("/admin/chapters", adminAuth, adminChaptersRouter)
app.use("/admin/chart", adminAuth, adminChartRouter)
app.use("/admin/auth", adminAuthRouter)
module.exports = app
