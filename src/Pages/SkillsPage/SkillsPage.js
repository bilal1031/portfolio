import React from "react";
import colors from "../../Colors/colors";
import Wrapper from "../../Components/Wrapper/Wrapper";

export default function SkillsPage(props) {
  return (
    <Wrapper color={colors.secondary} translate={props.translate} {...props}>
      <h1>Skill</h1>
    </Wrapper>
  );
}
