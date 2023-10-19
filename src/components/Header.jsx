import React from 'react'

export default function Header(){
    return (
        <>
        <header className="h-1/6 flex flex-col justify-center gap-2 items-center">
            <h1 className="text-3xl">Memory Game</h1>
            <ul>
                <li className=''>Current Score: 0</li>
                <li>High Score: 0</li>
            </ul>
        </header>
        </>
    )
}