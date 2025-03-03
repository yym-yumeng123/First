const ejs = require("ejs")
const path = require("path")

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
  fs.writeFileSync(path, content)
}

module.exports = {
  compile,
  writeToFile,
}
