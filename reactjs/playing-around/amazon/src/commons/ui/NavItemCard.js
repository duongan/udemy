import classes from './NavItemCard.module.css';

const NavItemCard = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default NavItemCard;
