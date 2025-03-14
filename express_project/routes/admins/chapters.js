const express = require("express")
const router = express.Router()
const { Chapter, Course } = require("../../models")
const { Op } = require("sequelize") // 操作符
const { NotFoundError, success, failure } = require("../../utils/response")
// 获取章节列表
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query
    const offset = (page - 1) * limit
    const chapters = await Chapter.findAndCountAll({
      include: [
        {
          model: Course,
        },
      ],
      // 按id降序排序, 可能多个字段排序
      order: [
        ["rank", "ASC"],
        ["id", "DESC"],
      ],
      // title 存在时, 按title模糊查询
      offset: parseInt(offset),
      limit: parseInt(limit),
    })
    success(
      res,
      {
        chapters: chapters.rows,
        total: chapters.count,
        currentPage: parseInt(page),
        totalPages: Math.ceil(chapters.count / parseInt(limit)),
      },
      "获取章节列表成功"
    )
  } catch (error) {
    failure(res, error)
  }
})

// 查询章节详情
router.get("/:id", async (req, res) => {
  try {
    const chapter = await getChapter(req)
    success(res, chapter, "获取章节详情成功")
  } catch (error) {
    failure(res, error)
  }
})

// 创建章节
router.post("/", async (req, res) => {
  const { title, content, courseId, video, rank } = req.body
  try {
    const chapter = await Chapter.create({
      title,
      content,
      courseId,
      video,
      rank,
    })
    success(res, chapter, "创建章节成功", 201)
  } catch (error) {
    failure(res, error)
  }
})

// 删除章节
router.delete("/:id", async (req, res) => {
  try {
    const chapter = await getChapter(req)
    await chapter.destroy()
    success(res, null, "删除章节成功")
  } catch (error) {
    failure(res, error)
  }
})

// 更新章节
router.put("/:id", async (req, res) => {
  try {
    const chapter = await getChapter(req)
    const { title, content, courseId, video, rank } = req.body
    await chapter.update({ title, content, courseId, video, rank })
    success(res, chapter, "更新章节成功")
  } catch (error) {
    failure(res, error)
  }
})

/**
 * 公共方法: 查询当前章节
 */
async function getChapter(req) {
  const { id } = req.params
  const chapter = await Chapter.findByPk(id)
  if (!chapter) {
    throw new NotFoundError("章节不存在")
  }
  return chapter
}

module.exports = router
