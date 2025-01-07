import { useEffect, useRef } from "react"
import { useDrag, useDrop } from "react-dnd"

export interface CardItem {
  id: number
  content: string
}

interface CardProps {
  data: CardItem;
  index: number;
  swapIndex: Function
}

interface DragData {
  id: number
  index: number
}

function Card(props: CardProps) {
  const { data, index, swapIndex } = props
  const ref = useRef<HTMLDivElement>(null)

  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: {
      id: data.id,
      index: index
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const [, drop] = useDrop({
    accept: 'card',
    hover(item: DragData) {
      swapIndex(index, item.index)
      // 交互位置后, 改变 item 的 index
      item.index = index
    }
  })

  useEffect(() => {
    drag(ref)
    drop(ref)
  }, [])

  return <div ref={ref} className={`card ${isDragging ? 'card--dragging' : ''}`}>{data.content}</div>
}

export default Card
