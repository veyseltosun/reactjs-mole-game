import hole from "./assets/hole.png";
import mole from "./assets/mole.png";

import './App.css';
import React, { useEffect} from "react";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [moles, setMoles] = useState<boolean[]>(new Array(9).fill(false));
 
  function setMoleVisibility (index: number, isVisible: boolean){
    setMoles( (curMoles) => {
      const newMoles = [...curMoles] ;
      newMoles[index] =isVisible;
      return newMoles
    })
    

    

    
  }
 

  function wackMole (index:number) {
    if (!moles[index]) return ;
    setMoleVisibility(index, false)
    setScore((score) => score + 1);
   
  }
  useEffect(() => {
    const interval = setInterval(() =>{
      const randomIndex = Math.floor(Math.random() * moles.length);
      setMoleVisibility(randomIndex, true)
      setTimeout(() => {
         setMoleVisibility(randomIndex, false)
      }, 500)

    }, 1000);

    return () => {
      clearInterval(interval);

    }
  }, [moles]);





  return (
   <>
    <h1>score : {score}</h1>

    <div className="grid">
      {moles.map((isMole, idx) => {
        return(
          <img key={idx} src={isMole ? mole : hole}
            onClick={() =>{
              wackMole(idx);
            }}
          
          
          />
        )
      })}
      
      
    </div>
    </>
  );
}

export default App;
