import React from 'react';

class Result extends React.Component {
  render() {
    const { winner } = this.props;
    return (
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2>Результати голосування:</h2>
        {winner ? (
          <>
            <p>Переможець: {winner.emoji}</p>
            <p>Кількість голосів: {winner.votes}</p>
          </>
        ) : (
          <p>Голосів поки немає.</p>
        )}
      </div>
    );
  }
}

export default Result;
