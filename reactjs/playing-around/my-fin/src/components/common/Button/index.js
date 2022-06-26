import React from 'react';

import './Button.module.css';

const Button = (props) => {
  const title = props.children || props.title || '';

  const clickHandler = (e) => {
    e.preventDefault();
    if (typeof props.onClick !== 'function') {
      return;
    }
    props.onClick();
  };

  return (
    <button {...props} onClick={clickHandler}>
      {title}
    </button>
  );
};

export default Button;
