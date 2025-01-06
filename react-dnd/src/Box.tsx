import { useEffect, useRef } from "react"
import { useDrag } from "react-dnd"
import { getEmptyImage } from "react-dnd-html5-backend"

interface BoxProps {
  color: string
}

function Box(props: BoxProps) {
  const ref = useRef<HTMLDivElement>(null)

  // useDrag 的第三个参数就是处理预览元素的，我们用 getEmptyImage 替换它
  const [{ isDragging }, drag, deagPreview] = useDrag({
    type: "box",
    item: {
      color: props.color,
    },
    // 拿到拖拽过程中的状态
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  useEffect(() => {
    drag(ref)
    deagPreview(getEmptyImage())
  }, [])


  return (
    <div
      ref={ref}
      className={ isDragging ? "box box--dragging" : "box" }
      style={{ backgroundColor: props.color || 'blue' }}
    ></div>
  )
}

export default Box