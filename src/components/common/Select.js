import React from 'react';

const Select = ({ options }) => {
  return (
    <select>
      {options.map((option, idx) => {
        return <option key={idx} value={option.distance}>{option.name}</option>
      })}
    </select>
  )
};

export default Select;
