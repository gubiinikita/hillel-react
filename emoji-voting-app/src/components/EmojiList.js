import React from 'react';

const EmojiList = ({ emojis, onVote }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
      {emojis.map((item) => (
        <div key={item.id} style={{ textAlign: 'center' }}>
          <div
            style={{ fontSize: '2rem', cursor: 'pointer' }}
            onClick={() => onVote(item.id)}
          >
            {item.emoji}
          </div>
          <p>{item.votes}</p>
        </div>
      ))}
    </div>
  );
};

export default EmojiList;
