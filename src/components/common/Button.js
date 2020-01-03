import React from 'react';

const Button = ({ styles, type, text, onPress }) => {
  return <button className={styles} type={type} onClick={onPress}>{text}</button>
};

export default Button;
