import React from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import WalletModal from "./WalletModal";
import { FaWallet, FaAngleDown, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar expand="lg">
      <Container>
        <Row className="w-100 d-flex justify-content-between">
          <Col className="d-flex justify-start align-items-center">
            <Link to='/' className="text-decoration-none">
            <Navbar.Brand
              className="text-left fw-bold fs-3 text-primary"
            >
              Faucets
            </Navbar.Brand></Link>
          </Col>
          <Col>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <>
                <Form.Select className="w-25">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Button
                  className="mx-3 rounded-0"
                  variant="outline-primary"
                  onClick={() => setModalShow(true)}
                >
                  <FaWallet></FaWallet> Connect Wallet
                </Button>

                <Dropdown className="border border-0 ">
                  <Dropdown.Toggle
                    className="border border-0 rounded-circle"
                    style={{
                      background: "#EFEFEF",
                      height: "55px",
                      width: "55px",
                    }}
                  >
                    <FaUserCircle
                      className="text-dark border border-0 fs-2 "
                      style={{ color: "#6D7380" }}
                    ></FaUserCircle>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/login" className="text-decoration-none text-dark"> Log in</Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="/signup"><Link to="/signup" className="text-decoration-none text-dark"> Sign Up</Link></Dropdown.Item>
                    <Dropdown.Item href="/faq"><Link to="/faq" className="text-decoration-none text-dark"> FAQ</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
      <WalletModal show={modalShow} onHide={() => setModalShow(false)} />
    </Navbar>
  );
};

export default Header;
