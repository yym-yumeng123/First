const express = require('express')

const router = express.Router()

router.get("/user", (req, res) => {
  res.send("用户列表数据")
})

router.get("/user/:id", (req, res) => {
  res.send(`用户详情数据 ${req.params.id}`)
})

router.post("/user", (req, res) => {
  res.send("创建用户数据")
})

router.put("/user/:id", (req, res) => {
  res.send(`更新用户数据 ${req.params.id}`)
})

router.delete("/user/:id", (req, res) => {
  res.send(`删除用户数据 ${req.params.id}`)
})



module.exports = router
