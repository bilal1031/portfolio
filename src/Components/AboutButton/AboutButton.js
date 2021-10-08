import colors from "../../Colors/colors";
import "./aboutButton.css";

const AboutButton = ({ title }) => {
  const handleButtonClick = (e) => {
    console.log(e);
  };
  return (
    <div style={{ position: "relative" }}>
      <div className="buttonDiv upper" onClick={handleButtonClick}>
        <span
          style={{
            color: colors.white,
            fontFamily: "PT Sans Caption",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          {title + "  "}
        </span>
      </div>
      <div className="buttonDiv lower"></div>
    </div>
  );
};

export default AboutButton;
