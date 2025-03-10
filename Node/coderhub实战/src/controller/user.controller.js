const UserService = require("../service/user.service")

class UserController {
  async create(ctx, next) {
    // 获取用户参数
    const user = ctx.request.body
    // 调用 service 层 查询用户是否存在
    const result = await UserService.create(user)
    // 返回结果, 成功, 返回 200 状态码, 失败, 返回 400 状态码
    ctx.body = {
      message: "用户创建成功",
      data: result
    }
  }
}

module.exports = new UserController()
