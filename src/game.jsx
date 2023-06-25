import RandomNumber from './component/random_number';
import { useState } from 'react';
import './game.scss'

const Game = () => {
    const [gameMode, setGameMode] = useState('random_number');

    function handleChangeGame(game){
        setGameMode(game);
    }

    const project = () => {
        switch(gameMode) {
            case "random_number":   return <RandomNumber/>;
            default: return <h1>Working in Progress</h1>;
        }
    }
    return(
        
        <div className="game">
            <div className="game-navbar">
                <button className='game-link' onClick={() => {handleChangeGame('random_number');}}>Random Number</button>
                <button className='game-link' onClick={() => {handleChangeGame('Coming Soon');}}>Coming Soon</button>
            </div>
            <div className='main-area'>
                {project()}
            </div>
        </div>
    )
}

export default Game