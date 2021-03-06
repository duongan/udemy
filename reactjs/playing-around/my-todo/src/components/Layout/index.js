import { useLocation } from 'react-router-dom';
import Header from '../Header';
// import './Layout.module.scss';

const Layout = (props) => {
  const { pathname } = useLocation();
  return (
    <>
      <div id="modal-root"></div>
      {pathname !== '/login' && pathname !== '/signup' && (
        <header>
          <Header />
        </header>
      )}
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
