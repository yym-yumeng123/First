const express = require("express")
const router = express.Router()
const prisma = require("../lib/prisma")

// 注册用户
router.post("/", async (req, res) => {
  try {
    const { email, username, password } = req.body
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password,
      },
    })
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
