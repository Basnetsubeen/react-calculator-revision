import React from "react";

const Display = ({ str, isPrank }) => {
  const clsm = isPrank ? "display prank" : "display";
  return <div className={clsm}>{str || "0.00"} </div>;
};

export default Display;
