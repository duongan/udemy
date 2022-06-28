import React, { useEffect, useRef } from 'react';

import './Button.module.css';

const Button = (props) => {
  const btnRef = useRef();
  const title = props.children || props.title || '';

  useEffect(() => {
    const { style, hoverEffect } = props;
    if (style) {
      Object.keys(style).forEach((key) => {
        btnRef.current.style[key] = style[key];
        if (hoverEffect) {
          btnRef.current.style.boxShadow = 'none';
        }
      });
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
    const { style, hoverEffect } = props;
    if (!hoverEffect) {
      return;
    }
    if (props.hoveredBgColor) {
      e.target.style.backgroundColor = props.hoveredBgColor;
    }
    if (style.boxShadow) {
      e.target.style.boxShadow = style.boxShadow;
    }
  };

  const mouseOutHandler = (e) => {
    const { style, hoverEffect } = props;
    if (hoverEffect) {
      if (style && style.backgroundColor) {
        e.target.style.backgroundColor = style.backgroundColor;
      }
      e.target.style.boxShadow = 'none';
    }
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
