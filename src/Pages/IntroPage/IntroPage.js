import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import colors from "../../Colors/colors";
import AboutButton from "../../Components/AboutButton/AboutButton";
import Wrapper from "../../Components/Wrapper/Wrapper";
import "./introPage.css";

const IntroPage = (props) => {
  const h1 = {
    color: colors.white,
    fontSize: 48,
    fontFamily: "PT Sans Caption",
    alignSelf: "start",
  };
  return (
    <Wrapper color={colors.primary} translate={props.translate} {...props}>
      <Row>
        <Col>
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
    </Wrapper>
  );
};

export default IntroPage;
