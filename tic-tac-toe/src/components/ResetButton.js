import React from 'react';

const ResetButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      Restart
    </button>
  );
};

export default ResetButton;
