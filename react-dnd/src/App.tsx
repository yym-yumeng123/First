import Box from "./Box"
import Container from "./Container"
import DragLayer from "./DragLayer"
import "./App.css"



function App() {
  return (
    <>
      <Container></Container>
      <Box color='red'></Box>
      <Box color='blue'></Box>
      <Box color='green'></Box>
      <DragLayer></DragLayer>
    </>
  )
}

export default App
