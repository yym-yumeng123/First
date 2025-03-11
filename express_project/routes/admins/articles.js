const express = require("express")
const router = express.Router()
const { Article } = require("../../models")
const { Op } = require("sequelize") // 操作符

// 获取文章列表
router.get("/", async (req, res) => {
  try {
    const { title, page = 1, limit = 10 } = req.query
    const offset = (page - 1) * limit
    const articles = await Article.findAndCountAll({
      // 按id降序排序, 可能多个字段排序
      order: [["id", "DESC"]],
      // title 存在时, 按title模糊查询
      where: title ? { title: { [Op.like]: `%${title}%` } } : undefined,
      offset: parseInt(offset),
      limit: parseInt(limit),
    })
    res.json({
      status: true,
      message: "获取文章列表成功",
      data: {
        articles: articles.rows,
        total: articles.count,
        currentPage: parseInt(page),
        totalPages: Math.ceil(articles.count / parseInt(limit)),
      },
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
    const article = await Article.create({ title, content })
    res.status(201).json({
      status: true,
      message: "创建文章成功",
      data: article,
    })
  } catch (error) {
    // 处理验证错误
    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({
        status: false,
        message: "创建文章失败",
        errors: error.errors.map((err) => err.message),
      })
    }
    // 处理其他错误
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
