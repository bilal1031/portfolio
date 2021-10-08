import React, { useState, createRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import colors from "../Colors/colors";

const NavBar = () => {
  const home = createRef();
  const [indicatorLocation, setIndicatorLocation] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(64);

  const styleSheet = {
    navItem: { color: colors.white, fontFamily: "PT Sans Caption" },
    navBrand: { color: colors.white, fontFamily: "PT Sans Caption" },
    indicator: {
      borderBottomColor: "gold",
      borderBottomWidth: 50,
      backgroundColor: colors.secondary,
      position: "absolute",
      bottom: 3,
      left: indicatorLocation,
      width: indicatorWidth,
      height: 3,
      transition: "0.5s",
    },
  };

  const handleNavClick = (e) => {
    setIndicatorLocation(e.target.offsetLeft);
    setIndicatorWidth(e.target.clientWidth);
  };

  return (
    <>
      <Navbar style={{ backgroundColor: colors.primary }} expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={styleSheet.navBrand}>
            Muhammad Bilal
          </Navbar.Brand>

          <Nav className="float-end" style={{ position: "relative" }}>
            <Nav.Link
              style={styleSheet.navItem}
              href="#home"
              ref={home}
              onClick={handleNavClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={styleSheet.navItem}
              href="#link"
              onClick={handleNavClick}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              style={styleSheet.navItem}
              href="#link"
              onClick={handleNavClick}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              style={styleSheet.navItem}
              href="#link"
              onMouseDown={handleNavClick}
            >
              Contact Me
            </Nav.Link>
            <div id="indicator" style={styleSheet.indicator}></div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
