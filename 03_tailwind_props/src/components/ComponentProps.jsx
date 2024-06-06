import React from 'react'

const ComponentProps = ({text}) => {// always put the parameters in {}
  
  return (
    <div>
      <div class="space-y-5 pb-2 pt-2">
  <div class="p-3 bg-white shadow rounded-lg text-black border-[1px] border-black ">
    
    <p class="font-sans">
      
      {text}
    </p>
  </div>
 
</div>
    </div>
  )
} 

export default ComponentProps
