import { useEffect, useRef, useState } from "react"
import { useDrop } from "react-dnd"
import Box from "./Box"

interface ItemType {
  color: string
}

function Container() {
  const [boxes, setBoxes] = useState<ItemType[]>([])
  const ref = useRef(null)

  const [, drop] = useDrop(() => {
    return {
      accept: "box",
      drop(item: ItemType) {
        setBoxes((boxes) => [...boxes, item])
      },
    }
  })

  useEffect(() => {
    drop(ref)
  }, [])

  return (
    <div ref={ref} className='container'>
      {boxes.map((box, index) => {
        return <Box key={index} color={box.color} />
      })}
    </div>
  )
}

export default Container
