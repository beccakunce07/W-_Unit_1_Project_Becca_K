
      /* <img src={feelingsWheel} alt="A circle with all the colors of the rainbow with the range of emotions transcribed over it" />; */
import React, { useState } from 'react';
// import logoWithWords from '../assets/SelfLoveBombwithText.png'
import emotionsWheel from '../assets/EmotionsWheel.png'
import SpecificSlbButton from '../components/specificSlbButton.jsx';

function TempCheckPage () {
  
  const [key, setKey] = useState("");
  const [feeling, setFeeling] = useState("");

  return (
    <>
    <h1> Today I am feeling...</h1>
    <div className = "button-container">
    <><button className = "button1" onClick={() => setFeeling("sad")}>Sad</button></>
    <><button className = "button1" onClick={() => setFeeling("angry")}>Angry</button></>
    <><button className = "button1" onClick={() => setFeeling("depressed")}>Depressed</button></>
    <><button className = "button1" onClick={() => setFeeling("overwhelmed")}>Overwhelmed</button></>
    <><button className = "button1" onClick={() => setFeeling("happy")}>Happy</button></>
    <><button className = "button1" onClick={() => setFeeling("excited")}>Excited</button></>
    <><button className = "button1" onClick={() => setFeeling("neutral")}>Neutral</button></>
    </div>
    <p> Current Feeling: {feeling}</p>

    <h1> About my...</h1>
    
    <div className = "button-container">
    <><button className = "button2" onClick={() => setKey("finances")}>Finances</button></>
    <><button className = "button2" onClick={() => setKey("body")}>Body</button></>
    <><button className = "button2" onClick={() => setKey("relationship")}>Relationship</button></>
    <><button className = "button2" onClick={() => setKey("purpose")}>Purpose</button></>
    <><button className = "button2" onClick={() => setKey("life in general")}>Life in general</button></>
    <><button className = "button2" onClick={() => setKey("something else")}>Something Else</button></>
    </div>
    {/* <p>Current Key: {key}</p>    */}
    <SpecificSlbButton category = {key}/>

    <img 
        src={emotionsWheel}
        alt="A list of emotions superimposed onto the color wheel'"
        style={{ borderRadius: '20px' }} 
/>
</>
    
  
  )
}


export default TempCheckPage;