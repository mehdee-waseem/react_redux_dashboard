import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarPanel = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar bg="light" expanded="lg">
        <Container fluid>
          <Navbar.Brand href="#">Redux-Toolkit</Navbar.Brand>

          <Nav>
            <Nav.Link to="/" as={Link}>
              Products
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>
                My Bags {cartProducts.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarPanel;
