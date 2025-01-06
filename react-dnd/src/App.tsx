import { useRef } from "react"
import { useDrag, useDrop } from "react-dnd"
import "./App.css"

function Box() {
  const ref = useRef<HTMLDivElement>(null)

  const [, drag] = useDrag({
    type: "box",
    item: {
      color: "blue",
    },
  })

  drag(ref)

  return <div ref={ref} className='box'></div>
}

function Container() {
  const ref = useRef(null)

  const [, drop] = useDrop(() => {
    return {
      accept: "box",
      drop(item) {
        console.log(item)
      },
    }
  })
  drop(ref)
  return <div ref={ref} className='container'></div>
}

function App() {
  return (
    <>
      <Container></Container>
      <Box></Box>
    </>
  )
}

export default App
