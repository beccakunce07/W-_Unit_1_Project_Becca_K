import { useState } from "react";
import SlbBank from "./slbBank";

function SpecificSlbButton ({category}) {
  const [message, setMessage] = useState ("");

  const handleClick = () => {
    const filteredArray = SlbBank.filter((index) => index.key === category);
    const randomIndex = Math.floor(Math.random() * filteredArray.length);

    setMessage(filteredArray[randomIndex].message);
  };

  return (
    <>
      <button onClick={handleClick}>
        Click for a Self Love Bomb
      </button>
      <h1>{message}</h1>
    </>
  );
};

export default SpecificSlbButton;