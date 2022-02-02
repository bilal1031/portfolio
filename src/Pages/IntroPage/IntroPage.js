import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import colors from "../../Colors/colors";
import AboutButton from "../../Components/AboutButton/AboutButton";
import Wrapper from "../../Components/Wrapper/Wrapper";
import "./introPage.css";
import {
  githubLogo,
  linkedinLogo,
  gmailLogo,
  profile,
  aboutTop,
  aboutBottom,
  aboutProfile,
} from "../../assets";
import SocialIcon from "../../Components/SocialIcon/SocialIcon";
import SlideButton from "../../Components/SlideButton/SlideButton";
import AboutSiders from "../../Components/AboutSideDesign/AboutSiders";

const IntroPage = (props) => {
  const h1 = {
    color: colors.white,
    fontSize: 48,
    fontFamily: "PT Sans Caption",
    alignSelf: "start",
  };
  return (
    <>
      <Wrapper
        color={colors.primary}
        className="front"
        translate={props.translate}
        {...props}
      >
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
              <Row className="mt-5 social-row">
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
            <Row>
              <img src={profile} alt="profile" />
            </Row>
          </Col>
        </Row>
      </Wrapper>
      {/* -------------------------About Me-------------------------- */}
      <Wrapper id="about-div" color={colors.secondary} className="about-div">
        <div className="col-9 col-md-3 align-self-center">
          <img
            src={aboutProfile}
            style={{ width: "100%", height: "100%", alignSelf: "center" }}
          />
        </div>
        <p
          style={{
            marginLeft: "20%",
            marginRight: "20%",
            marginTop: 50,
            fontSize: "1.3rem",
          }}
        >
          Im a Computer Science student currently enrolled in COMSATS in 6th
          semeters. I am a passinaote programmers and love to know more about
          the latest technology
        </p>
        <AboutSiders src={aboutTop} tpos={0} rpos={0} />
        <AboutSiders src={aboutBottom} bpos={0} lpos={0} />
        <SlideButton
          onClick={() =>
            (document.getElementById("about-div").style.transform =
              window.innerWidth > 768 ? "translateY(91%)" : "translateX(-100%)")
          }
        >
          <i
            className={
              window.innerWidth > 768
                ? "fas fa-angle-down"
                : "fas fa-angle-left"
            }
            style={{ color: "white", fontSize: 24 }}
          ></i>
        </SlideButton>
      </Wrapper>
    </>
  );
};

export default IntroPage;
