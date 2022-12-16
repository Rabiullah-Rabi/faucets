import React from "react";
import { AiFillWarning } from "react-icons/ai";
import reCAPTCHA, { ReCAPTCHA } from "react-google-recaptcha";

import Form from "./Form";
import TableTab from "./Tabs";

const Info = () => {
  return (
    <div className="bg-white container p-4">
      <div
        className=" text-black text-start p-3 rounded-0 bg-dark"
        style={{ background: "#EEF2FE" }}
      >
        <AiFillWarning className="text-primary" /> Your wallet is connected to{" "}
        <span className="fw-bold"> Harmony Testnet</span>, so you are requesting
        <span className="fw-bold"> Harmony Testnet</span> Link/ETH.
      </div>
      {/* form */}
      <Form></Form>
      <TableTab></TableTab>
    </div>
  );
};

export default Info;
