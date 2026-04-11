import { useState } from "react";
import logo from "../assets/SelfLoveBomb.png";
import SlbBank from "./slbBank";


function SlbButton() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * SlbBank.length);
    const newMessage = SlbBank[randomIndex].message;
    setMessage(newMessage);
    
    // Optional: Auto-play when message changes
    // speak(newMessage); 
  };

  const handlePlay = () => {
    if (!message) return;
    
    // Stop any current speech before starting new
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
    
        <button onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
        <h3>Click here for a love bomb👇</h3> <img src= {logo} alt = "An outline of a heart with lit fuses on the ends." style = {{ width: '200px', justifyContent: 'center'}} />
        </button>
      
      {/* Playback Button - only shows if there is a message */}
      <h2>{message}</h2>
      {message && (
        
        <button className= "button3" onClick={handlePlay}>
          ▶        </button>
      )}

      
    </>
  );
}

export default SlbButton;
