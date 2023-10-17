import { useState } from 'react'
import './App.css'

export default function App() {

  return (
    <>
    <header>
      <h1>Memory Game</h1>
      <ul>
        <li>Current Score: 0</li>
        <li>High Score: 0</li>
      </ul>
    </header>
    <main>
      <Cards />
    </main>
    </>
  )
}

function Cards(){
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div id="cards">
    {cards.map(card => (
      <Card 
        card = {card}
      />
    ))}
    </div>
  );
}

function Card({card}){
  return (
    <div className="card">
        <h3>{card}</h3>
      </div>
  );
}
