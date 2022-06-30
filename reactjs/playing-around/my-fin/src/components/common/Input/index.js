import React from 'react';

import './Input.module.css';

const Input = (props) => {
  const changeHandler = (e) => {
    props.onChange(e.target.value);
  };
  return <input {...props} onChange={changeHandler} />;
};

export default Input;
