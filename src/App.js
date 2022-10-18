import React,{useState} from "react"
import "./index.css"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function App() {
  const [dice,setDice] = React.useState(createNumbers())
  const [tenzies,setTenzies] = React.useState(false)
  React.useEffect(()=>{
    const holdValue = dice.every((die)=>die.isHold);
    const firstDie = dice[0].value;
    const allDice = dice.every((die)=> die.value === firstDie)
      if(holdValue && allDice){
        setTenzies(true)
        console.log("succes")
      }
  },[dice]) 
  // function to create set of 10 random numbers
  function generateRandom(){
    return{
      value:Math.floor(Math.random() * 6) + 1,
      id:nanoid(),
      isHold:false
    }
  }
  function createNumbers (){
    const numbers = []
  for(let i = 0; i<10; i++){
    numbers.push(generateRandom())
  } return numbers
  } 

  function changeHold (id){
    setDice(prevDice=> prevDice.map((die)=>{
      return die.id === id ? {...die, isHold:!die.isHold}:die
    }))
  }

  // change numbers
  function roll(){
    if (!tenzies){
      setDice(prevDice=> prevDice.map((die)=>{
        return die.isHold  ? die : generateRandom()
      }))
    } else{
      setDice(createNumbers())
      setTenzies(false)
    }
    
  }

  // render die component to the app.js
  const dieElements = dice.map((die)=>{
    return <Die
     value={die.value}
     id={die.id}
     key={die.id}
     isHold={die.isHold}
     changeHold={()=>changeHold(die.id)}
      
     />
  })
  return (
    <main>
    {tenzies && <Confetti/>}
     <h1 className="title">Tenzies</h1>
        <p className="text">Roll until all dice are the same! Click each die to freeze it at its current value between rolls.</p>
        <div className="container">
       
        {dieElements}
        </div>
        <button className="button" onClick={roll}>{tenzies ? "New Game" : "Roll"}</button>
        
    </main>
   
  );
}


