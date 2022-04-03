import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

const Modal = ({ image, onCloseModal }) => {
  useEffect(() => {
    document.addEventListener('keydown', onEscClick);
    return () => {
      document.removeEventListener('keydown', onEscClick);
    };
  }, []);

  const onEscClick = e => {
    if (!e.key === 'Escape') return;

    onCloseModal();
  };

  const onBackdropClick = e => {
    if (e.target !== e.currentTarget) return;

    onCloseModal();
  };

  return (
    <div className="Overlay" onClick={onBackdropClick}>
      <div className="Modal">
        <img src={image} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
