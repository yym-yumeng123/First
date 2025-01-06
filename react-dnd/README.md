# React + TypeScript + Vite

## react-dnd

dnd 是 drag and drop 的意思, api 也分为两个 useDrag 和 useDrop

- 使用 useDrag 处理拖拽的元素，使用 useDrop 处理 drop 的元素，使用 useDragLayer 处理自定义预览元素
- 在根组件使用 DndProvider 设置 context 来传递数据
- useDrag 可以传入 type、item、collect 等。type 标识类型，同类型才可以 drop。item 是传递的数据。collect 接收 monitor，可以取拖拽的状态比如  isDragging 返回。
- useDrag 返回三个值，第一个值是 collect 函数返回值，第二个是处理 drag 的元素的函数，第三个值是处理预览元素的函数
- useDrop 可以传入 accept、drop 等。accept 是可以 drop 的类型。drop 回调函数可以拿到 item，也就是 drag 元素的数据
- useDragLayer 的回调函数会传入 monitor，可以拿到拖拽的实时坐标，用来设置自定义预览效果