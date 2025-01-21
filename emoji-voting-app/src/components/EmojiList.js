import React from 'react';

class EmojiList extends React.Component {
  render() {
    const { emojis, onVote } = this.props;
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
  }
}

export default EmojiList;
