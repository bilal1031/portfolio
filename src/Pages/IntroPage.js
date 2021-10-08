import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import colors from "../Colors/colors";
import AboutButton from "../Components/AboutButton/AboutButton";
import "./introPage.css";

const IntroPage = () => {
  const h1 = {
    color: colors.white,
    fontSize: 48,
    fontFamily: "PT Sans Caption",
    alignSelf: "start",
  };
  return (
    <Container
      fluid
      style={{
        backgroundColor: colors.primary,
        width: "100%",
        height: 720,
      }}
    >
      <Row>
        <Col fluid>
          <Container className="helloDiv">
            <Row>
              <Col>
                <h1 style={h1}>Hello!</h1>
                <h1 style={h1}>
                  I'm
                  <span style={{ color: colors.secondary }}>
                    {" "}
                    Muhmmad Bilal
                  </span>
                </h1>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <AboutButton title="About Me" />
              </Col>
            </Row>
          </Container>
        </Col>

        <Col className="">
          <Container className="helloDiv ">
            <Row>
              <Col>
                <h1 style={h1}>Hello!</h1>
                <h1 style={h1}>
                  I'm
                  <span style={{ color: colors.secondary }}>
                    {" "}
                    Muhmmad Bilal
                  </span>
                </h1>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <AboutButton title="About Me" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default IntroPage;
