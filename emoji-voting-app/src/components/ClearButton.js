import React from 'react';

const ClearButton = ({ onClear }) => {
  return (
    <button onClick={onClear} style={{ marginTop: '20px' }}>
      Очистити результати
    </button>
  );
};

export default ClearButton;
