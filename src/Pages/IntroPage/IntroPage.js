import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import colors from "../../Colors/colors";
import AboutButton from "../../Components/AboutButton/AboutButton";
import Wrapper from "../../Components/Wrapper/Wrapper";
import "./introPage.css";
import profilebg from "../../assets/profilebg.png";

const IntroPage = (props) => {
  const h1 = {
    color: colors.white,
    fontSize: 48,
    fontFamily: "PT Sans Caption",
    alignSelf: "start",
  };
  return (
    <Wrapper color={colors.primary} translate={props.translate} {...props}>
      <Row className="d-flex flex-column flex-md-row">
        <Col className="col-12 col-md-7 col-lg-6 d-flex flex-column align-items-xl-center">
          <Container className="helloDiv col-12 col-xl-6">
            <Row>
              <Col className="">
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
              <Col className="">
                <AboutButton title="About Me" />
              </Col>
            </Row>
          </Container>
        </Col>

        <Col className="col-12 col-md-5 col-lg-6 d-flex justify-content-xl-center align-items-center">
          <Row className="">
            <img src={profilebg} />
          </Row>
          {/* <Container className="helloDiv ">
            <Row>
              <Col>
              </Col>
            </Row>
          </Container> */}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default IntroPage;
