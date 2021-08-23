import React from "react";
import Nav from "react-bootstrap/Nav";
//reactrouter
export const NavBar = () => {
  return (
    <Nav variant="pills" defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/clientspage">Client Page</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/weeklyboard">Weekly Board</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
