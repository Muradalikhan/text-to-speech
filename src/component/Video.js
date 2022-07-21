import React, { useEffect, useRef } from "react";
import thumbnail from "../assets/thumbnail.png";

const Video = ({ src, controls, width, playVideo }) => {
  const videoRef = useRef();
  const playTheVideo = () => {
    videoRef.current?.play();
  };
  const pauseTheVideo = () => {
    videoRef.current?.pause();
  };
  if (playVideo) {
    playTheVideo();
  } else {
    pauseTheVideo();
  }
  useEffect(() => {
    videoRef.current?.load();
  }, [src]);
  return (
    <div style={{ width: width || 240 }}>
      <video
        ref={videoRef}
        width="100%"
        loop
        controls={controls || false}
        poster={thumbnail}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
