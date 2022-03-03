import React from "react";
import { images } from "../../constants";

const textStyle = {
  color: "var(--color-white)",
  fontFamily: "var(--font-base)",
  fontWeight: "700",
  letterSpacing: "0.04em",
  textTransform: "capitalize",
  // lineHeight: "29.9px",
  // fontSize: "23px",
};

const SubHeading = (props) => (
  <div style={{ marginBottom: "1rem" }}>
    <p style={textStyle}>{props.title}</p>
    <img src={images.spoon} alt="la cuisine" />
  </div>
);

export default SubHeading;
