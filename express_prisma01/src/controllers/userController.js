const bcrypt = require("bcrypt")
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
    res.status(201).json(userWithoutPassword)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  registerUser
} 