import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = (props) => {
  const { pathname } = useLocation();
  const showNavBar = pathname !== '/login' && pathname !== '/sign-up';
  return (
    <Fragment>
      {showNavBar && (
        <header>
          <NavBar />
        </header>
      )}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
