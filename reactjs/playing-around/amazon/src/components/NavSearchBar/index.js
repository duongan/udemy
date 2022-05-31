import classes from './NavSearchBar.module.css';

const NavSearchBar = () => {
  return (
    <div className={classes.container}>
      <select name="pets" id="pet-select">
        <option value="">All</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
      <input type="text" />
      <button>Search</button>
    </div>
  );
};

export default NavSearchBar;
