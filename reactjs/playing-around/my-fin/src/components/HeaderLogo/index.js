import { useNavigate } from 'react-router-dom';
import styles from './HeaderLogo.module.css';
import emptyImg from '../../assets/images/empty-image.png';

const HeaderLogo = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/');
  };
  return (
    <div className={styles.container} onClick={clickHandler}>
      <img src={emptyImg} alt="logo" />
      <div className={styles.brandName}>
        <span>my</span>
        <span>Fin</span>
      </div>
    </div>
  );
};

export default HeaderLogo;
