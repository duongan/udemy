import Header from '../Header';
// import './Layout.module.scss';

const Layout = (props) => {
  return (
    <>
      <div id="backdrop-root"></div>
      <div id="modal-root"></div>
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
