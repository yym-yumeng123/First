const express = require("express")
const router = express.Router()
const { validateLedger } = require("../lib/validate/ledgerValidation")
const { createLedger, getLedgers } = require("../controllers/ledgerController")

// 创建账本
router.post("/", validateLedger, createLedger)

// 获取当前用户所有账本
router.get("/", getLedgers)

module.exports = router
