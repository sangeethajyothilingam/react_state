import React from 'react'
import { useState } from 'react';

export const Content = () => {
  function handleNameChange(){
    const names=["Earn","grow","give","make"];
    const int= Math.floor(Math.random()*4)
    return names[int]
  }

  //function namee(){
    //return console.log("welcome")
  //}
  
    const handleClick = () =>{
console.log(`thanks sangee`)
    }
    const handleClick2 = (e) =>{
console.log(e)
    }

    
    
   // const [name, setName] = useState(() =>namee())
    const [count, setCount] = useState(99)

    function incrementFunction(){
      setCount((count) =>count+1)
    }

function decrementFunction(){
      setCount((count) =>count-1)
    }

   const[change, setChange] = useState("Earn")
   
    function handleChange(){
    const change=["Earn","grow","give","make"];
    const int= Math.floor(Math.random()*4)
    setChange (change[int])
  }

  return (
    <main>let's {handleNameChange()} money
    <button onClick= {() =>handleClick()}>subscribe</button>
    <button onClick= {() =>handleChange()}>subscribe</button>
        <button onClick= {(e) =>handleClick2(e)}>clickMe</button>
        <button onClick= {() => incrementFunction()}>+</button>
        <span>{count}</span>
        <button onClick= {() =>decrementFunction()}>-</button>
        </main>
  )
}
