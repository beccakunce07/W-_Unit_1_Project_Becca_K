import { useState } from "react";
import SlbBank from "./slbBank";

function SlbButton () {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * SlbBank.length);
    setMessage(SlbBank[randomIndex].message);
  };

  return (
    <>
      <button className = "button3" onClick={handleClick}>
        Click for a Self Love Bomb
      </button>
      <h1>{message}</h1>
    </>
  );
};

export default SlbButton;