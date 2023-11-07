import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TestSpeak = () => {
  const [text, setText] = useState('');
  const { speak } = useSpeechSynthesis();

  const handleSpeak = () => {
    if (text) {
      speak({ text });
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak"
        rows="4"
        cols="50"
      />
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};
export default TestSpeak;
