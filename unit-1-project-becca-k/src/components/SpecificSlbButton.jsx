import { useState } from "react";
import SlbBank from "./SlbBank.jsx";


function SpecificSlbButton ({category}) {
  const [message, setMessage] = useState ("");

  const handleClick = () => {
    const filteredArray = SlbBank.filter((index) => index.key.trim().toLowerCase() === category.trim().toLowerCase());
    const randomIndex = Math.floor(Math.random() * filteredArray.length);

    if (filteredArray.length === 0) {
        const anotherRandomIndex = Math.floor(Math.random() * SlbBank.length);
        setMessage(SlbBank[anotherRandomIndex].message);
        }

    else (setMessage(filteredArray[randomIndex].message));
  }

    return (
    <>
    <div className="button-container">
      <button className = "button3" onClick={handleClick}>
        Click for a Self Love Bomb
      </button>
      </div>
      <h3>{message}</h3>
    </>

      );
    
};

export default SpecificSlbButton;
