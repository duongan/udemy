import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const ModalOverlay = (props) => {
  const { onClose, buttons = [], title = '', message = '' } = props;

  const clickOnBackgroundHandler = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlayContainer} onClick={clickOnBackgroundHandler}>
      <div className={styles.modal}>
        <div className={styles.header}>{title || ''}</div>
        <div className={styles.content}>{message || ''}</div>
        <div className={styles.footer}>{buttons.map((item) => item)}</div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay {...props} />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
