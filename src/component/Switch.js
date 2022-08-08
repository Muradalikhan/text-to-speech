import React from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
import Switch from "react-switch";
const ThemeSwitch = ({handleChecked,checked}) => {
  return (
    <Switch
      onChange={handleChecked}
      checked={checked}
      checkedIcon={<BsSun fontSize="20px" className="checkedIcon" />}
      uncheckedIcon={<BsMoonStars fontSize="18px" className="checkedIcon" />}
      offColor="#223"
      onColor="#14C9E4"
    />
  );
};

export default ThemeSwitch;
