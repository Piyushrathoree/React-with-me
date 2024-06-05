import { useState } from 'react'//here we import the hook 

import './App.css'

function App() {
  let [count, setCount] = useState(0)//this hook usestate takes two arguments first which element should be changed and the second is what should be the change 
  const addValue=()=>{
    if(count<20){
      count=count+1
    setCount(count)//here we give the final value which will reflect in UI
    }else{
      count=20
      setCount(count)
    }

    
  }
  const minusCount=()=>{
    if(count>0){
      count=count-1
    setCount(count)
    }else{
      count=0
      setCount(count)
    }
   
  }

  return (
    <>
      <h1>counter:{count}</h1>
      <br />
      <button onClick={addValue}>increase</button>
      <button onClick={minusCount}>decrease</button>
    </>
  )
}

export default App
