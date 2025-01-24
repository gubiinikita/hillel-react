import React, { useState, useEffect, useCallback } from 'react';
import EmojiList from './components/EmojiList';
import Result from './components/Result';
import ClearButton from './components/ClearButton';

const emojis = [
  { id: 1, emoji: '😀', votes: 0 },
  { id: 2, emoji: '😊', votes: 0 },
  { id: 3, emoji: '😎', votes: 0 },
  { id: 4, emoji: '🤩', votes: 0 },
  { id: 5, emoji: '😍', votes: 0 },
];

const App = () => {
  const [emojiData, setEmojiData] = useState(() => {
    const savedData = localStorage.getItem('emojiVotes');
    return savedData ? JSON.parse(savedData) : emojis;
  });
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem('emojiVotes', JSON.stringify(emojiData));
  }, [emojiData]);

  const handleVote = useCallback((id) => {
    setEmojiData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
  }, []);

  const showResults = useCallback(() => {
    const maxVotes = Math.max(...emojiData.map((item) => item.votes));
    const topEmoji = emojiData.find((item) => item.votes === maxVotes);
    setWinner(topEmoji);
  }, [emojiData]);

  const clearResults = useCallback(() => {
    setEmojiData(emojis);
    setWinner(null);
    localStorage.removeItem('emojiVotes');
  }, []);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Голосування за найкращий смайлик</h1>
      <EmojiList emojis={emojiData} onVote={handleVote} />
      <button onClick={showResults} style={{ marginTop: '20px' }}>
        Show Results
      </button>
      <Result winner={winner} />
      <ClearButton onClear={clearResults} />
    </div>
  );
};

export default App;