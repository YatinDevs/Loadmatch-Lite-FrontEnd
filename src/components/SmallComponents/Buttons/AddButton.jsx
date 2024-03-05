import React from "react";

const AddButton = ({ type, label, className, handleSubmit }) => {
  return (
    <button
      type={type}
      className={`${className} uppercase transition-all `}
      onClick={handleSubmit}
    >
      Add {label}
    </button>
  );
};

export default AddButton;
