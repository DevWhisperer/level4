import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import NavLoginButtonStyle from "../style/NavLoginButtonStyle";

const NavbarComponent = () => {
  const navigate = useNavigate();
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
          <NavLoginButtonStyle>
            <Link to="/login" style={{ textDecoration: "none" }}>
              로그인하기
            </Link>
          </NavLoginButtonStyle>
          <button>MyCart</button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
