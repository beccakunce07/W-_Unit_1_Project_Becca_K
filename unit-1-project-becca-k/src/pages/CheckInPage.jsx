import React, { useState } from 'react';
// import {EmotionsWheelImage} from '../components/EmotionsWheelImage.jsx'
import { SpecificSlbButton } from '../components/SpecificSlbButton.jsx';
import PageHeader from '../components/PageHeader.jsx';

function CheckInPage () {
  
  const [key, setKey] = useState("");
  const [feeling, setFeeling] = useState("");

  return (
    <>
    <PageHeader title = "Let's Check In"></PageHeader>
    <h1> Today I am feeling...</h1>
    <div className = "button-container">
    <button className = "button1" onClick={() => setFeeling("sad")}>Sad</button>
    <button className = "button1" onClick={() => setFeeling("angry")}>Angry</button>
    <button className = "button1" onClick={() => setFeeling("depressed")}>Depressed</button>
    <button className = "button1" onClick={() => setFeeling("overwhelmed")}>Overwhelmed</button>
    <button className = "button1" onClick={() => setFeeling("happy")}>Happy</button>
    <button className = "button1" onClick={() => setFeeling("excited")}>Excited</button>
    <button className = "button1" onClick={() => setFeeling("neutral")}>Neutral</button>
    </div>
    <p>Today I am feeling {feeling.toLocaleLowerCase()}</p>

    <h1> About my...</h1>
    
    <div className = "button-container">
    <button className = "button2" onClick={() => setKey("finances")}>Finances</button>
    <button className = "button2" onClick={() => setKey("body")}>Body</button>
    <button className = "button2" onClick={() => setKey("relationship")}>Relationship</button>
    <button className = "button2" onClick={() => setKey("purpose")}>Purpose</button>
    <button className = "button2" onClick={() => setKey("life in general")}>Life in general</button>
    <button className = "button2" onClick={() => setKey("something else")}>Something Else</button>
    </div>
    <p>About my {key}.</p>   
    <SpecificSlbButton category = {key}/>

  {/* <img src={EmotionsWheelImage} alt="Emotions transposed over the color wheel" style={{ borderRadius: '20px' }} /> */}
</>
    
  
  )
}


export default CheckInPage;