const express = require("express")
const router = express.Router()
const { Article } = require("../../models")
const { Op } = require("sequelize") // 操作符
const { NotFoundError, success, failure } = require("../../utils/response")
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
    success(
      res,
      {
        articles: articles.rows,
        total: articles.count,
        currentPage: parseInt(page),
        totalPages: Math.ceil(articles.count / parseInt(limit)),
      },
      "获取文章列表成功"
    )
  } catch (error) {
    failure(res, error)
  }
})

// 查询文章详情
router.get("/:id", async (req, res) => {
  try {
    const article = await getArticle(req)
    success(res, article, "获取文章详情成功")
  } catch (error) {
    failure(res, error)
  }
})

// 创建文章
router.post("/", async (req, res) => {
  const { title, content } = req.body
  try {
    const article = await Article.create({ title, content })
    success(res, article, "创建文章成功", 201)
  } catch (error) {
    failure(res, error)
  }
})

// 删除文章
router.delete("/:id", async (req, res) => {
  try {
    const article = await getArticle(req)
    await article.destroy()
    success(res, null, "删除文章成功")
  } catch (error) {
    failure(res, error)
  }
})

// 更新文章
router.put("/:id", async (req, res) => {
  try {
    const article = await getArticle(req)
    const { title, content } = req.body
    await article.update({ title, content })
    success(res, article, "更新文章成功")
  } catch (error) {
    failure(res, error)
  }
})

/**
 * 公共方法: 查询当前文章
 */
async function getArticle(req) {
  const { id } = req.params
  const article = await Article.findByPk(id)
  if (!article) {
    throw new NotFoundError("文章不存在")
  }
  return article
}

module.exports = router
