import React, { useContext } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import { ThemeContext } from "../App";

const Dictaphone = ({ setPlayVideo, setChecked }) => {
  const { setTheme } = useContext(ThemeContext);
  const commands = [
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  if (transcript === "play") {
    setPlayVideo(true);
    resetTranscript();
  } else if (transcript === "pause") {
    setPlayVideo(false);
    resetTranscript();
  } else if (transcript === "light mode") {
    setTheme("light");
    setChecked(false);
    resetTranscript();
  } else if (transcript === "dark mode") {
    setTheme("dark");
    setChecked(true);
    resetTranscript();
  }

  return (
    <div className="flex">
      <p>
        {listening ? (
          <BsFillMicFill
            fontSize="30px"
            onClick={SpeechRecognition.stopListening}
            className="mic-icon"
          />
        ) : (
          <BsFillMicMuteFill
            fontSize="30px"
            className="mic-icon"
            onClick={startListening}
          />
        )}
      </p>

      <button className="btn" onClick={resetTranscript}>
        Reset
      </button>
      <p className="transcript">{transcript}</p>
    </div>
  );
};
export default Dictaphone;
