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
    <div>
      <h3>For the dog lovers</h3>
      
      <div style={{ height: '300px', width:'aut', marginBottom: '20px' }}>
        {loading ? (
          <p>Finding a good boy...</p>
        ) : (
          dogImage && <img src={dogImage} alt="A sweetie angel muffin dog" style={{ maxWidth: '300px', borderRadius: '10px' }} />
        )}
      </div>

      <button className='button3'
        onClick={fetchDog} 
        disabled={loading}
        style={{ padding: 'auto', fontSize: '16px', cursor: 'pointer' }}
      >
        {loading ? "Loading..." : "Another Good Boy"}
      </button>
    </div>
  );
};

export default DogPic;
