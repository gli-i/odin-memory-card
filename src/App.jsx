import { useState } from 'react'
import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'
import GameOverScreen from './components/GameOverScreen.jsx'

import kiki_img from "./img/kiki.png"
import jiji_img from "./img/jiji.png"
import totoro_img from "./img/totoro.png"
import minitot_img from "./img/minitotoro.png"
import catbus_img from "./img/catbus.png"
import howl_img from "./img/howl.png"
import sophie_img from "./img/sophie.png"
import ponyo_img from "./img/ponyo.png"
import chihiro_img from "./img/chihiro.png"
import haku_img from "./img/haku.png"
import naus_img from "./img/nausicaa.png"
import pmono_img from "./img/pmononoke.png"

export default function App() {
  const cards = [
    {id: "kk", name: "Kiki", img_url: kiki_img},
    {id: "jj", name: "Jiji", img_url: jiji_img},
    {id: "ttr", name: "Totoro", img_url: totoro_img},
    {id: "mtt", name: "Mini Totoros", img_url: minitot_img},
    {id: "ctb", name: "Catbus", img_url: catbus_img},
    {id: "hl", name: "Howl", img_url: howl_img},
    {id: "sph", name: "Sophie", img_url: sophie_img},
    {id: "py", name: "Ponyo", img_url: ponyo_img},
    {id: "chr", name: "Chihiro", img_url: chihiro_img},
    {id: "hk", name: "Haku", img_url: haku_img},
    {id: "nsc", name: "Nausicaa", img_url: naus_img},
    {id: "pmn", name: "Princess Mononoke", img_url: pmono_img}
  ]

  // shuffled cards
  const [shCards, setShCards] = useState(cards);

  // cards that've already been clicked
  const [clCards, setClCards] = useState([]);

  const [highScore, setHighScore] = useState(0);
  let curScore = clCards.length;

  // current game status
  const [gameStatus, setGameStatus] = useState("running");

  function handleClick(e) {
    // click is a dupe, game ends
    if (clCards.find((clCard) => clCard === e.target.id)){
      setGameStatus("over");

    // click isn't dupe, game continues
    } else {
      curScore++;
      if (curScore > highScore){
        setHighScore(curScore);
      }

      // if all cards have been click, show victory screen
      if (curScore === cards.length){
        setGameStatus("victory");
      } else {
        setClCards([...clCards, e.target.id]);
        shuffleCards();
      }
    }
  }

  function shuffleCards(){
    let temp = shCards.slice();
    for (let i = temp.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [temp[i], temp[j]] = [temp[j], temp[i]]; 
    } 
    setShCards(temp);
  }

  function resetGame(){
    setClCards([]);
    setGameStatus("running");
    shuffleCards();
  }

  return (
    <div className="bg-green-900 text-yellow-400 box-border font-mono h-screen flex flex-col items-center relative">
      <Header 
        highScore = {highScore}
        curScore = {curScore}
      />
      <Cards 
        cards = {shCards}
        handleClick = {handleClick}
      />
      <GameOverScreen
        gameStatus = {gameStatus}
        highScore = {highScore}
        curScore = {curScore}
        resetGame = {resetGame}
      />
      
          
    </div>
  )
}
