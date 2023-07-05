import BibleQuiz from '../component/bible_quiz';
import RandomNumber from '../component/random_number';

import { useState } from 'react';
import './../css/game.scss'

const Game = () => {
    const [gameMode, setGameMode] = useState('bible_quiz');

    function handleChangeGame(game){
        setGameMode(game);
    }

    const project = () => {
        switch(gameMode) {
            case "random_number":   return <RandomNumber/>;
            case "bible_quiz": return <BibleQuiz/>;
            default: return <h1>Working in Progress</h1>;
        }
    }
    return(
        
        <div className="game">
            <div className="game-navbar">
                <button className={gameMode==='bible_quiz'?'selected-game-link':'game-link'} onClick={() => {handleChangeGame('bible_quiz');}}>Bible Quiz</button>
                <button className={gameMode==='random_number'?'selected-game-link':'game-link'} onClick={() => {handleChangeGame('random_number');}}>Random Number</button>
                <button className={gameMode==='Coming Soon'?'selected-game-link':'game-link'} onClick={() => {handleChangeGame('Coming Soon');}}>Coming Soon</button>
            </div>
            <div className='main-area'>
                {project()}
            </div>
        </div>
    )
}

export default Game