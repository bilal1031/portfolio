import React from "react";
import colors from "../../Colors/colors";
import Wrapper from "../../Components/Wrapper/Wrapper";

export default function ContactPage(props) {
  return (
    <Wrapper color={colors.secondary} translate={props.translate} {...props}>
      {" "}
      <h1>Contact</h1>
    </Wrapper>
  );
}
