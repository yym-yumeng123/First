import { useRef } from "react"
import { useDrag } from "react-dnd"

interface BoxProps {
  color: string
}

function Box(props: BoxProps) {
  const ref = useRef<HTMLDivElement>(null)

  const [, drag] = useDrag({
    type: "box",
    item: {
      color: props.color,
    },
  })

  drag(ref)

  return (
    <div
      ref={ref}
      className='box'
      style={{ backgroundColor: props.color }}
    ></div>
  )
}

export default Box