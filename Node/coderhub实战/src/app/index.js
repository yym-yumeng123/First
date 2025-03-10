const koa = require("koa")
const bodyParser = require("koa-bodyparser")
const app = new koa()
const userRouter = require('../router/user.router')

app.use(bodyParser())
app.use(userRouter.routes())

module.exports = app
