import React from "react";
import spinner from "../assets/spinner.gif";
import spinnerWhite from "../assets/spinner_white.gif";

function Spinner({ color, className }) {
  return (
    <>
      <div className={`spinner ${className}`}>
        <img
          src={color === "white" ? spinnerWhite : spinner}
          width={50}
          className="text-center mx-auto"
          alt="loading"
        />
      </div>
    </>
  );
}

export default Spinner;
