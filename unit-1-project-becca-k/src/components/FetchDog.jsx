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
    <div style={{ textAlign: 'left', marginTop: '50px' }}>
      <h1>Random Dog Generator</h1>
      
      <div style={{ minHeight: '350px', marginBottom: '20px' }}>
        {loading ? (
          <p>Finding a good boy...</p>
        ) : (
          dogImage && <img src={dogImage} alt="A random dog" style={{ maxWidth: '300px', borderRadius: '10px' }} />
        )}
      </div>

      <button className='button3'
        onClick={fetchDog} 
        disabled={loading}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        {loading ? "Loading..." : "Another Good Boy"}
      </button>
    </div>
  );
};

export default DogPic;
