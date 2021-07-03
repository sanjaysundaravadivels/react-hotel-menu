import React, { useEffect, useRef } from "react";
import { FaSmileBeam, FaFlag } from "react-icons/fa";

const Alert = ({ type, msg, removeAlert, height, width }) => {
  console.log(height);
  console.log(width);
  const contariner = useRef(null);
  useEffect(() => {
    const submenu = contariner.current;
    submenu.style.marginTop = `${height / 3}px`;
    const timeout = setTimeout(() => {
      removeAlert();
    }, 4000);
    return () => clearTimeout(timeout);
  });
  return (
    <>
      <p className="alert" ref={contariner}>
        &nbsp; &nbsp;
        <FaFlag /> <br /> {msg} &nbsp; &nbsp;&nbsp; &nbsp; <FaSmileBeam />
      </p>
      <p className="alertsmall">
        &nbsp; &nbsp;
        <FaFlag /> <br /> {msg} &nbsp; &nbsp;&nbsp; &nbsp; <FaSmileBeam />
      </p>
    </>
  );
};

export default Alert;
