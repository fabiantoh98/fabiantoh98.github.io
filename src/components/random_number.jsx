import './../css/random_number.scss'
import { useState, useRef } from 'react';

const RandomNumber = () => {
    const [randomNumber, setRandomNumber] = useState(0);
    const [lowerLimit, setLowerLimit] = useState(1);
    const [upperLimit, setUpperLimit] = useState(100);
    const [guess, setGuess] = useState(1);
    const ref = useRef(null);

    function handleStart () {
        const rand_num = Math.floor(Math.random() * 100);
        
        if (rand_num < 2) {
            setRandomNumber(2);
        }
        else if (rand_num > 99){
            setRandomNumber(99);
        }
        else {
            setRandomNumber(rand_num);
        }
        
        setLowerLimit(1);
        setUpperLimit(100);
        setGuess(1);
        ref.current.value = 0;
        
    }
    function handleChangeNumber(event) {
        setGuess(Number(event.target.value));
    }
    function handleGuess (){
        console.log(guess);
        console.log(randomNumber);
        if (guess > upperLimit || guess < lowerLimit) {
            alert('Number is higher than the upper limit');
        }
        else if (guess < lowerLimit) {
            alert('Number is lower than the lower limit');
        }
        else if (guess === randomNumber) {
            alert("You win, please restart game to play again");
        }
        else {
            if (guess > randomNumber) {
                setUpperLimit(guess);
                console.log(randomNumber);
            }
            else if (guess < randomNumber) {
                setLowerLimit(guess);
                console.log(lowerLimit);
            }
        }
    }
    return (
      <div className="random-number">
        <h1>Random Number</h1>
        <h2> {'Guess a Number between ' + lowerLimit + ' to ' + upperLimit +'!'} </h2>
        <input ref={ref} onChange={handleChangeNumber} type='number' min='1' max='100' step='1'></input>
        <div>
            <h2> {'Number Guess: ' + guess}</h2>
        </div>
        <button className="start" onClick={handleStart}> {randomNumber===0?'Start Game':'Restart'} </button>
        <button className="guess" onClick={handleGuess}> Guess </button>
      </div>
    );
  }
   
  export default RandomNumber;