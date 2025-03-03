const path = require("path")
const fs = require("fs")
const ejs = require("ejs")

const compile = (templateName, data) => {
  const templatePath = path.resolve(__dirname, `../templates/${templateName}`)
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })
}

const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content)
}

module.exports = {
  compile,
  writeToFile,
}
