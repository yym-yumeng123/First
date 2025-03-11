const express = require("express")
const router = express.Router()
const { Article } = require("../../models")

// 获取文章列表
router.get("/", async (req, res) => {
  try {
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

// 查询文章详情
router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const article = await Article.findByPk(id)
    if (!article) {
      return res.status(404).json({
        status: false,
        message: "文章不存在",
      })
    }
    res.json({
      status: true,
      message: "获取文章详情成功",
      data: article,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "获取文章详情失败",
      errors: [error.message],
    })
  }
})


module.exports = router
