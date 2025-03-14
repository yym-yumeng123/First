const express = require("express")
const router = express.Router()
const { Category, Course } = require("../../models")
const { Op } = require("sequelize") // 操作符
const { NotFoundError, success, failure } = require("../../utils/response")
// 获取分类列表
router.get("/", async (req, res) => {
  try {
    const { name, page = 1, limit = 10 } = req.query
    const offset = (page - 1) * limit
    const categories = await Category.findAndCountAll({
      // 按id降序排序, 可能多个字段排序
      order: [["id", "DESC"]],
      // name 存在时, 按name模糊查询
      where: name ? { name: { [Op.like]: `%${name}%` } } : undefined,
      offset: parseInt(offset),
      limit: parseInt(limit),
    })
    success(
      res,
      {
        categories: categories.rows,
        total: categories.count,
        currentPage: parseInt(page),
        totalPages: Math.ceil(categories.count / parseInt(limit)),
      },
      "获取分类列表成功"
    )
  } catch (error) {
    failure(res, error)
  }
})

// 查询分类详情
router.get("/:id", async (req, res) => {
  try {
    const category = await getCategory(req)
    success(res, category, "获取分类详情成功")
  } catch (error) {
    failure(res, error)
  }
})

// 创建分类
router.post("/", async (req, res) => {
  const { name, rank } = req.body
  try {
    const category = await Category.create({ name, rank })
    success(res, category, "创建分类成功", 201)
  } catch (error) {
    failure(res, error)
  }
})

// 删除分类
router.delete("/:id", async (req, res) => {
  try {
    const category = await getCategory(req)
    // 判断是否存在课程
    if (category.courses.length > 0) {
      throw new BadRequestError("分类下存在课程, 不能删除")
    }
    await category.destroy()
    success(res, null, "删除分类成功")
  } catch (error) {
    failure(res, error)
  }
})

// 更新分类
router.put("/:id", async (req, res) => {
  try {
    const category = await getCategory(req)
    const { name, rank } = req.body
    await category.update({ name, rank })
    success(res, category, "更新分类成功")
  } catch (error) {
    failure(res, error)
  }
})

/**
 * 公共方法: 查询当前分类
 */
async function getCategory(req) {
  const { id } = req.params
  const category = await Category.findByPk(id, {
    include: [
      {
        model: Course,
        as: "courses",
      },
    ],
  })
  if (!category) {
    throw new NotFoundError("分类不存在")
  }
  return category
}

module.exports = router
