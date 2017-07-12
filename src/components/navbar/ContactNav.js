import React from 'react';
import smilies from '../../assets/smilies.svg';
import Modal from '../common/Modal';
import ContactForm from './ContactForm';
import { contact, closeModal } from '../../actions/navbarActions';

const ContactNav = () => {
  return (
    <div className="background-container">
      <div className="top-container">
        <Modal isOpen closeModal={closeModal}>
          <ContactForm onSubmit={contact} />
        </Modal>
      </div>
      <div className="bottom-container">
        <img src={smilies} className="smilies-small" />
      </div>
    </div>
  );
};

export default ContactNav;
