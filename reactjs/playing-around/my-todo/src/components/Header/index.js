import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>My Todo</div>
      <div></div>
      <div className={styles.uname}>An Duong</div>
    </div>
  );
};

export default Header;
