import React, { useEffect, useRef } from "react";
import DPlayer from "dplayer";
import "./index.scss";

const VideoPlayer = ({ videoItem }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current) return;

    const dp = new DPlayer({
      container: playerRef.current,
      autoplay: true,
      video: {
        url: videoItem.videoUrl,
      },
    });

    return () => dp.destroy();
  }, []);

  return <div ref={playerRef} style={{ width: "100%", height: "500px" }} />;
};

export default VideoPlayer;
