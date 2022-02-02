import colors from "../../Colors/colors";
import "./aboutButton.css";

const AboutButton = ({ title }) => {
  const handleButtonClick = (e) => {
    console.log(e);
    document.getElementById("about-div").style.transform =
      window.innerWidth > 768 ? "translateY(-91%)" : "translateX(100%) ";
  };
  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
        userSelect: "none",
        height: "85px",
      }}
    >
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
