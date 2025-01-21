import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    const savedData = JSON.parse(localStorage.getItem('emojiVotes'));
    this.state = {
      emojiData: savedData || emojis,
      winner: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.emojiData !== this.state.emojiData) {
      localStorage.setItem('emojiVotes', JSON.stringify(this.state.emojiData));
    }
  }

  handleVote = (id) => {
    this.setState((prevState) => ({
      emojiData: prevState.emojiData.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      ),
    }));
  };

  showResults = () => {
    const maxVotes = Math.max(...this.state.emojiData.map((item) => item.votes));
    const topEmoji = this.state.emojiData.find((item) => item.votes === maxVotes);
    this.setState({ winner: topEmoji });
  };

  clearResults = () => {
    this.setState({ emojiData: emojis, winner: null });
    localStorage.removeItem('emojiVotes');
  };

  render() {
    const { emojiData, winner } = this.state;

    return (
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <h1>Голосування за найкращий смайлик</h1>
        <EmojiList emojis={emojiData} onVote={this.handleVote} />
        <button onClick={this.showResults} style={{ marginTop: '20px' }}>
          Show Results
        </button>
        <Result winner={winner} />
        <ClearButton onClear={this.clearResults} />
      </div>
    );
  }
}

export default App;
