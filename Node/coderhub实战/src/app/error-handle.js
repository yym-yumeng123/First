const { USERNAME_OR_PASSWORD_IS_REQUIRED, USER_ALREADY_EXISTS } = require("../constants/error-types")

const errorHandler = (error, ctx) => {
  let status = 500
  let message = "服务器错误"
  switch (error.message) {
    case USERNAME_OR_PASSWORD_IS_REQUIRED:
      status = 400
      message = "用户名或密码不能为空"
      break
    case USER_ALREADY_EXISTS:
      status = 400
      message = "用户已存在"
      break
    default:
      break
  }
  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler
