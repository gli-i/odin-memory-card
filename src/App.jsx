import { useState } from 'react'
import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'

export default function App() {
  const [highScore, setHighScore] = useState(0);
  const [curScore, setCurScore] = useState(0);

  function handleClick(e) {
    console.log(e.target);
  }

  return (
    <div className="bg-green-900 text-yellow-400 box-border font-mono h-screen flex flex-col items-center">
      <Header 
        highScore = {highScore}
        curScore = {curScore}
      />
      <Cards 
        handleClick = {handleClick}
      />
    </div>
  )
}
