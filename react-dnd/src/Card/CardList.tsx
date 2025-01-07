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

  const [, drag] = useDrag({
    type: 'card',
    item: {
      id: data.id,
      index: index
    }
  })

  const [, drop] = useDrop({
    accept: 'card',
    drop(item: DragData) {
      swapIndex(index, item.index)
    }
  })

  useEffect(() => {
    drag(ref)
    drop(ref)
  }, [])

  return <div ref={ref} className='card'>{data.content}</div>
}

export default Card
