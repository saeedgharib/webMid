import React from 'react';

const DisplayMessage = ({ message }) => {
  return (
    <div>
      <h2>Display Message Component</h2>
      <p>{message}</p>
    </div>
  );
};

export default DisplayMessage;