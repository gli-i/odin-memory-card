export default function GameOverScreen({gameStatus, highScore, curScore, resetGame}){
    if (gameStatus === "over") {
        return (
        <div className="w-screen h-screen absolute self-start flex justify-center">
            <div className="text-yellow-600 text-3xl bg-green-100 w-64 lg:w-80 p-6 rounded-lg z-50 absolute top-1/4 flex flex-col items-center gap-6">
                <h1>Game Over!</h1>
                <ul className="flex flex-col">
                        <li className='text-xl'>Your Score: {curScore}</li>
                        <li className='text-xl'>High Score: {highScore}</li>
                    </ul>
                <button className="text-yellow-700 text-xl bg-yellow-300 p-2 rounded" onClick={resetGame}>Play Again</button>
            </div>
            <div className="bg-black bg-opacity-40 z-40 absolute w-full h-full"></div>
        </div>);
    } else if (gameStatus === "victory"){
        return (
            <div className="w-screen h-screen absolute self-start flex justify-center">
                <div className="text-yellow-600 text-3xl bg-green-100 w-64 lg:w-80 p-6 rounded-lg z-50 absolute top-1/4 flex flex-col items-center gap-6">
                    <h1>Victory!</h1>
                    <h2 className="text-2xl text-center">You successfully remembered {highScore}/{highScore} characters!!</h2>
                </div>
                <div className="bg-black bg-opacity-40 z-40 absolute w-full h-full"></div>
            </div>);
    } else {
        return <></>;
    }
}