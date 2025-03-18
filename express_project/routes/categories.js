const express = require("express")
const router = express.Router()

const { Category } = require("../models")
const { success, failure } = require("../utils/responses")

/**
 * 查询分类列表
 * @api {get} /categories 分类列表
 */
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAndCountAll({
      // 按id降序排序, 可能多个字段排序
      order: [["id", "DESC"]],
      // name 存在时, 按name模糊查询
    })
    success(
      res,
      {
        categories: categories.rows,
        total: categories.count,
      },
      "获取分类列表成功"
    )
  } catch (error) {
    failure(res, error)
  }
})

module.exports = router