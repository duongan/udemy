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
    const { style, hoverEffect, outlineColor, hoveredBgColor } = props;
    if (!hoverEffect) {
      return;
    }
    if (hoveredBgColor) {
      e.target.style.backgroundColor = hoveredBgColor;
    }
    if (style.boxShadow) {
      e.target.style.boxShadow = style.boxShadow;
    }
    if (outlineColor) {
      e.target.style.color = outlineColor;
      e.target.style.borderColor = outlineColor;
    }
  };

  const mouseOutHandler = (e) => {
    const { style, hoverEffect, outlineColor } = props;
    if (hoverEffect) {
      if (style && style.backgroundColor) {
        e.target.style.backgroundColor = style.backgroundColor;
      }
      if (outlineColor) {
        e.target.style.color = style.color;
        e.target.style.border = style.border;
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
