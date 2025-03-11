const express = require("express")
const router = express.Router()
const { Article } = require("../../models")

router.get("/", async (req, res) => {
  try {
    // 获取文章列表
    const articles = await Article.findAll({
      // 按id降序排序, 可能多个字段排序
      order: [["id", "DESC"]],
    })
    res.json({
      status: true,
      message: "获取文章列表成功",
      data: articles,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "获取文章列表失败",
      errors: [error.message],
    })
  }
})

module.exports = router
