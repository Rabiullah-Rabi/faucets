import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  return (
    <div>
      <form className="row g-3 text-start w-75">
        <div className="col-md-12">
          <label for="walletAddress" className="form-label">
            Wallet Address
          </label>
          <input type="text" className="form-control" id="walletAddress" />
        </div>
        <div className="col-md-6">
          <label for="reqType" className="form-label">
            Request Type
          </label>
          <input
            type="text"
            className="form-control"
            id="reqType"
            defaultValue="20 Test Link"
            disabled
          />
        </div>
        <div className="col-md-6">
          <label for="reqType" className="form-label">
            .
          </label>
          <input
            type="text"
            className="form-control"
            id="reqType"
            defaultValue="0.5 ETH"
            disabled
          />
        </div>
        <ReCAPTCHA sitekey="6Ld3p4MjAAAAAKNHyovkIuhsG0xOMlcLFmN1Qhxz" />,
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
