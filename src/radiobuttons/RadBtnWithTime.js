import React, { useState, useEffect } from 'react';

const RadBtnWithTime = () => {
  const [color, setColor] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleRadioChange = (event) => {
    setColor(event.target.value);
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setColor('');
        setClicked(false);
      }, 5000);

      // Cleanup the timer if the component unmounts or color changes before 5 seconds
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  return (
    <div style={{}}>
      <h1>Color Selector restes with time</h1>
      <div>
        <label>
          <input
            type="radio"
            value="red"
            checked={color === 'red'}
            onChange={handleRadioChange}
          />
          Red
        </label>
        <label>
          <input
            type="radio"
            value="green"
            checked={color === 'green'}
            onChange={handleRadioChange}
          />
          Green
        </label>
      </div>
      <input
        style={{width: '200px', height: '30px'}}
        
        type="text"
        value={color === 'red' ? 'Red color' : color === 'green' ? 'Green color' : ''}
        readOnly
      />
    </div>
  );
};

export default RadBtnWithTime;
