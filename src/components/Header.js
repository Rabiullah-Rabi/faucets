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

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar expand="lg">
      <Container>
        <Row className="w-100 d-flex justify-content-between">
          <Col className="d-flex justify-start">
            <Navbar.Brand href="/" className="text-left fw-bold fs-3">Faucets</Navbar.Brand>
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
                  className="mx-3"
                  variant="outline-primary"
                  onClick={() => setModalShow(true)}
                >
                  <FaWallet></FaWallet> Connect Wallet
                </Button>
                <Dropdown className="border border-0 ">
                  <Dropdown.Toggle className="bg-light border border-0">
                    <FaUserCircle className="text-dark border border-0 fs-2"></FaUserCircle>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
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
