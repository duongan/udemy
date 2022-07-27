import Modal from '../commons/Modal';
import styles from './ConfirmDeleteModal.module.scss';

const ConfirmDeleteModal = (props) => {
  const buttons = [
    <button
      key="cancel-btn"
      className={styles.cancelBtn}
      onClick={props.onClose}
    >
      Cancel
    </button>,
    <button key="delete-btn" className={styles.deleteBtn} onClick={props.onOk}>
      Delete
    </button>,
  ];

  return <Modal {...props} buttons={buttons} />;
};

export default ConfirmDeleteModal;
