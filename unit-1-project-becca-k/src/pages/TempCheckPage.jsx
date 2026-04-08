// import { useState} from 'react;'
// import feelingsWheel from './assets/EmotionsWheel.png'; 
// import { useState } from 'react'
//need to add event handlers to store data here and want to connect them with the messages.

// const handleClick = (value) => {
  //   setClickedKey(value);
  // }

      /* <img src={feelingsWheel} alt="A circle with all the colors of the rainbow with the range of emotions transcribed over it" />; */
import React, { useState } from 'react';

function TempCheckPage () {
  

  const [key, setKey] = useState("");
  const [feeling, setFeeling] = useState("");

  return (
    <div>
  
    <h1> Today I am feeling...</h1>
    <><button class = "button1" onClick={() => setFeeling("sad")}>Sad</button></>
    <><button class = "button1" onClick={() => setFeeling("angry")}>Angry</button></>
    <><button class = "button1" onClick={() => setFeeling("depressed")}>Depressed</button></>
    <><button class = "button1" onClick={() => setFeeling("overwhelmed")}>Overwhelmed</button></>
    <><button class = "button1" onClick={() => setFeeling("happy")}>Happy</button></>
    <><button class = "button1" onClick={() => setFeeling("excited")}>Excited</button></>
    <><button class = "button1" onClick={() => setFeeling("neutral")}>Neutral</button></>
    <p> Current Feeling: {feeling}</p>

    <h1> About my...</h1>

    <><button class = "button2" onClick={() => setKey("finances")}>Finances</button></>
    <><button class = "button2" onClick={() => setKey("body")}>Body</button></>
    <><button class = "button2" onClick={() => setKey("relationship")}>Relationship</button></>
    <><button class = "button2" onClick={() => setKey("purpose")}>Purpose</button></>


    <p>Current Key: {key}</p>
    
    </div>

  
  )
}

export default TempCheckPage




// function MyComponent() {
//   const [age, setAge] = useState(28);
//   const [name, setName] = useState('Taylor');
//   const [todos, setTodos] = useState(() => createTodos());