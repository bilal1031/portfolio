import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import colors from "../../Colors/colors";
import AboutButton from "../../Components/AboutButton/AboutButton";
import Wrapper from "../../Components/Wrapper/Wrapper";
import "./introPage.css";
import profilebg from "../../assets/profilebg.png";
import { githubLogo, linkedinLogo, gmailLogo, profile } from "../../assets";
import SocialIcon from "../../Components/SocialIcon/SocialIcon";

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
          <Container className="helloDiv col-12 col-xxl-6">
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
            <Row className="mt-5" style={{ width: "340px" }}>
              <Col className="">
                <AboutButton title="About Me" />
              </Col>
            </Row>
            <Row className="mt-5" style={{ width: "340px" }}>
              <div className="d-flex flex-row justify-content-between">
                <SocialIcon
                  src={githubLogo}
                  onClick={() => window.open("https://github.com/bilal1031")}
                  alt="bilal-github"
                />
                <SocialIcon
                  src={linkedinLogo}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/muhammad-bilal-1667381b6/"
                    )
                  }
                  alt="bilal-linkedin"
                />
                <SocialIcon
                  src={gmailLogo}
                  onClick={() => {
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=bilalnaeem166@gmail.com"
                    );
                  }}
                  alt="bilal-gmail"
                />
              </div>
            </Row>
          </Container>
        </Col>

        <Col className="col-12 col-md-5 col-lg-6 d-flex justify-content-xl-center align-items-center">
          <Row
            className=""
            // style={{ position: "relative", overflow: "hidder" }}
          >
            <img src={profile} alt="profile" />
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
