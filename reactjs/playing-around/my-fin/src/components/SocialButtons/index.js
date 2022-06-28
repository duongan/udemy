import React from 'react';

import { Button } from '../common';
import styles from './SocialButtons.module.css';

const SocialButtons = () => {
  const btnHeight = '2.5rem';
  const appleBtnProps = {
    hoverEffect: true,
    hoveredBgColor: 'rgba(36,36,36,.86)',
    title: 'Log in with Apple',
    style: {
      height: btnHeight,
      backgroundColor: 'rgba(10,10,10,.86)',
      boxShadow: '1px 5px 6px rgb(10 10 10 / 30%)',
    },
  };

  const googleBtnProps = {
    hoveredBgColor: '#fff',
    title: 'Log in with Google',
    style: {
      color: 'rgba(22,26,28,.95)',
      height: btnHeight,
      backgroundColor: '#fff',
      boxShadow: '1px 5px 6px rgb(0 0 0 / 50%)',
    },
  };

  const facebookBtnProps = {
    hoverEffect: true,
    hoveredBgColor: '#4164b2',
    title: 'Log in with Facebook',
    style: {
      height: btnHeight,
      backgroundColor: '#334f8d',
      boxShadow: '1px 5px 6px rgb(51 79 141 / 30%)',
    },
  };

  return (
    <div className={styles.container}>
      <Button {...appleBtnProps} />
      <Button {...googleBtnProps} />
      <Button {...facebookBtnProps} />
    </div>
  );
};

export default SocialButtons;
