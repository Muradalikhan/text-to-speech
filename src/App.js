import React, { useState, createContext } from "react";
import "./App.css";
import Bulb from "./component/bulb";
import Dictaphone from "./component/speechToText";
import Video from "./component/Video";
import videoSrc from "./assets/video1.mp4";
import Switch from "react-switch";
import { BsSun, BsMoonStars } from "react-icons/bs";

export const ThemeContext = createContext();

function App() {
  const [playVideo, setPlayVideo] = useState(false);
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState("light");
  const handleChecked = () => {
    setChecked((prev) => !prev);
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <h1>Speech to text</h1>
        <Dictaphone setPlayVideo={setPlayVideo} setChecked={setChecked} />
        <Switch
          onChange={handleChecked}
          checked={checked}
          checkedIcon={<BsSun fontSize="20px" className="checkedIcon" />}
          uncheckedIcon={
            <BsMoonStars fontSize="18px" className="checkedIcon" />
          }
          offColor="#223"
          onColor="#14C9E4"
        />
        <div className="flex-box">
          <Bulb />
          <Video src={videoSrc} width="40%" controls playVideo={playVideo} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
