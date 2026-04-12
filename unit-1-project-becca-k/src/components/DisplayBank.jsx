import { useState, useEffect } from 'react';
import SlbBank from './slbBank.jsx';

function DisplayBank() {
  const [voices, setVoices] = useState([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState("");

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      // Set a default voice if none selected
      if (availableVoices.length > 0 && !selectedVoiceName) {
        setSelectedVoiceName(availableVoices[0].name);
      }
    };

    loadVoices();
    // Chrome and other browsers load voices asynchronously
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [selectedVoiceName]);

  const handlePlay = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Find and set the selected voice object
    const voice = voices.find((v) => v.name === selectedVoiceName);
    if (voice) {
      utterance.voice = voice;
    }

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      {/* Voice Selection Dropdown */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="voice-select">Choose Voice: </label>
        <select 
          id="voice-select"
          value={selectedVoiceName} 
          onChange={(e) => setSelectedVoiceName(e.target.value)}
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Love Bomb</th>
          </tr>
        </thead>
        <tbody>
          {SlbBank.map((item) => (
          /* maps over the object to display */
            <tr key={item.message}> 
              <td>{item.message}</td>
              <td>
                <button onClick={() => handlePlay(item.message)}>
                  🔊
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayBank;
