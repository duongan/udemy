import { Link } from 'react-router-dom';
import { Button } from '../common';
import HeaderLogo from '../HeaderLogo';
import styles from './NavBar.module.css';

const NavBar = () => {
  const loginBtnProps = {
    title: 'Log in',
    style: {
      textTransform: 'uppercase',
      height: '2.5rem',
      width: '8rem',
      backgroundColor: '#fff',
      color: 'rgba(22,26,28,.95)',
      border: '2px solid rgba(22,26,28,.95)',
      fontWeight: 'bold',
    },
  };
  return (
    <div className={styles.container}>
      <HeaderLogo />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Log In</Link>
        <Link to="/sign-up">Sign Up</Link>
      </nav>
      <Button {...loginBtnProps} />
    </div>
  );
};

export default NavBar;
