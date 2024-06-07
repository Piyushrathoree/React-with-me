  import { useState } from 'react'

  import './App.css'
  function App() {
    const [color,setcolor]=useState('white')//here ar the function which is used to set the color and the white color is default
  

    return (
      <>
        <div className='w-screen h-screen flex justify-center  ' style={{backgroundColor:color}}>
          <div className='flex flex-wrap justify-center items-center bottom-10 px-2 absolute  '>
            <div className='flex flex-wrap justify-center items-center rounded-full gap-3 w-[45rem] h-14 shadow-lg bg-white'>
              <button className='w-20 h-10 rounded-full bg-red-700 text-white' onClick={()=>setcolor('red')}>red</button>
              <button className='w-20 h-10 rounded-full bg-green-700 text-white' onClick={()=>setcolor('green')}>green</button>
              <button className='w-20 h-10 rounded-full bg-blue-700 text-white' onClick={()=>setcolor('blue')}>blue</button>
              <button className='w-20 h-10 rounded-full bg-pink-500 text-white' onClick={()=>setcolor('pink')}>pink</button>
              <button className='w-20 h-10 rounded-full bg-orange-500  text-white' onClick={()=>setcolor('orange')}>orange</button>
              <button className='w-20 h-10 rounded-full bg-yellow-700 text-white' onClick={()=>setcolor('yellow')}>yellow</button>
              <button className='w-20 h-10 rounded-full bg-teal-500  text-white' onClick={()=>setcolor('teal')}>teal</button>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default App
