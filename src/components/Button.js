import React from "react";

const Button = ({ clsm, label, handleOnChange }) => {
  return (
    <div className={clsm} onClick={() => handleOnChange(label)}>
      {label}
    </div>
  );
};

export default Button;
