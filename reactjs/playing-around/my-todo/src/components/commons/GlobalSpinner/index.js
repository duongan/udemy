import Spinner from '../Spinner';
import styles from './GlobalSpinner.module.scss';

const GlobalSpinner = () => {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
};

export default GlobalSpinner;
