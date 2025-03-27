const express = require("express")
const Joi = require("joi")
const bcrypt = require("bcrypt")
const router = express.Router()
const prisma = require("../lib/prisma")

// 用户验证模式
const userValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(3).max(20).required(),
  password: Joi.string().min(6).required(),
})

// 验证用户数据中间件
const validateUserData = (req, res, next) => {
  const { error } = userValidationSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.message })
  }
  next()
}

// 检查用户唯一性中间件
const checkUserUniqueness = async (req, res, next) => {
  const { email, username } = req.body
  
  try {
    // 检查邮箱唯一性
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    })
    if (existingEmail) {
      return res.status(400).json({ message: "该邮箱已被注册" })
    }

    // 检查用户名唯一性
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    })
    if (existingUsername) {
      return res.status(400).json({ message: "该用户名已被使用" })
    }
    
    next()
  } catch (error) {
    return res.status(500).json({ error: "服务器错误，请稍后再试" })
  }
}

// 注册用户
router.post("/", validateUserData, checkUserUniqueness, async (req, res) => {
  try {
    const { email, username, password } = req.body

    // 加密密码
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    })

    // 不返回密码
    const { password: _, ...userWithoutPassword } = user
    res.status(201).json(userWithoutPassword)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
