const path = require('path')

const basePath = '/Users/v_yymyyang/Desktop/yym_github/First/Node/Demo2'
const filename = 'test.txt'

const filePath = path.resolve(basePath, filename)

console.log(filePath)

