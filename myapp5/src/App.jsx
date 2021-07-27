import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

const App = () => {
    const [num , setNum] = useState(0);
    const [num1 , setNum1] = useState(0);
    
    useEffect(()=>{
        alert(" i am clciked")
    }, [num])
    
    return (
       <>
        <button onClick={()=>{
            setNum(num+1)
        }} > Click {num}</button>

        
         <button onClick={()=>{
            setNum1(num1+1)
        }} > Click {num1}</button>
        <h1>alam</h1>

       </>
    )
}

export default App
