import { useLocation } from 'react-router-dom';
import Header from '../Header';
// import './Layout.module.scss';

const Layout = (props) => {
  const { pathname } = useLocation();
  return (
    <>
      <div id="backdrop-root"></div>
      <div id="modal-root"></div>
      {pathname !== '/login' && (
        <header>
          <Header />
        </header>
      )}
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
