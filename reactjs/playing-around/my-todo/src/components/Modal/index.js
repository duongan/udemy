// import { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const BackDrop = (props) => {
  return <div className={styles.backDrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  const okHandler = () => {
    props.onOk();
  };

  const cancelHandler = () => {
    props.onClose();
  };

  return (
    <div className={styles.overlayContainer}>
      <div className={styles.header}>Warning</div>
      <div className={styles.content}>Are you sure you want to delete it?</div>
      <div className={styles.footer}>
        <button onClick={okHandler}>Delete</button>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  const onOk = () => {
    props.onOk();
    closeModalHandler();
  };
  const closeModalHandler = () => {
    props.onClose();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={closeModalHandler} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={closeModalHandler} onOk={onOk} />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
