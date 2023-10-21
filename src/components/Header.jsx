import React from 'react'

export default function Header({highScore, curScore}){
    return (
        <>
        <header className= "h-1/6 flex flex-col justify-center gap-2 items-center">
            <h1 className="text-4xl">Memory Game</h1>
            <ul className="flex gap-12">
                <li className='text-xl'>Current Score: {curScore}</li>
                <li className='text-xl'>High Score: {highScore}</li>
            </ul>
        </header>
        </>
    )
}