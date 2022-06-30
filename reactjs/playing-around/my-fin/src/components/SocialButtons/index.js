import React from 'react';

import { ButtonWithIcon } from '../common';
import appleIcon from '../../assets/images/apple.png';
import googleIcon from '../../assets/images/google.png';
import facebookIcon from '../../assets/images/facebook.png';
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
      position: 'relative',
    },
    iconUrl: appleIcon,
    iconAlt: 'apple',
    iconWidth: 19,
    iconHeight: 20,
  };

  const googleBtnProps = {
    hoveredBgColor: '#fff',
    title: 'Log in with Google',
    style: {
      color: 'rgba(22,26,28,.95)',
      height: btnHeight,
      backgroundColor: '#fff',
      boxShadow: '1px 5px 6px rgb(0 0 0 / 50%)',
      position: 'relative',
    },
    iconUrl: googleIcon,
    iconAlt: 'google',
    iconWidth: 19,
    iconHeight: 20,
  };

  const facebookBtnProps = {
    hoverEffect: true,
    hoveredBgColor: '#4164b2',
    title: 'Log in with Facebook',
    style: {
      height: btnHeight,
      backgroundColor: '#334f8d',
      boxShadow: '1px 5px 6px rgb(51 79 141 / 30%)',
      position: 'relative',
    },
    iconUrl: facebookIcon,
    iconAlt: 'facebook',
    iconWidth: 19,
    iconHeight: 20,
  };

  return (
    <div className={styles.container}>
      <ButtonWithIcon {...appleBtnProps} />
      <ButtonWithIcon {...googleBtnProps} />
      <ButtonWithIcon {...facebookBtnProps} />
    </div>
  );
};

export default SocialButtons;
