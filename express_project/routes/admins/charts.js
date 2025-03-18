const express = require("express")
const router = express.Router()
const { User } = require("../../models")
const { success, failure } = require("../../utils/response")

/**
 * 统计用户性别
 */

router.get("/sex", async function (req, res) {
  try {
    const male = await User.count({
      where: {
        sex: 0,
      },
    })
    const female = await User.count({
      where: {
        sex: 1,
      },
    })
    const unknown = await User.count({
      where: {
        sex: 2,
      },
    })
    const data = [
      { name: "男", value: male },
      { name: "女", value: female },
      { name: "未知", value: unknown },
    ]
    success(res, data, "获取用户性别成功")
  } catch (error) {
    failure(res, error)
  }
})

module.exports = router
