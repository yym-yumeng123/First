const express = require("express")
const router = express.Router()
const { Course, Category, User } = require("../models")
const { success, failure } = require("../utils/responses")
/*
 * GET home page.
 * 查询首页数据
 */
router.get("/", async function (req, res, next) {
  try {
    // 焦点图 (推荐课程)
    const recommendedCourses = await Course.findAll({
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
        {
          model: User,
          as: "user",
          attributes: ["id", "username", "nickname", "avatar", "company"],
        },
      ],
      where: {
        recommended: true,
      },
      limit: 5,
      order: [["createdAt", "DESC"]],
    })

    // 人气课程
    const likesCourses = await Course.findAll({
      order: [
        ["likesCount", "DESC"],
        ["id", "DESC"],
      ],
      limit: 5,
    })

    // 入门课程
    const intoducoryCourses = await Course.findAll({
      where: {
        introductory: "入门",
      },
      limit: 5,
    })

    success(
      res,
      {
        recommendedCourses,
        likesCourses,
        intoducoryCourses,
      },
      "首页数据获取成功"
    )
  } catch (error) {
    failure(res, error)
  }
})

module.exports = router
