import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />
    </div>
  );
};

export default Spinner;
