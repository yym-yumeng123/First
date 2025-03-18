const express = require("express")
const router = express.Router()
const { Op } = require("sequelize")
const { User } = require("../../models")
const {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} = require("../../utils/errors")
const { success, failure } = require("../../utils/responses")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

/**
 * 管理员登录
 * @api {post} /auth/sign_in Login
 */
router.post("/sign_in", async (req, res) => {
  try {
    // login 既可以是邮箱也可以是用户名
    const { login, password } = req.body
    if (!login) {
      throw new BadRequestError("登录名不能为空")
    }
    if (!password) {
      throw new BadRequestError("密码不能为空")
    }
    const condition = {
      where: {
        [Op.or]: [{ username: login }, { email: login }],
      },
    }
    const user = await User.findOne(condition)
    if (!user) {
      throw new NotFoundError("用户不存在")
    }
    // 验证密码
    const isPasswordValid = bcrypt.compareSync(password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedError("密码不正确")
    }
    // 验证是否是管理员
    // if (!user.role !== 100) {
    //   throw new UnauthorizedError("您不是管理员")
    // }
    const token = jwt.sign({ userId: user.id }, process.env.SECRET, {
      expiresIn: "30d",
    })
    success(res, { token: token }, "登录成功")
  } catch (error) {
    failure(res, error)
  }
})

module.exports = router
