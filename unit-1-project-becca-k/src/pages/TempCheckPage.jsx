import React from 'react';
// import feelingsWheel from './assets/EmotionsWheel.png'; 
// import { useState } from 'react'
//need to add event handlers to store data here and want to connect them with the messages.
function TempCheckPage () {
  // const [key, getMessage] = useState("")
      /* <img src={feelingsWheel} alt="A circle with all the colors of the rainbow with the range of emotions transcribed over it" />; */

  return (
    <div>
    <>
    <h1> Today I am feeling...</h1>
    <><button id = "sad">Sad</button></>
    <><button id = "angry">Angry</button></>
    <><button id = "depressed">Depressed</button></>
    <><button id = "overwhelmed">Overwhelmed</button></>
    <><button id = "happy">Happy</button></>
    <><button id = "excited">Excited</button></>
    <><button id = "neutral">Neutral</button></>

    <h1> About my...</h1>

    <><button id = "finances">Finances</button></> 
    <><button id = "body">Body</button></>
    <><button id = "relationship">Relationship</button></>
    <><button id = "purpose">Purpose</button></>
    </>

    </div>

  
  )
}

export default TempCheckPage


// function MyComponent() {
//   const [age, setAge] = useState(28);
//   const [name, setName] = useState('Taylor');
//   const [todos, setTodos] = useState(() => createTodos());