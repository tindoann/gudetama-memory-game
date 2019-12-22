import React, { useState } from 'react' 
import Card from './components/Cards'

export default function App() {
  const [flipped, setFlipped] = useState([])
  const handleClick = id => setFlipped([...flipped, id])

  return (
    <div>
      <h2>Can you remember where the cards are?</h2>
      <Card 
        id={1}
        width={100}
        height={100}
        back={'../img/gut1.png'}
        front={'../img/gut2.png'}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
        />
    </div>
  )
}

