import React, { PropTypes } from 'react';

const Modal = ({ children, closeModal }) => {
  return (
    <div>
      <div className="modalStyle">
        <div className="thight-div">
          <div className="force-right" onClick={closeModal}> X </div>
        </div>
        {children}
      </div>
      <div className="backdropStyle"/>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.object,
  closeModal: PropTypes.func.isRequired
};

export default Modal;
