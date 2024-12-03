import React from 'react';

const Modal = ({ showModal, onClose, children }) => {
  if (!showModal) return null; // Don't render the modal if showModal is false
  
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        {/* Modal Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
