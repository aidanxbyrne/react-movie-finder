import React from "react";
import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <div className="spinner">
      <img
        src={spinner}
        width={50}
        className="text-center mx-auto"
        alt="loading"
      />
    </div>
  );
}

export default Spinner;
