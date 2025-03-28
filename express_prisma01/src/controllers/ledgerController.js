const prisma = require("../lib/prisma")

const createLedger = async (req, res) => {
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
}

const getLedgers = async (req, res) => {
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
}

module.exports = {
  createLedger,
  getLedgers,
}
