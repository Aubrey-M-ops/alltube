import React, { useState, useRef, useEffect } from "react";
import VideoPlayer from "@components/VideoPlayer";
import ImageChapter from "@components/Chapters";
import IntroArea from "@components/IntroArea";

const VideoContainer = ({ video }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const videoPlayerRef = useRef(null);

  const handleSeek = (time) => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(time);
    }
  };

  useEffect(() => {
    if (video?.duration) {
      setVideoDuration(video.duration);
    }
  }, [video]);

  return (
    <div className="video-page-container">
      <div 
        className="video-player-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ImageChapter
          isVisible={isHovered}
          currentTime={currentTime}
          onSeek={handleSeek}
          videoDuration={videoDuration}
        />
        <VideoPlayer
          ref={videoPlayerRef}
          videoItem={video}
          onTimeUpdate={setCurrentTime}
          onDuration={setVideoDuration}
        />
      </div>
      <IntroArea />
    </div>
  );
};

export default VideoContainer;