
import './css/main.css';
import { useState } from 'react';
let arr = []
let num = Math.floor(Math.random()*100);
let flag=0;
function App() {
   const [inputValue,setInputValue] = useState("");
   const [count, setCount] = useState(0);
   const [attemptList,setAttemptList] = useState(arr)
   const [result,setResult] = useState("");
   const [start, setStart] = useState(false);
   const handleGuess = () =>{
     if(count>=5 || flag==1){

     }
     else if(count==4){
       if(inputValue==num){
        setResult(`Your Guess,${inputValue}, is Correct!`)
        setCount(count+1);
        arr.push(inputValue);
        setAttemptList(arr);
        setInputValue("");
        return;
       }
       else{
        setResult(`Game Over! You Lose.`)
        setCount(count+1);
        arr.push(inputValue);
        setAttemptList(arr);
        setInputValue("");
        return;
       }
     }
     else{
              if(inputValue<=0 || inputValue>100){
                setResult(`Wrong Input! Enter again`)
              }
              else if(inputValue==num){
                setResult(`Your Guess,${inputValue}, is Correct!`)
                setCount(count+1);
                arr.push(inputValue);
                setAttemptList(arr);
                flag=1;
                return;
              }
              else if(inputValue>num){
              setResult(`Your Guess is too high!`)
              setCount(count+1);
              arr.push(inputValue);
              setAttemptList(arr);
              } 
              else{
              setResult(`Your Guess is too low!`)
              setCount(count+1);
              arr.push(inputValue);
              setAttemptList(arr);
              }
              
              setInputValue("");
     }
     

   }
   
   const restartGame = () => {
     num= Math.floor(Math.random()*100);
     flag=0;
     setInputValue("");
     setCount(0);
     arr = [];
     setAttemptList(arr);
     setResult("");
   }

   const startGame = () => {
        setStart(true);
   }
   const handle = (e) => {
     setInputValue(e.target.value);
     
   }


   let display;
   display = start ? (
    <div className='page'>
    <h1>Guess the number between 1-100!</h1>
    <input type='number' value={inputValue} onChange={(e) => handle(e)} className='txt' />
    <br/>
    <button onClick={handleGuess} className='btn'>Guess</button>
    <br/>
    <br/>
    <button onClick={restartGame} className='btn'>Restart Game</button>
    <br/>
    <h3>{result}</h3>
    <br/>
    <h3>Number of attempts : {count}</h3>
    <h3>Your Guesses : {attemptList.map((item) => `${item}, `)}</h3>
  </div>
   ):(
     <div className='page'>
       <h1>Welcome to Guess the Number Game!</h1>
       <h3>Below are the game instructions:</h3>
       <ul>
         <li><h4>You will be asked to enter a number between 1 to 100.</h4></li>
         <li><h4>Each input will give you a hint if guessed low or high.</h4></li>
         <li><h4>Your goal is to guess the number in 5 attempts based on the hints.</h4></li>
       </ul>
       <button onClick={startGame} className='btn'>START GAME</button>
     </div>
   )
  return (
    <>
      {display}
    </>
  );
}

export default App;
