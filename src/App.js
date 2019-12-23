import React, { useState, useEffect } from 'react' 
import Card from './components/Cards'
import Board from './component/board'
import initializeDeck from './deck'

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  
  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])
  
  const handleClick = id => setFlipped([...flipped, id])

  const resizeBoard = () => {
    setDimension(
      Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight,
      ),
    )
  }
  
  return (
    <div>
      <h2>Can you remember where the cards are?</h2>
      <Board cards={cards} flipped={flipped} handleClick={handleClick} />
    </div>
  )
}

