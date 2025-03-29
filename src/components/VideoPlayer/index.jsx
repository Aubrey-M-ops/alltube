import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import DPlayer from "dplayer";
import YouTube, { YouTubeProps } from 'react-youtube';
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

  let videoRendered = false;
  let seekTime = 5;

  const vids_less_5_min = [5];
  const vids_less_15_min = [5, 10, 20];
  const vids_less_1_h = [5, 10, 20, 30];
  const vids_more_1_h = [5, 10, 20, 30, 60];

  let vids_seek_option = vids_less_5_min;
  let vids_seek_index = 0;

  useEffect(() => {
    if (!playerRef.current || !videoItem?.videoUrl) return;

    try {
      const dp = new DPlayer({
        lang: 'en',
        container: playerRef.current,
        autoplay: true,
        hotkey: false,
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

    // Auto-pausing
    dp.on('fullscreen', () => {
      dp.pause();
    });

    dp.on('fullscreen_cancel', () => {
      dp.pause();
    });

    /*
    dp.on('volumechange', () => {
      dp.pause();
    });
    */

    dp.on('canplay', () => {
      if (dp.video.duration < 300) {
        vids_seek_option = vids_less_5_min;
      } else if (dp.video.duration < 900) {
        vids_seek_option = vids_less_15_min;
      } else if (dp.video.duration < 3600) {
        vids_seek_option = vids_less_1_h;
      } else {
        vids_seek_option = vids_more_1_h;
      }

      // Just for debugging
      vids_seek_option = vids_more_1_h;

      document.getElementById('incSeekTime').removeAttribute("disabled");
      document.getElementById('incSeekTime').classList.add('activate-button');

      if (vids_seek_index === 0) {
        document.getElementById('decSeekTimeBtn').setAttribute("disabled", "disabled");
        document.getElementById('decSeekTimeBtn').classList.remove('activate-button');
      }

      if (vids_seek_index === vids_seek_option.length - 1) {
        document.getElementById('incSeekTime').setAttribute("disabled", "disabled");
        document.getElementById('incSeekTime').classList.remove('activate-button');
      }

      /*
      if (!videoRendered) {
        dp.play();
        videoRendered = !videoRendered;
      }
        */
    });

    window.addEventListener('scroll', () => {
      dp.pause();
    });

    document.getElementById('search-bar').addEventListener('click', () => {
      dp.pause();
    });

    (document.getElementsByClassName('dplayer-icon dplayer-setting-icon'))[0].addEventListener('click', () => {
      dp.pause();
    });

    // Seek Time
    let setting_panel = (document.getElementsByClassName('dplayer-setting-origin-panel'))[0];
    let seektime_setting_tracker = document.createElement("div");
    seektime_setting_tracker.setAttribute("id", "seektime-setting-tracker");
    seektime_setting_tracker.innerHTML = `<span>Seek Time</span> <button id='decSeekTimeBtn' class='activate-button'>-</button> <span id='seektime-value' class='seek-value-label'>${vids_less_5_min[0]} sec</span> <button id='incSeekTime' class='activate-button'>+</button>`
    setting_panel.prepend(seektime_setting_tracker);

    // Initially disable the seek button
    document.getElementById('decSeekTimeBtn').setAttribute("disabled", "disabled");
    document.getElementById('decSeekTimeBtn').classList.remove('activate-button');
    document.getElementById('incSeekTime').setAttribute("disabled", "disabled");
    document.getElementById('incSeekTime').classList.remove('activate-button');

    const updateSeekTime = () => {
      document.getElementById('seektime-value').innerHTML = `${vids_seek_option[vids_seek_index]} sec`;
    }

    document.getElementById('decSeekTimeBtn').addEventListener('click', () => {
      if (vids_seek_option.length === 1) {
        return;
      }

      if (vids_seek_index > 0) {
        vids_seek_index -= 1;

        document.getElementById('incSeekTime').removeAttribute("disabled");
        document.getElementById('incSeekTime').classList.add('activate-button');

        if (vids_seek_index === 0) {
          document.getElementById('decSeekTimeBtn').setAttribute("disabled", "disabled");
          document.getElementById('decSeekTimeBtn').classList.remove('activate-button');
        }
      }

      updateSeekTime();
    });

    document.getElementById('incSeekTime').addEventListener('click', () => {
      if (vids_seek_option.length === 1) {
        return;
      }

      if (vids_seek_index < (vids_seek_option.length - 1)) {
        vids_seek_index += 1;

        document.getElementById('decSeekTimeBtn').removeAttribute("disabled");
        document.getElementById('decSeekTimeBtn').classList.add('activate-button');

        if (vids_seek_index === vids_seek_option.length - 1) {
          document.getElementById('incSeekTime').setAttribute("disabled", "disabled");
          document.getElementById('incSeekTime').classList.remove('activate-button');
        }
      }

      updateSeekTime();
    });

    document.addEventListener('keydown', (e) => {
      if (!dp || document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          dp.seek(dp.video.currentTime - vids_seek_option[vids_seek_index]);
          break;

        case 'ArrowRight':
          e.preventDefault();
          dp.seek(dp.video.currentTime + vids_seek_option[vids_seek_index]);
          break;

      }
    });


    return () => {
        if (videoElementRef.current) {
          videoElementRef.current.removeEventListener(
            "timeupdate",
            handleTimeUpdate
          );
          videoElementRef.current.removeEventListener(
            "loadedmetadata",
            handleLoadedMetadata
          );
        }
        dp.destroy();
      };
    } catch (error) {
      console.error("Video player initialization error:", error);
    }
  }, [videoItem.videoUrl, onTimeUpdate, onDuration]);

  return videoItem?.videoUrl ? (
    <div ref={playerRef} className="video-player-container" style={{ width: "100%", height: "500px" }} />
  ) : null;
});

export default VideoPlayer;
