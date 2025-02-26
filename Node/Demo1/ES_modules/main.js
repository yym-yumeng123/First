import { name } from "./foo.js"

console.log(name)


// import { name, age, hello } from "./foo.js"
import { name as n, age as a, hello as h } from "./foo.js"

console.log(n, a, h)

// 导入默认导出
import { default as d } from "./foo.js"
import * as all from "./foo.js" // 导入所有导出

console.log(d)
console.log(all)



