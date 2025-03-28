const express = require("express")
const router = express.Router()
const { validateLedger } = require("../lib/validate/ledgerValidation")
const { createLedger, getLedgers, updateLedger, deleteLedger } = require("../controllers/ledgerController")

// 创建账本
router.post("/", validateLedger, createLedger)

// 获取当前用户所有账本
router.get("/", getLedgers)

// 更新账本
router.put("/:id", validateLedger, updateLedger)

// 删除账本
router.delete("/:id", deleteLedger)

// TODO: 获取单个账本 详情 计算账本总支出 和 总收入
// router.get("/:id", getLedgerById) 

module.exports = router
