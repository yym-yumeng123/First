const Router = require("koa-router")
const UserController = require("../controller/user.controller")
const { verifyUser } = require("../middleware/user.middleware")
const userRouter = new Router({ prefix: "/users" })

// 注册用户 /users
userRouter.post("/", verifyUser, UserController.create)

module.exports = userRouter