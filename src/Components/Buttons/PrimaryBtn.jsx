import React from 'react';

const PrimaryBtn = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
