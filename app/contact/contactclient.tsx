"use client";
import React from "react";
import { useRouter } from "next/router";

const Client = () => {
  const router = useRouter();

  function navigateBtn() {
    router.push("/contact/contactform");
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
