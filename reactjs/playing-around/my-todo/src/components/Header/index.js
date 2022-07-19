import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserActions } from '../../store/UserSlice';
import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfo);
  const clickLogoHandler = () => {
    navigate('/');
  };
  const logout = () => {
    dispatch(UserActions.logout());
    localStorage.removeItem('userInfo');
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
