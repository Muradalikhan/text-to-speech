import React, { useState, createContext } from "react";
import "./App.css";
import Bulb from "./component/bulb";
import Dictaphone from "./component/speechToText";
import Video from "./component/Video";
import videoSrc from "./assets/video1.mp4";

export const ThemeContext = createContext();

function App() {
  const [switchOn, setSwitchOn] = useState(false);
  const [bulbBreak, setBulbBreak] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App" id={theme}>
        <h1>Speech to text</h1>
        <Dictaphone
          setSwitchOn={setSwitchOn}
          setBulbBreak={setBulbBreak}
          setPlayVideo={setPlayVideo}
        />
        <div className="flex-box">
          <Bulb switchOn={switchOn} Break={bulbBreak} />
          <Video src={videoSrc} width="40%" controls playVideo={playVideo} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
