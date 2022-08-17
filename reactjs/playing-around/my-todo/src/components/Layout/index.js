import { useLocation } from 'react-router-dom';
import ErrorBoundary from '../commons/ErrorBoundary';
import Header from '../Header';
// import './Layout.module.scss';

const Layout = (props) => {
  const { pathname } = useLocation();
  return (
    <ErrorBoundary>
      <div id="modal-root"></div>
      {pathname !== '/login' && pathname !== '/signup' && (
        <header>
          <Header />
        </header>
      )}
      <main>{props.children}</main>
    </ErrorBoundary>
  );
};

export default Layout;
