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

// // 用户登录控制器
// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body
    
//     // 查找用户
//     const user = await prisma.user.findUnique({
//       where: { email },
//     })
    
//     // 用户不存在
//     if (!user) {
//       return res.status(401).json({ message: "邮箱或密码不正确" })
//     }
    
//     // 验证密码
//     const passwordMatch = await bcrypt.compare(password, user.password)
//     if (!passwordMatch) {
//       return res.status(401).json({ message: "邮箱或密码不正确" })
//     }
    
//     // 登录成功，返回用户信息（不包含密码）
//     const { password: _, ...userWithoutPassword } = user
//     res.status(200).json({ 
//       message: "登录成功", 
//       user: userWithoutPassword 
//     })
//   } catch (error) {
//     res.status(500).json({ error: "服务器错误，请稍后再试" })
//   }
// }

// // 获取用户信息控制器
// const getUserProfile = async (req, res) => {
//   try {
//     const { id } = req.params
    
//     const user = await prisma.user.findUnique({
//       where: { id: Number(id) },
//     })
    
//     if (!user) {
//       return res.status(404).json({ message: "用户不存在" })
//     }
    
//     // 不返回密码
//     const { password: _, ...userWithoutPassword } = user
//     res.status(200).json(userWithoutPassword)
//   } catch (error) {
//     res.status(500).json({ error: "服务器错误，请稍后再试" })
//   }
// }

module.exports = {
  registerUser,
  loginUser,
  getUserProfile
} 