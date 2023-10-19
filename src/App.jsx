import { useState } from 'react'
//import './styles/App.css'
import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'

export default function App() {
  
  return (
    <div className="bg-green-900 text-yellow-400 box-border font-mono h-screen flex flex-col items-center">
      <Header />
      <Cards />
    </div>
  )
}
