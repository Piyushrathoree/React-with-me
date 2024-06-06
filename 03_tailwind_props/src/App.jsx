import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/Component1'
import ComponentProps from './components/ComponentProps'
function App() {
  const [count, setCount] = useState(0)

  return (
    //I can create a new component here but I'm making a new file instead
  // In the first component  I use props where i place a text box in which any value can be stored 
    <>
     <ComponentProps text='NEW !!!!'/> 
     
     <Component1 />
     
     <ComponentProps text='ORDER NOW!!!'/> 
    </>
  )
}

export default App
