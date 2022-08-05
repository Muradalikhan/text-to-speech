import React, { useContext, useEffect,useCallback } from "react";
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
    if (transcript !== "") {
      toast.success(transcript);
    }
  }, [transcript]);
  useEffect(() => {
    showMessage();
  }, [transcript, showMessage]);

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
      <p className="transcript">{transcript}</p>
    </div>
  );
};
export default Dictaphone;
