import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { logOut } from '../../store/thunkActionCreators';
import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfo);
  const [showProfilePopover, setShowProfilePopover] = useState(false);
  const popoverRef = useRef();
  const userIconRef = useRef();

  const clickLogoHandler = () => {
    navigate('/');
  };

  const clickUserIconHandler = () => {
    setShowProfilePopover(!showProfilePopover);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(logOut());
  };

  useEffect(() => {
    const showAndHidePopoverListener = (e) => {
      if (
        !showProfilePopover ||
        userIconRef.current.contains(e.target) ||
        popoverRef.current.contains(e.target)
      ) {
        return;
      }
      setShowProfilePopover(false);
    };
    document.addEventListener('click', showAndHidePopoverListener);
    return () => {
      document.removeEventListener('click', showAndHidePopoverListener);
    };
  }, [showProfilePopover]);

  return (
    <div className={styles.container}>
      <div className={styles.brand} onClick={clickLogoHandler}>
        MyTodo
      </div>
      <div></div>
      <div
        className={styles.profileIcon}
        onClick={clickUserIconHandler}
        ref={userIconRef}
      >
        {/* {userInfo ? userInfo.email : ''} */}
        <FontAwesomeIcon icon={faCircleUser} />
      </div>
      {showProfilePopover && (
        <div className={styles.profilePopover} ref={popoverRef}>
          <div>{userInfo ? userInfo.email : ''}</div>
          <a href="#" onClick={() => {}}>
            Profile
          </a>
          <a href="#" onClick={logout}>
            Sign out
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
