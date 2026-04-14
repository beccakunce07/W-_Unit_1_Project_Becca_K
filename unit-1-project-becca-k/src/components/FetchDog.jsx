import React, { useState, useEffect } from 'react';

const DogPic = () => {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDog = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message); // data.message contains the image URL
    } catch (error) {
      console.error("Error fetching dog:", error);
    } finally {
      setLoading(false);
    }
  };

  // Optional: Load a dog immediately when the page first opens
  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div style={{ textAlign: 'left', justifyContent: 'left', marginTop: '10px' }}>
      <h2
      style ={{
        justifyContent: 'left'
      }}>🐕 For the dog lovers</h2>
      <div >
        {loading ? (
          <p>Finding a good boy...</p>
        ) : (
          dogImage && <img src={dogImage}
          alt="A sweetie angel muffin dog"
          style={{ 
            maxwidth: '300px', 
            maxWidth: '300px', 
            borderRadius: '11px', 
            marginRight: 'auto', 
            padding: 'auto', 
            border: '2px solid var(--dark-green)'
            }} />
        )}
      </div>

      <button className='button2'
        onClick={fetchDog} 
        disabled={loading}
      >
        {loading ? "Loading..." : "Another Sweet Angel"}
      </button>
    </div>
  );
};

export default DogPic;
