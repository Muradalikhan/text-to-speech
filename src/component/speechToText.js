import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = ({ setSwitchOn, setBulbBreak, setPlayVideo }) => {
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
  if (transcript === "switch on") {
    setSwitchOn(true);
    setBulbBreak(false);
  } else if (transcript === "switch off") {
    setBulbBreak(false);
    setSwitchOn(false);
  } else if (transcript === "break") {
    setSwitchOn(false);
    setBulbBreak(true);
  } else if (transcript === "play") {
    setPlayVideo(true);
    setBulbBreak(false);
    setSwitchOn(false);
    resetTranscript()
  } else if (transcript === "pause") {
    setPlayVideo(false);
    setBulbBreak(false);
    setSwitchOn(false);
    resetTranscript()
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p className="h-20">{transcript}</p>
    </div>
  );
};
export default Dictaphone;
