import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    return setShowPass(!showPass);
  };
  return (
    <div
      style={{ background: "#EEF2FE", padding: "10% 0" }}
      className="d-flex justify-content-center "
    >
      <Form
        className="p-3 py-4 text-start"
        style={{ width: "402px", background: "#fff" }}
      >
        <h1 className="text-center">Signup </h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Label>Password</Form.Label>
        <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
          <Form.Control
            className="border-0 border-bottom"
            type={!showPass ? "password" : "text"}
            placeholder="Enter Your Password"
          />
          <InputGroup.Text
            id="basic-addon1"
            className="border border-0"
            onClick={handleShowPass}
          >
            {!showPass ? <FaEyeSlash /> : <FaEye />}
          </InputGroup.Text>

          {/* <InputGroup.Addon>
              <FaEyeSlash />
            </InputGroup.Addon> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/login" className="text-primary text-decoration-none">
            Login
          </Link>{" "}
        </p>
        <p className="text-center my-3">Or </p>
        <div className="d-flex justify-content-center">
          <Link style={{ color: "#000" }} className="px-3">
            <FaGoogle />
          </Link>
          <Link style={{ color: "#000" }} className="px-3">
            <FaFacebook />
          </Link>
          <Link style={{ color: "#000" }} className="px-3">
            <FaInstagram />
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
