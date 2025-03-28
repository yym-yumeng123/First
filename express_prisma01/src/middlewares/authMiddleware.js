const jwt = require("jsonwebtoken")
const prisma = require("../lib/prisma")

// 白名单路径列表 - 这些路径不需要验证
const whitelist = [
  "/", // 首页/测试路由
  "/api/users/signin", // 登录路由
  "/api/users/signup", // 注册路由
  // 添加其他不需要验证的路径
]

const authenticate = async (req, res, next) => {
  console.log(req.path, "-----req.path")
  // 检查请求路径是否在白名单中
  if (whitelist.includes(req.path)) {
    return next()
  }

  let token
  // 检查请求头是否包含 Authorization 字段，并且以 Bearer 开头
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // 获取 token
      token = req.headers.authorization.split(" ")[1]
      // 验证 token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // 将用户信息添加到请求对象中
      req.user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          username: true,
          email: true,
          // 不返回密码
        },
      })
      next()
    } catch (error) {
      return res.status(401).json({ message: "未授权, token 无效" })
    }
  }

  // 如果 token 不存在，返回 401 状态码
  if (!token) {
    return res.status(401).json({ message: "未授权, token 不存在" })
  }
}

module.exports = {
  authenticate,
}
