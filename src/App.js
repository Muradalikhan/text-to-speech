import React, { useState, createContext } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import Dictaphone from "./component/speechToText";
import videoSrc from "./assets/video1.mp4";
import Video from "./component/Video";
import Bulb from "./component/bulb";
import Switch from "react-switch";
import waveUp from "./assets/wave-blue-up.svg";
import waveDown from "./assets/wave-blue.svg";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

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
        <img src={waveUp} alt="blob" className="img-up" />
        <div className="content">
          <h1 className="heading">Speech to text</h1>
          <div className="flex">
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
          </div>
          <div className="flex-box">
            <Bulb />
            <Video src={videoSrc} width="40%" controls playVideo={playVideo} />
          </div>
        </div>
        <div className="commands">
          <h3>Commands</h3>
          <ul>
            <li>Clear</li>
            <li>play</li>
            <li>pause</li>
            <li>dark mode</li>
            <li>dark mode</li>
          </ul>
        </div>
        <ToastContainer autoClose={1000} />
        <img src={waveDown} alt="blob" className="img-down" />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
