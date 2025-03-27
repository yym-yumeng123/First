const express = require("express")
const router = express.Router()

const {
  registerUser,
  loginUser,
  // getUserProfile
} = require("../controllers/userController")
const {
  validateUserData,
  validateLoginData,
  checkUserUniqueness,
} = require("../middlewares/userMiddleware")

// 注册用户路由
router.post("/signup", validateUserData, checkUserUniqueness, registerUser)

// 登录路由
router.post("/signin", validateLoginData, loginUser)

// 获取用户信息路由
// router.get("/:id", getUserProfile)

module.exports = router
