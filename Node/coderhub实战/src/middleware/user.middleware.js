const { USERNAME_OR_PASSWORD_IS_REQUIRED, USER_ALREADY_EXISTS } = require("../constants/error-types")
const UserService = require("../service/user.service")
async function verifyUser(ctx, next) {
  const { username, password } = ctx.request.body
  console.log(username, password, "username, password....")
  if (!username || !password) {
    console.log("用户名或密码不能为空")
    return ctx.app.emit("error", new Error(USERNAME_OR_PASSWORD_IS_REQUIRED), ctx)
  }
  next()
}

module.exports = {
  verifyUser,
}

