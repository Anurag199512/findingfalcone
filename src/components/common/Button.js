import React from 'react';

const Button = ({ type, text, onPress }) => {
  return <button type={type} onClick={onPress}>{text}</button>
};

export default Button;
