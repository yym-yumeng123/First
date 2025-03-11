/**
 * 自定义 404 错误类
 */
class NotFoundError extends Error {
  constructor(message) {
    super(message)
    this.name = "NotFoundError"
    this.status = 404
  }
}

/**
 * 请求成功
 * @param {Object} res - 响应对象
 * @param {Object} data - 数据
 * @param {String} message - 消息
 * @param {Number} code - 状态码
 */
function success(res, data, message = "请求成功", code = 200) {
  res.status(code).json({
    status: true,
    data,
    message,
  })
}

/**
 * 请求失败
 * @param {Object} res - 响应对象
 * @param error - 错误
 */
function failure(res, error) {
  if (error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
    return res.status(400).json({
      status: false,
      message: "请求参数错误",
      errors: error.errors.map((err) => err.message),
    })
  }
  if (error.name === "NotFoundError") {
    return res.status(404).json({
      status: false,
      message: "资源不存在",
      errors: [error.message],
    })
  }
  return res.status(500).json({
    status: false,
    message: "服务器错误",
    errors: [error.message],
  })
}

module.exports = {
  NotFoundError,
  success,
  failure,
}
