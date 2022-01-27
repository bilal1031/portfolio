import React, { useState, createRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import colors from "../../Colors/colors";
import Indicator from "../Indicator/Indicator";

const NavBar = (props) => {
  require("./navbar.css");
  const home = createRef();
  const [indicatorLocation, setIndicatorLocation] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(64);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "ContactMe", href: "contactme" },
  ];

  const translatePage = (current) => {
    const index = navItems.findIndex(function (item, i) {
      return item.name === current;
    });
    let items = [0, 0, 0, 0];
    items[index] = 1;
    props.setIsActive(items);
    console.log(props.isActive);

    // navItems.forEach((e) => {
    //   const element = document.getElementById(e.href).style;
    //   element.left = "100vw";
    //   element.transform = "translateX(0%)";
    // });
    // const bg = document.getElementById("appDiv").style;
    // bg.backgroundColor === "rgb(22, 33, 62)"
    //   ? (bg.backgroundColor = colors.secondary)
    //   : (bg.backgroundColor = colors.primary);
    // const element = document.getElementById(current).style;
    // console.log(element.offsetLeft + " " + current);
    // element.transform = "translateX(-100%)";
  };
  const handleNavClick = (e) => {
    setIndicatorLocation(e.target.offsetLeft);
    setIndicatorWidth(e.target.clientWidth);
    console.log(window.innerWidth);
    if (window.innerWidth > 768) {
      translatePage(e.target.innerHTML);
    }
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: colors.primary,
        }}
        expand="lg"
      >
        <Container>
          <Navbar.Brand>Muhammad Bilal</Navbar.Brand>
          <Nav className="float-end" style={{ position: "relative" }}>
            {navItems.map((e) => (
              <Nav.Link ref={home} onClick={handleNavClick}>
                {e.name}
              </Nav.Link>
            ))}

            <Indicator
              indicatorLocation={indicatorLocation}
              indicatorWidth={indicatorWidth}
            />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
