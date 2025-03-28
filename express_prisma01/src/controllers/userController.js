const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const prisma = require("../lib/prisma")

// 用户注册控制器
const registerUser = async (req, res) => {
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
    res.status(201).json({
      message: "注册成功",
      data: userWithoutPassword,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// 用户登录控制器
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    // 查找用户
    const user = await prisma.user.findUnique({
      where: { email },
    })

    // 用户不存在
    if (!user) {
      return res.status(401).json({ message: "邮箱不存在" })
    }

    // 验证密码
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(401).json({ message: "密码不正确" })
    }

    // 登录成功，返回 token
    const { id } = user
    res.status(200).json({
      message: "登录成功",
      token: jwt.sign({ userId: id }, process.env.JWT_SECRET, { expiresIn: "2h" }),
    })

  } catch (error) {
    res.status(500).json({ error: "服务器错误，请稍后再试" })
  }
}

// 获取当前用户信息控制器
const getCurrentUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "获取当前用户信息成功",
      data: req.user,
    })
  } catch (error) {
    res.status(500).json({ error: "服务器错误，请稍后再试" })
  }
}

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
}
