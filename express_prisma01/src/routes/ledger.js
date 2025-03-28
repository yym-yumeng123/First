const express = require("express")
const router = express.Router()
const { validateLedger } = require("../lib/validate/ledgerValidation")
const { createLedger } = require("../controllers/ledgerController")

// 获取当前用户所有账本
router.post("/", validateLedger, createLedger)

module.exports = router
