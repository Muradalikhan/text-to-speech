import React from "react";
import bulbOn from "../assets/bulb-on.png";
import bulbOff from "../assets/bulb-off.png";
import bulbBreak from "../assets/bulb-break.png";

const Bulb = ({ switchOn, Break }) => {
  return (
    <img
      src={switchOn ? bulbOn : Break ? bulbBreak : bulbOff}
      width="300px"
      height="400px"
      alt="bulb-img"
    />
  );
};

export default Bulb;
