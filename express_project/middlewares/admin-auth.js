const jwt = require("jsonwebtoken")
const { User } = require("../models")
const { UnauthorizedError } = require("../utils/errors")
const { success, failure } = require("../utils/responses")

module.exports = async (req, res, next) => {
  try {
    // 判断 token 是否存在
    const token = req.headers.authorization
    if (!token) {
      throw new UnauthorizedError("当前请求未携带token")
    }

    // 验证 token
    const decoded = jwt.verify(token, process.env.SECRET)

    // 从 jwt 中, 解析之前存入的 userId
    const user = await User.findByPk(decoded.userId)
    if (!user) {
      throw new UnauthorizedError("用户不存在")
    }
    req.user = user
    next()
  } catch (error) {
    return failure(res, error)
  }
}
