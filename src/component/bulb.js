import React, { useContext } from "react";
import bulbOn from "../assets/bulb-on.png";
import bulbOff from "../assets/bulb-off.png";
import { ThemeContext } from "../App";

const Bulb = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <img
      className="bulb-img"
      src={theme === "dark" ? bulbOn : bulbOff}
      width={theme === "dark" ?"270px":"300px"}
      height={theme === "dark" ?"360px":"400px"}
      alt="bulb-img"
    />
  );
};

export default Bulb;
