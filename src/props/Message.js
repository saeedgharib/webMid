import React, { useState } from 'react';
import DisplayMessage from './DisplayMessage';

const Message = () => {
  const [text, setText] = useState('Hello from Message Component!');

  return (
    <div>
      <h1>Passing props from Message component to DisplayMessage Component</h1>
      <DisplayMessage message={text} />
    </div>
  );
};

export default Message;