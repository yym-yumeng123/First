import { useEffect, useRef } from "react"
import { useDrag, useDrop } from "react-dnd"

export interface CardItem {
  id: number
  content: string
}

interface CardProps {
  data: CardItem
}

function Card(props: CardProps) {
  const { data } = props
  const ref = useRef<HTMLDivElement>(null)

  const [, drag] = useDrag({
    type: 'card',
    item: props.data
  })

  const [, drop] = useDrop({
    accept: 'card',
    drop(item: CardItem) {
      console.log(item)
    }
  })

  useEffect(() => {
    drag(ref)
    drop(ref)
  }, [])

  return <div ref={ref} className='card'>{data.content}</div>
}

export default Card
