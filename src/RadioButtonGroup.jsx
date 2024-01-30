import React, { useState } from 'react';

const RadioButtonGroup = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="radio-button-group">
      {options.map((option) => (
        <button
          key={option}
          className={`radio-button ${option === selectedOption ? 'selected' : ''}`}
          onClick={() => handleOptionChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
