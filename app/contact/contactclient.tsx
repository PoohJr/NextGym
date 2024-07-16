"use client";
import React from "react";

const Client = () => {
  function navigateBtn() {
    console.log("Hello");
    // Look at the Video i sent you in whatapps
  }
  return (
    <div>
      <button onClick={navigateBtn} className="btn btn-warning">
        Contact Us
      </button>
    </div>
  );
};

export default Client;
