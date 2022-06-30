import Button from '../Button';
import styles from './ButtonWithIcon.module.css';

const ButtonWithIcon = (props) => {
  return (
    <Button {...props}>
      <img
        className={styles.icon}
        src={props.iconUrl}
        width={props.iconWidth}
        height={props.iconHeight}
        alt={props.iconAlt}
      />
      <span>{props.title}</span>
    </Button>
  );
};

export default ButtonWithIcon;
