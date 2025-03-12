const express = require("express")
const router = express.Router()
const { Setting } = require("../../models")
const { NotFoundError, success, failure } = require("../../utils/response")

// 查询设置详情
router.get("/", async (req, res) => {
  try {
    const setting = await getSetting()
    success(res, setting, "获取设置详情成功")
  } catch (error) {
    failure(res, error)
  }
})

// 更新设置
router.put("/", async (req, res) => {
  try {
    const setting = await getSetting()
    const { name, icp, copyright } = req.body
    await setting.update({ name, icp, copyright })
    success(res, setting, "更新设置成功")
  } catch (error) {
    failure(res, error)
  }
})

/**
 * 公共方法: 查询当前设置
 */
async function getSetting() {
  const setting = await Setting.findOne()
  if (!setting) {
    throw new NotFoundError("设置不存在")
  }
  return setting
}

module.exports = router
