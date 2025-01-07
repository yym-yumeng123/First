import Box from "./BoxAndContainer/Box"
import Container from "./BoxAndContainer/Container"
import DragLayer from "./BoxAndContainer/DragLayer"
import "./App.css"
import { useState } from "react"
import Card, { CardItem } from "./Card/CardList"

function App() {
  const [cardList, setCardList] = useState<CardItem[]>([
    { id: 1, content: "card1" },
    {
      id: 2,
      content: "card2",
    },
    {
      id: 3,
      content: "card3",
    },
    {
      id: 4,
      content: "card4",
    },
  ])
  return (
    <>
      <div>
        <Container></Container>
        <Box color='red'></Box>
        <Box color='blue'></Box>
        <Box color='green'></Box>
        <DragLayer></DragLayer>
      </div>
      <div className='card_wrap'>
        {cardList.map((item: CardItem) => {
          return <Card key={item.id} data={item}></Card>
        })}
      </div>
    </>
  )
}

export default App
