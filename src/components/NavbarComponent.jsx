import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">NATIVE INSTRUMENTS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/community">Community</Nav.Link>
              <Nav.Link href="/support">Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <input type="text" />
          <button>검색</button>
          <button>MyPage</button>
          <button>MyCart</button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
