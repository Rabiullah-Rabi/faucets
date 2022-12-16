import React, { useContext } from "react";
import { AiFillWarning } from "react-icons/ai";
import reCAPTCHA, { ReCAPTCHA } from "react-google-recaptcha";

import Form from "./Form";
import TableTab from "./Tabs";
import { NetworkContext } from "../../../context/NetworkProvider";

const Info = () => {
  const {  selectedNet } = useContext(NetworkContext);

  return (
    <div className="bg-white container p-4">
      <div
        className=" text-black text-start p-3 rounded-0 bg-dark"
        style={{ background: "#EEF2FE" }}
      >
        <AiFillWarning className="text-primary" /> Your wallet is connected to{" "}
        <span className="fw-bold"> { selectedNet}</span>, so you are requesting
        <span className="fw-bold"> { selectedNet}</span> Link/ETH.
      </div>
      {/* form */}
      <Form></Form>
      <TableTab></TableTab>
    </div>
  );
};

export default Info;
