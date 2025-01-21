import React from 'react';

class ClearButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClear} style={{ marginTop: '20px' }}>
        Очистити результати
      </button>
    );
  }
}

export default ClearButton;
