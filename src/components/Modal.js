import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ children, closeModal, modalState }) => {
  if (!modalState) {
    return null
  }
  return (

    <div className='modal is-active'>
      <div className='modal-background' onClick={closeModal} />
      <div className='modal-content'>
        <div className='content'>
          {children}
        </div>
        <button className='modal-close is-small' aria-label='close' />
        <a className='button' onClick={closeModal}>Go Back</a>
      </div>
    </div>
  )
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired
}

export default Modal
