import { useRef } from "react"
import { useDrag } from "react-dnd"

interface BoxProps {
  color: string
}

function Box(props: BoxProps) {
  const ref = useRef<HTMLDivElement>(null)

  const [{ isDragging }, drag] = useDrag({
    type: "box",
    item: {
      color: props.color,
    },
    // 拿到拖拽过程中的状态
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(ref)

  return (
    <div
      ref={ref}
      className={ isDragging ? "box box--dragging" : "box" }
      style={{ backgroundColor: props.color || 'blue' }}
    ></div>
  )
}

export default Box