import Header from '../Header';

const Layout = (props) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
