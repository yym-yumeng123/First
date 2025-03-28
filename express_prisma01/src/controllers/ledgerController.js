const prisma = require("../lib/prisma")

const createLedger = async (req, res) => {
  try {
    const { name, description } = req.body
    const { user } = req
    const ledger = await prisma.ledger.create({
      data: {
        name,
        description,
        userId: user.id,
      },
    })
    res.status(201).json({
      message: "账本创建成功",
      data: ledger,
    })
  } catch (error) {
    res.status(500).json({
      message: "账本创建失败",
      error: error.message,
    })
  }
}

const getLedgers = async (req, res) => {
  try {
    const { user } = req
    const ledgers = await prisma.ledger.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    })
    res.json({
      message: "账本获取成功",
      data: ledgers.map(({ userId, ...rest }) => rest),
    })
  } catch (error) {
    res.status(500).json({
      message: "账本获取失败",
      error: error.message,
    })
  }
}

const updateLedger = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description } = req.body
    const ledger = await prisma.ledger.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        description,
      },
    })
    res.json({
      message: "账本更新成功",
      data: ledger,
    })
  } catch (error) {
    res.status(500).json({
      message: "账本更新失败",
      error: error.message,
    })
  }
}

const deleteLedger = async (req, res) => {
  try {
    const { id } = req.params
    await prisma.ledger.delete({
      where: {
        id: Number(id),
      },
    })
    res.json({
      message: "账本删除成功",
    })
  } catch (error) {
    res.status(500).json({
      message: "账本删除失败",
      error: error.message,
    })
  }
}

module.exports = {
  createLedger,
  getLedgers,
  updateLedger,
  deleteLedger,
}
