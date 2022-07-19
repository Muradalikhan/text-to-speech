import React from "react";
import bulbOn from "../assets/bulb-on.jpg";
import bulbOff from "../assets/bulb-off.jpg";
import bulbBreak from "../assets/bulb-break.jpg";

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
