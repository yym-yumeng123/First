const express = require("express")
const router = express.Router()
const { Course, Category, User } = require("../../models")
const { Op } = require("sequelize") // 操作符
const { NotFoundError, success, failure } = require("../../utils/response")
// 获取课程列表
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query
    const offset = (page - 1) * limit
    const courses = await Course.findAndCountAll({
      // 关联查询
      // attributes: {
      //   exclude: ["categoryId", "userId"],
      // },
      include: [
        {
          model: Category,
          // as: "category",
          attributes: ["id", "name"],
        },
        {
          model: User,
          // as: "user",
          attributes: ["id", "username"],
        },
      ],
      // 按id降序排序, 可能多个字段排序
      order: [["id", "DESC"]],
      offset: parseInt(offset),
      limit: parseInt(limit),
    })
    success(
      res,
      {
        courses: courses.rows,
        total: courses.count,
        currentPage: parseInt(page),
        totalPages: Math.ceil(courses.count / parseInt(limit)),
      },
      "获取课程列表成功"
    )
  } catch (error) {
    failure(res, error)
  }
})

// 查询课程详情
router.get("/:id", async (req, res) => {
  try {
    const course = await getCourse(req)
    success(res, course, "获取课程详情成功")
  } catch (error) {
    failure(res, error)
  }
})

// 创建课程
router.post("/", async (req, res) => {
  const {
    categoryId,
    userId,
    name,
    image,
    recommended,
    introductory,
    content,
  } = req.body
  try {
    const course = await Course.create({
      categoryId,
      userId,
      name,
      image,
      recommended,
      introductory,
      content,
    })
    success(res, course, "创建课程成功", 201)
  } catch (error) {
    failure(res, error)
  }
})

// 删除课程
router.delete("/:id", async (req, res) => {
  try {
    const course = await getCourse(req)
    await course.destroy()
    success(res, null, "删除课程成功")
  } catch (error) {
    failure(res, error)
  }
})

// 更新课程
router.put("/:id", async (req, res) => {
  try {
    const course = await getCourse(req)
    const {
      categoryId,
      userId,
      name,
      image,
      recommended,
      introductory,
      content,
    } = req.body
    await course.update({
      categoryId,
      userId,
      name,
      image,
      recommended,
      introductory,
      content,
    })
    success(res, course, "更新课程成功")
  } catch (error) {
    failure(res, error)
  }
})

/**
 * 公共方法: 查询当前课程
 */
async function getCourse(req) {
  const { id } = req.params
  const course = await Course.findByPk(id, {
    include: [
      {
        model: Category,
        // as: "category",
        attributes: ["id", "name"],
      },
      {
        model: User,
        // as: "user",
        attributes: ["id", "username"],
      },
    ],
  })
  if (!course) {
    throw new NotFoundError("课程不存在")
  }
  return course
}

/**
 * 公共方法: 查询当前分类 用户数据
 */
async function getCategoryAndUser() {
  return {
    include: [
      {
        model: Category,
        // as: "category",
        attributes: ["id", "name"],
      },
      {
        model: User,
        // as: "user",
        attributes: ["id", "username"],
      },
    ],
  }
}

module.exports = router
