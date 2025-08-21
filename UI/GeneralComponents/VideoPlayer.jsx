"use client";


import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import "./VideoPlayer.scss";

const VideoPlayer = ({ src, poster }) => {
  const videoSource = {
    type: "video",
    sources: [
      {
        src,
        type: "video/mp4",
      },
    ],
    poster,
  };

  const options = {
    controls: [
      "rewind",
      "play-large",
      "play", 
      "fast-forward",
      "progress",
      "current-time",
      "pip",
      "mute",
      "airplay",
      "volume",
      "settings",
      "fullscreen",
    ],
    autoplay: false,

  };

  return <Plyr source={videoSource} options={options} />;
};

export default VideoPlayer;

