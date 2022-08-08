import React, { useState, createContext } from "react";
import { ToastContainer } from "react-toastify";
import Dictaphone from "./component/SpeechToText";
import videoSrc from "./assets/video1.mp4";
import Video from "./component/Video";
import Bulb from "./component/Bulb";
import waveUp from "./assets/wave-blue-up.svg";
import waveUpOrange from "./assets/wave-orange-up.svg";
import waveDown from "./assets/wave-blue.svg";
import waveDownOrange from "./assets/wave-orange.svg";
import ThemeSwitch from "./component/Switch";
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
        <img src={theme==="light"?waveUp:waveUpOrange} alt="blob" className="img-up" />
        <div className="content">
          <h1 className="heading">Speech to text</h1>
          <div className="flex">
            <Dictaphone setPlayVideo={setPlayVideo} setChecked={setChecked} />
            <ThemeSwitch handleChecked={handleChecked} checked={checked} />
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
            <li>light mode</li>
          </ul>
        </div>
        <ToastContainer autoClose={1000} />
        <img src={theme==="light"?waveDown:waveDownOrange} alt="blob" className="img-down" />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
