import { Todos } from '../../components';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Todos />
    </div>
  );
};

export default Home;
