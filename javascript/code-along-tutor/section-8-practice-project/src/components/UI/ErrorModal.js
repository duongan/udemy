import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onOK}></div>;
};

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onOK}>Okay</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onOK={props.onOK} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay {...props} />,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    );
};

export default ErrorModal;
