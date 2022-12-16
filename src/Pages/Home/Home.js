import React from "react";
import Info from "./Info/Info";

const Home = () => {
  return (
    <div style={{ background: "#EEF2FE" }}>
      <div className=" alert alert-primary text-white bg-primary " role="alert">
        Notice here
      </div>
      <div className="container text-start py-5">
        <h1 className="text-primary">Request testnet LINK</h1>
        <p className="w-50">
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can create and test your own oracle and Chainlinked
          smart contract
        </p>
        <Info></Info>
      </div>
    </div>
  );
};

export default Home;
