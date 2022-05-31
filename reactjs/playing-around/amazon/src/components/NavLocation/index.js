import classes from './NavLocation.module.css';

const NavLocation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <div className={classes.icon}></div>
      </div>
      <div className={classes.info}>
        <p className={classes.infoLabel}>Deliver to</p>
        <p className={classes.infoValue}>Vietnam</p>
      </div>
    </div>
  );
};

export default NavLocation;
