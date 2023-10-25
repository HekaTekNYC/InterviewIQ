import React from 'react';
import ReactDOM from "react-dom"
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return createPortal(content, document.body);
};

const Modal = (props) => {
  const { show, onCancel } = props; // Use `show` instead of `showModal` there was a discrepancy between our Modal and Error Modal. We had it set to showModal in this file and set to show on the ErrorModal.js which is why it wasn't activating.

  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;


