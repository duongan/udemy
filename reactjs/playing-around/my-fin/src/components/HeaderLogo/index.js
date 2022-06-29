import styles from './HeaderLogo.module.css';
import emptyImg from '../../assets/images/empty-image.png';

const HeaderLogo = () => {
  return (
    <div className={styles.container}>
      <img src={emptyImg} alt="logo" />
      <div className={styles.brandName}>
        <span>my</span>
        <span>Fin</span>
      </div>
    </div>
  );
};

export default HeaderLogo;
