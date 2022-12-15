import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";

const Login = () => {
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
        <h1 className="text-center">Login </h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Label>Password</Form.Label>
        <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
          <Form.Control
            className="border-0 border-bottom"
            type={!showPass ? "password" : "text"}
            placeholder="Password"
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
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary text-decoration-none">
            Signup
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

export default Login;
