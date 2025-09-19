import './../css/bible_quiz.scss'
import quizData from './../public/data/quiz.json'
import { useState } from 'react';

const BibleQuiz = () => {
    const [quizNum, setQuizNum] = useState(0);
    const [life, setLife] = useState(5);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState('');
    const [isGameOver, setIsGameOver] = useState(false);
    const [questionList, setQuestionList] = useState([]);
    const [optionSelected, setOptionSelected] = useState(-1);

    function handleBegin() {
        setQuizNum(1);
        var shuffled = quizData.sort(function(){return .5 - Math.random()});
        setQuestionList(shuffled.slice(0,15));
    }

    function handleSubmit(){ 
        let currentLife = life
        if (answer === ''){
            alert('Please select an answer before submitting!');
        }
        else{
            if (answer === questionList[quizNum-1].answer){
                alert("You are correct")
                setScore(score + 1);
            }
            else {
                alert("You are wrong\nexplanation:\n" + questionList[quizNum-1].explanation)
                currentLife = currentLife-1
                setLife(currentLife);
            }
            setAnswer('');
            setOptionSelected(-1);
            if (quizNum === 15 & currentLife > 0) {
                alert("You win");
                setIsGameOver(true);
            }
            else if (currentLife === 0){
                alert("You lost, please try again!");
                setIsGameOver(true);
            }
            else{
                setQuizNum(quizNum + 1);
            }
        }
        
            
    }
    function handleSelectAnswer(index){
        setAnswer(questionList[quizNum-1].option[index]);
        setOptionSelected(index);
    }
    function handleRestart(){
        setAnswer('');
        setOptionSelected(-1);
        setQuizNum(0);
        setScore(0);
        setLife(5);
        setIsGameOver(false);
    }
    return (
      <div className="bible-quiz">
        <h1>Bible Quiz</h1>
        {quizNum===0?
        <div>
            <h2>Rules: </h2>
            <div class="info-list">
                <div class="info">1. You are highly recommended to have a bible by your side.</div>
                <div class="info">2. Click on the next button after you select your answer. </div>
                <div class="info">3. If the time goes off before submission, latest selected option will be used.</div>
                <div class="info">4. Progress will not be saved if you exit the game.</div>
                <div class="info">5. Upon getting 5 wrong answers, game will end.</div>
                <div class="info">6. There is a total of 15 questions per game.</div>
            </div>
            <button className='btn' onClick={handleBegin}> Begin </button>
        </div>
        :
        <div>
            <h2>{'Question ' + quizNum + ' :'}</h2>
            <h2>{`Score: ${score} Lives: ${life}`}</h2>
            <div className='question'>{questionList[quizNum-1].question}</div>
            <div className='option-box'>
                <div onClick={() => {handleSelectAnswer(0);}} className={optionSelected===0?'selected-option':'option'}>{questionList[quizNum-1].option[0]}</div>
                <div onClick={() => {handleSelectAnswer(1);}} className={optionSelected===1?'selected-option':'option'}>{questionList[quizNum-1].option[1]}</div>
                <div onClick={() => {handleSelectAnswer(2);}} className={optionSelected===2?'selected-option':'option'}>{questionList[quizNum-1].option[2]}</div>
                <div onClick={() => {handleSelectAnswer(3);}} className={optionSelected===3?'selected-option':'option'}>{questionList[quizNum-1].option[3]}</div>
                <div onClick={() => {handleSelectAnswer(4);}} className={optionSelected===4?'selected-option':'option'}>{questionList[quizNum-1].option[4]}</div>
            </div>
            {isGameOver?'':<button className='btn' onClick={handleSubmit}> Next </button>}
        </div>
        }
        {isGameOver?<button className='btn' onClick={handleRestart}> Restart </button>:''}
      </div>
    );
  }
   
  export default BibleQuiz;