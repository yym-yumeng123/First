const Router = require("koa-router")
const UserController = require("../controller/user.controller")

const userRouter = new Router({ prefix: "/users" })

// 注册用户 /users
userRouter.post("/", UserController.create)

module.exports = userRouter