import React, { useEffect, useRef } from 'react';

import './Button.module.css';

const Button = (props) => {
  const btnRef = useRef();
  const title = props.children || props.title || '';

  useEffect(() => {
    if (props) {
      btnRef.current.style.backgroundColor = props.bgColor || 'none';
      btnRef.current.style.height = props.height || 'auto';
    }
  });

  const clickHandler = (e) => {
    e.preventDefault();
    if (typeof props.onClick !== 'function') {
      return;
    }
    props.onClick();
  };

  const mouseOverHandler = (e) => {
    e.target.style.backgroundColor = props.hoveredBgColor || 'none';
    e.target.style.boxShadow = props.boxShadow || 'none';
  };

  const mouseOutHandler = (e) => {
    e.target.style.backgroundColor = props.bgColor || 'none';
    e.target.style.boxShadow = 'none';
  };

  return (
    <button
      ref={btnRef}
      title={props.title}
      onClick={clickHandler}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      {title}
    </button>
  );
};

export default Button;
