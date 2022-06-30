import React, { useEffect, useRef } from 'react';

import './Button.module.css';

const Button = (props) => {
  const btnRef = useRef();
  const title = props.children || props.title || '';

  useEffect(() => {
    const { style, hoverEffect, defaultBoxShadow } = props;
    if (style) {
      Object.keys(style).forEach((key) => {
        btnRef.current.style[key] = style[key];
        if (hoverEffect) {
          btnRef.current.style.boxShadow = defaultBoxShadow || 'none';
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
      e.currentTarget.style.backgroundColor = hoveredBgColor;
    }
    if (style.boxShadow) {
      e.currentTarget.style.boxShadow = style.boxShadow;
    }
    if (outlineColor) {
      e.currentTarget.style.color = outlineColor;
      e.currentTarget.style.borderColor = outlineColor;
    }
  };

  const mouseOutHandler = (e) => {
    const { style, hoverEffect, outlineColor, defaultBoxShadow } = props;
    if (hoverEffect) {
      if (style && style.backgroundColor) {
        e.currentTarget.style.backgroundColor = style.backgroundColor;
      }
      if (outlineColor) {
        e.currentTarget.style.color = style.color;
        e.currentTarget.style.border = style.border;
      }
      e.currentTarget.style.boxShadow = defaultBoxShadow || 'none';
    }
  };

  return (
    <button
      ref={btnRef}
      // title={props.title}
      onClick={clickHandler}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      disabled={props.disabled}
    >
      {title}
    </button>
  );
};

export default Button;
