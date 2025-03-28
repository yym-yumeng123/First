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

module.exports = {
  createLedger,
}
