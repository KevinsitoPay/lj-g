"use client";

import dynamic from "next/dynamic";
import "plyr-react/plyr.css";
import "./VideoPlayer.scss";

// Importa Plyr dinámicamente sin SSR
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

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
