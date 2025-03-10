const UserService = require("../service/user.service")

class UserController {
  async create(ctx, next) {
    // 获取用户参数
    const user = ctx.request.body
    // 调用 service 层 查询用户是否存在
    const result = await UserService.create(user)
    // 返回结果
    ctx.body = result
  }
}

module.exports = new UserController()
