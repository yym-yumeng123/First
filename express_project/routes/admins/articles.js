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

// 创建文章
router.post("/", async (req, res) => {
  const { title, content } = req.body
  try {
    if (!title || !content) {
      return res.status(400).json({
        status: false,
        message: "标题和内容不能为空",
      })
    }
    const article = await Article.create({ title, content })
    res.status(201).json({
      status: true,
      message: "创建文章成功",
      data: article,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "创建文章失败",
      errors: [error.message],
    })
  }
})

// 删除文章
router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const article = await Article.findByPk(id)
    if (!article) {
      return res.status(404).json({
        status: false,
        message: "文章不存在",
      })
    }
    await article.destroy()
    res.json({
      status: true,
      message: "删除文章成功",
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "删除文章失败",
      errors: [error.message],
    })
  }
})

// 更新文章
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { title, content } = req.body
    const article = await Article.findByPk(id)
    if (!article) {
      return res.status(404).json({
        status: false,
        message: "文章不存在",
      })
    }
    await article.update({ title, content })
    res.json({
      status: true,
      message: "更新文章成功",
      data: article,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "更新文章失败",
      errors: [error.message],
    })
  }
})

module.exports = router
