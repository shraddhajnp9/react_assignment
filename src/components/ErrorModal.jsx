import React from 'react';
import Modal from 'react-modal';

const ErrorModal = ({ error, onClose }) => {
  // console.log("in ErrorModal")
  // console.log(error);
  // console.log(onClose);
  return (
    <Modal isOpen={!!error} onRequestClose={onClose}>
      <h2>Error</h2>
      <p>{error}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ErrorModal;
