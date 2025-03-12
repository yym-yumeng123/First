const express = require("express")
const router = express.Router()
const { User } = require("../../models")
const { Op } = require("sequelize") // 操作符
const { NotFoundError, success, failure } = require("../../utils/response")
// 获取文章列表
router.get("/", async (req, res) => {
  try {
    const { name, page = 1, limit = 10 } = req.query
    const offset = (page - 1) * limit
    const users = await User.findAndCountAll({
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
        users: users.rows,
        total: users.count,
        currentPage: parseInt(page),
        totalPages: Math.ceil(users.count / parseInt(limit)),
      },
      "获取用户列表成功"
    )
  } catch (error) {
    failure(res, error)
  }
})

// 查询用户详情
router.get("/:id", async (req, res) => {
  try {
    const user = await getUser(req)
    success(res, user, "获取用户详情成功")
  } catch (error) {
    failure(res, error)
  }
})

// 创建用户
router.post("/", async (req, res) => {
  const { email, username, password, nickname, sex, company, introduce, role } = req.body
  try {
    const user = await User.create({ email, username, password, nickname, sex, company, introduce, role })
    success(res, user, "创建用户成功", 201)
  } catch (error) {
    failure(res, error)
  }
})

// 删除用户
router.delete("/:id", async (req, res) => {
  try {
    const user = await getUser(req)
    await user.destroy()
    success(res, null, "删除用户成功")
  } catch (error) {
    failure(res, error)
  }
})

// 更新用户
router.put("/:id", async (req, res) => {
  try {
    const user = await getUser(req)
    const { email, username, password, nickname, sex, company, introduce, role } = req.body
    await user.update({ email, username, password, nickname, sex, company, introduce, role })
    success(res, user, "更新用户成功")
  } catch (error) {
    failure(res, error)
  }
})

/**
 * 公共方法: 查询当前用户
 */
async function getUser(req) {
  const { id } = req.params
  const user = await User.findByPk(id)
  if (!user) {
    throw new NotFoundError("用户不存在")
  }
  return user
}

module.exports = router
