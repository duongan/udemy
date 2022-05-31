import NavItemCard from '../../commons/ui/NavItemCard';
import NavLocation from '../NavLocation';
import NavSearchBar from '../NavSearchBar';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.container}>
      <NavItemCard>
        <div className={classes.navLogo}></div>
      </NavItemCard>
      <NavItemCard>
        <NavLocation />
      </NavItemCard>
      <NavSearchBar />
      <NavItemCard>
        <div className="countries">Countries</div>
      </NavItemCard>
      <NavItemCard>
        <div className="user-info">User Info</div>
      </NavItemCard>
      <NavItemCard>
        <div className="return-order">Return & Order</div>
      </NavItemCard>
      <div className="cart"></div>
    </div>
  );
};

export default Header;
