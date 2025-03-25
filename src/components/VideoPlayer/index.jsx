import React, { useEffect, useRef } from "react";
import DPlayer from "dplayer";
import YouTube, { YouTubeProps } from 'react-youtube';
import "./index.scss";

const VideoPlayer = ({ videoItem }) => {

  const playerRef = useRef(null);
  let seekTime = 5;

  useEffect(() => {
    if (!playerRef.current) return;

    const dp = new DPlayer({
      container: playerRef.current,
      autoplay: true,
      hotkey: false,
      video: {
        url: videoItem.videoUrl,
      },
    });

    // Auto-pausing
    dp.on('fullscreen', () => {
      dp.pause();
    });

    dp.on('fullscreen_cancel', () => {
      dp.pause();
    });

    dp.on('volumechange', () => {
      dp.pause();
    })

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
    seektime_setting_tracker.innerHTML = `<span>Seek Time</span> <span id='decSeekTimeBtn'>-</span> <span id='seektime-value'>${seekTime} sec</span> <span id='incSeekTime'>+</span>`
    setting_panel.prepend(seektime_setting_tracker);

    const updateSeekTime = () => {
      document.getElementById('seektime-value').innerHTML = `${seekTime} sec`;
    }

    document.getElementById('decSeekTimeBtn').addEventListener('click', () => {
      if (seekTime > 5) {
        seekTime -= 5;
      }

      updateSeekTime();
    });

    document.getElementById('incSeekTime').addEventListener('click', () => {
      if (seekTime < 60) {
        seekTime += 5;
      }

      updateSeekTime();
    });

    document.addEventListener('keydown', (e) => {
      if (!dp || document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          dp.seek(dp.video.currentTime - seekTime);
          break;

        case 'ArrowRight':
          e.preventDefault();
          dp.seek(dp.video.currentTime + seekTime);
          break;

      }
    });

    return () => dp.destroy();
  }, []);



  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();

  }


  const onMultitasking = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();

  }



  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  return <div ref={playerRef} style={{ width: "100%", height: "500px" }} />;


  // return <YouTube videoId="bKQ36GjaBo8" opts={opts} onReady={onPlayerReady} />;
};

export default VideoPlayer;
// ::before