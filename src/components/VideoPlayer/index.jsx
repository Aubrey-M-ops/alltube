import React, { useEffect, useRef } from "react";
import DPlayer from "dplayer";
import YouTube, { YouTubeProps } from 'react-youtube';
import "./index.scss";

const VideoPlayer = ({ videoItem }) => {

  const playerRef = useRef(null);
  let seekTime = 5;

  const vids_less_5_min = [5];
  const vids_less_15_min = [5, 10, 20];
  const vids_less_1_h = [5, 10, 20, 30];
  const vids_more_1_h = [5, 10, 20, 30, 60];

  let vids_seek_option = [];
  let vids_seek_index = 0;

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
    });

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


      if (vids_seek_index === 0) {
        document.getElementById('decSeekTimeBtn').setAttribute("disabled", "disabled");
        document.getElementById('decSeekTimeBtn').classList.remove('activate-button');
      }

      if (vids_seek_index === vids_seek_option.length - 1) {
        document.getElementById('incSeekTime').setAttribute("disabled", "disabled");
        document.getElementById('incSeekTime').classList.remove('activate-button');
      }


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