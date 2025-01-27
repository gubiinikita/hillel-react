import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100px',
        height: '100px',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
      }}
    >
      {value}
    </button>
  );
};

export default Square;
