import React, { useContext, useEffect, useCallback } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import { toast } from "react-toastify";
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

  const showMessage = useCallback(() => {
    transcript !== "" && toast.info(transcript);
    const timer = setTimeout(() => resetTranscript(), 1000);
    return () => clearInterval(timer);
  }, [transcript, resetTranscript]);
  useEffect(() => {
    showMessage();
  }, [showMessage]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  if (transcript === "play") {
    setPlayVideo(true);
  } else if (transcript === "pause") {
    setPlayVideo(false);
  } else if (transcript === "light mode") {
    setTheme("light");
    setChecked(false);
  } else if (transcript === "dark mode") {
    setTheme("dark");
    setChecked(true);
  }

  return (
    <div>
      <div className="flex">
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
        <button className="btn" onClick={resetTranscript}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Dictaphone;
