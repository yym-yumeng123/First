const EventEmitter = require("node:events")

// 事件总线
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

const callback = () => {
  console.log("事件触发")
}
// 监听事件
myEmitter.on("event", callback)

// 触发事件
myEmitter.emit("event")

// 移除事件
myEmitter.off("event", callback)
