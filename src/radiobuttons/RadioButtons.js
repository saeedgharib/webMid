import React, { useState } from 'react';

const RadioButtons = () => {
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h1>LAB Mid Task Web Development</h1>
      <div>
        <label>
          <input
            type="radio"
            value="red"
            checked={color === 'red'}
            onChange={handleChange}
          />
          Red
        </label>
        <label>
          <input
            type="radio"
            value="green"
            checked={color === 'green'}
            onChange={handleChange}
          />
          Green
        </label>
      </div>
      <input
        type="text"
        value={color === 'red' ? 'Red color' : color === 'green' ? 'Green color' : ''}
        readOnly
      />
    </div>
  );
};

export default RadioButtons;;
