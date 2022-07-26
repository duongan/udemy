import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../store/thunkActionCreators';
import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfo);
  const clickLogoHandler = () => {
    navigate('/');
  };
  const logout = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.container}>
      <div className={styles.brand} onClick={clickLogoHandler}>
        MyTodo
      </div>
      <div></div>
      <div className={styles.uname} onClick={logout}>
        {userInfo ? userInfo.email : ''}
      </div>
    </div>
  );
};

export default Header;
