const name = "foo"

export { name }


// 导出变量
export const age = 18

// 导出函数
export function sayHello() {
  console.log("hello")
}

// {} 放置导出的变量, 默认导出
export {
  name as default,
  age as yage, // 重命名
  sayHello as hello
}