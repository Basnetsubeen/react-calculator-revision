import React from "react";
import Button from "./Button";

const ButtonArea = ({ handleOnChange }) => {
  const buttonArg = [
    {
      clsm: "btn-ac",
      label: "AC",
    },
    {
      clsm: "btn-c",
      label: "C",
    },
    {
      clsm: "btn-multi",
      label: "*",
    },
    {
      clsm: "btn-div",
      label: "/",
    },
    {
      clsm: "btn-7",
      label: "7",
    },
    {
      clsm: "btn-8",
      label: "8",
    },
    {
      clsm: "btn-9",
      label: "9",
    },
    {
      clsm: "btn-plus",
      label: "+",
    },
    {
      clsm: "btn-4",
      label: "4",
    },
    {
      clsm: "btn-5",
      label: "5",
    },
    {
      clsm: "btn-6",
      label: "6",
    },
    {
      clsm: "btn-minus",
      label: "-",
    },
    {
      clsm: "btn-1",
      label: "1",
    },
    {
      clsm: "btn-2",
      label: "2",
    },
    {
      clsm: "btn-3",
      label: "3",
    },
    {
      clsm: "btn-ans",
      label: "=",
    },
    {
      clsm: "btn-dot",
      label: ".",
    },
    {
      clsm: "btn-0",
      label: "0",
    },
  ];
  return (
    <>
      {buttonArg.map((item, i) => {
        // return <Button clsm={item.clsm} label={item.label} key={i} />
        return <Button handleOnChange={handleOnChange} {...item} key={i} />;
      })}
    </>
  );
};

export default ButtonArea;
