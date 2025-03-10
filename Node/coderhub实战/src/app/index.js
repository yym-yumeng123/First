const koa = require("koa")
const bodyParser = require("koa-bodyparser")
const app = new koa()
const userRouter = require('../router/user.router')
const errorHandler = require("./error-handle")

app.use(bodyParser())
app.use(userRouter.routes())
app.on("error", errorHandler)

module.exports = app
