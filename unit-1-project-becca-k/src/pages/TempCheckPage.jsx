
      /* <img src={feelingsWheel} alt="A circle with all the colors of the rainbow with the range of emotions transcribed over it" />; */
import React, { useState } from 'react';
// import logoWithWords from '../assets/SelfLoveBombwithText.png'
import emotionsWheel from '../assets/EmotionsWheel.png'
import SpecificSlbButton from '../components/specificSlbButton';

function TempCheckPage () {
  
  const [key, setKey] = useState("");
  const [feeling, setFeeling] = useState("");

  return (
    <>
    <div>
        {/* <img class = "logo1"> src={logoWithWords} </img> 
        
        style = {{width:'900px', height: 'auto', align: 'center'}}
         */}

    <h1> Today I am feeling...</h1>
    <><button className = "button1" onClick={() => setFeeling("sad")}>Sad</button></>
    <><button className = "button1" onClick={() => setFeeling("angry")}>Angry</button></>
    <><button className = "button1" onClick={() => setFeeling("depressed")}>Depressed</button></>
    <><button className = "button1" onClick={() => setFeeling("overwhelmed")}>Overwhelmed</button></>
    <><button className = "button1" onClick={() => setFeeling("happy")}>Happy</button></>
    <><button className = "button1" onClick={() => setFeeling("excited")}>Excited</button></>
    <><button className = "button1" onClick={() => setFeeling("neutral")}>Neutral</button></>
    <p> Current Feeling: {feeling}</p>

    <h1> About my...</h1>

    <><button className = "button2" onClick={() => setKey("finances")}>Finances</button></>
    <><button className = "button2" onClick={() => setKey("body")}>Body</button></>
    <><button className = "button2" onClick={() => setKey("relationship")}>Relationship</button></>
    <><button className = "button2" onClick={() => setKey("purpose")}>Purpose</button></>

    <p>Current Key: {key}</p>
    

    <img 
        src={emotionsWheel}
        style = {{width:'600px', height: 'auto', align: 'center'}}
        alt="A list of emotions superimposed onto the color wheel'" />
    
    </div>

    <div className = "messageDisplaySection">
      <SpecificSlbButton category={key}></SpecificSlbButton>
    </div>

    
</>
    

    

  
  )
}

export default TempCheckPage




// function MyComponent() {
//   const [age, setAge] = useState(28);
//   const [name, setName] = useState('Taylor');
//   const [todos, setTodos] = useState(() => createTodos());