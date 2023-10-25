import React, { useRef } from 'react';

import Modal from './Modal';
import Button from '../FormElements/Button';

const ErrorModal = props => {
  const sideDrawerRef = useRef(null);
  console.log('Error Message:', props.error)
  return (
    <Modal
      ref={sideDrawerRef}
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;