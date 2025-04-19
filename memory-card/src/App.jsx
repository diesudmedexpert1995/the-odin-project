import React, { useState } from 'react';
import './styles/App.css'
import Header from './components/Header'
import CardGrid from './components/CardGrid';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  const [reset, setReset] = useState(true);
  const endCurrentGame = () =>{
    if(score > bestScore){
      setBestScore(score)
    }
    setScore(0)
    setReset(true)
  }

  const incrementScore = () =>{
    setScore(()=>score+1)
    setReset(false)
  }

  
  return (
    <div className='App'>
      <Header score={score} bestScore={bestScore}/>
      <CardGrid reset={reset} endCurrentGame={endCurrentGame} incrementCurrentScore={incrementScore}/>
    </div>
  )
}

export default App
