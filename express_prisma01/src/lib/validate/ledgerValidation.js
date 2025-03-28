const Joi = require("joi")

const ledgerValidationSchema = Joi.object({
  name: Joi.string().required().min(1).max(20).message({
    "string.empty": "账本名称不能为空",
    "string.min": "账本名称不能少于1个字符",
    "string.max": "账本名称不能超过20个字符",
    "any.required": "账本名称不能为空",
  }),
  description: Joi.string().allow("", null).max(100).message({
    "string.max": "账本描述不能超过100个字符",
  }),
})

const validateLedger = (req, res, next) => {
  const { error } = ledgerValidationSchema.validate(req.body)
  console.log(error, '----error')
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  next()
}

module.exports = {
  validateLedger,
}
