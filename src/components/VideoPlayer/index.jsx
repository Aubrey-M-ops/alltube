import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import DPlayer from "dplayer";
import "./index.scss";

const VideoPlayer = forwardRef(({ videoItem, onTimeUpdate, onDuration }, ref) => {
  const playerRef = useRef(null);
  const playerInstanceRef = useRef(null);
  const videoElementRef = useRef(null);

  useImperativeHandle(ref, () => ({
    seekTo: (time) => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.seek(time);
      }
    }
  }));

  useEffect(() => {
    if (!playerRef.current || !videoItem?.videoUrl) return;

    try {
      const dp = new DPlayer({
        container: playerRef.current,
        autoplay: true,
        video: {
          url: videoItem.videoUrl,
        },
      });

      playerInstanceRef.current = dp;
      videoElementRef.current = dp.video;

      const handleTimeUpdate = () => {
        onTimeUpdate?.(dp.video.currentTime);
      };

      const handleLoadedMetadata = () => {
        onDuration?.(dp.video.duration);
      };

      // Use native event listeners
      if (videoElementRef.current) {
        videoElementRef.current.addEventListener('timeupdate', handleTimeUpdate);
        videoElementRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      }

      return () => {
        if (videoElementRef.current) {
          videoElementRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          videoElementRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
        dp.destroy();
      };
    } catch (error) {
      console.error("Video player initialization error:", error);
    }
  }, [videoItem.videoUrl, onTimeUpdate, onDuration]);

  return videoItem?.videoUrl ? (
    <div ref={playerRef} className="video-player-container" />
  ) : null;
});

export default VideoPlayer;