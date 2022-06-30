import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../common';
import HeaderLogo from '../HeaderLogo';
import styles from './NavBar.module.css';

const NavBar = () => {
  const loginBtnProps = {
    title: 'Log in',
    hoverEffect: true,
    outlineColor: '#f73a7e',
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
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <HeaderLogo />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Personal Finance App</NavLink>
          </li>
          <li>
            <NavLink to="/">Bank Connections</NavLink>
          </li>
          <li>
            <NavLink to="/">Budgeting</NavLink>
          </li>
          <li>
            <NavLink to="/">Currencies</NavLink>
          </li>
          <li>
            <NavLink to="/">Pricing</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Button {...loginBtnProps} onClick={() => navigate('/login')} />
      </div>
    </div>
  );
};

export default NavBar;
