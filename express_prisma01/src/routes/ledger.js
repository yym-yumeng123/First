const express = require("express")
const router = express.Router()
const { createLedger } = require("../controllers/ledgerController")

// 获取当前用户所有账本
router.post("/", createLedger)

module.exports = router
