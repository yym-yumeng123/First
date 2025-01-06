import { useDragLayer } from "react-dnd"

const DragLayer = () => {
  // useDragLayer 的参数是函数，能拿到 monitor，从中取出很多东西，
  // 比如 item、isDragging，还是有 clientOffset，也就是拖拽过程中的坐标
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
  }))

  if (!isDragging) {
    return null
  }

  return (
    <div
      className='drag-layer'
      style={{ left: currentOffset?.x, top: currentOffset?.y }}
    >
      {item.color} 拖拖拖
    </div>
  )
}

export default DragLayer
