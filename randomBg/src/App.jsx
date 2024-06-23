import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [color, setRandomColor] = useState('white')
  const [intervalId, setIntervalId] = useState(null)

  const randomColor = function (hexCode = null) {
    let hex = "0123456789ABCDEF";
    let color = "#";

    if (hexCode) {
      // Use the provided hex code
      color += hexCode;
    } else {
      // Generate a random hex code
      for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
      }
    }

    return color;
  } 

  useEffect(() => {
    if (intervalId) {
      const changeBgColor = function () {
        setRandomColor(randomColor())
      }
      const Interval = setInterval(changeBgColor, 1000);
      return () => clearInterval(Interval);
    }
  }, [intervalId, color])

  const start = function () {
    setIntervalId(setInterval(() => {}, 1000));
  }

  const stop = function () {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  return (
    <>
      <div className='w-full h-full m-0 p-0 'tyle={{backgroundColor: color}} >
        <button onClick={start} className='w-20 h-8 rounded-xl bg-black text-white'>Start</button>
        <button onClick={stop} className='w-20 h-8 rounded-xl bg-black text-white'>Stop</button>
      </div>
    </>
  )
}

export default App