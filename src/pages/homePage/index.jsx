import React from "react";
import "./index.scss";

import HomeVideoCard from "@components/HomeVideoCard";

const video_data = [
  {
    video_screenshot_url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar_url: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    video_title: "Video Title",
    video_description: "Here is the video description"
  },
  {
    video_screenshot_url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar_url: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    video_title: "Video Title",
    video_description: "Here is the video description"
  },
  {
    video_screenshot_url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar_url: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    video_title: "Video Title",
    video_description: "Here is the video description"
  },
  {
    video_screenshot_url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar_url: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    video_title: "Video Title",
    video_description: "Here is the video description"
  },
  {
    video_screenshot_url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar_url: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    video_title: "Video Title",
    video_description: "Here is the video description"
  },
  {
    video_screenshot_url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar_url: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    video_title: "Video Title",
    video_description: "Here is the video description"
  },
  {
    video_screenshot_url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar_url: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    video_title: "Video Title",
    video_description: "Here is the video description"
  },
  {
    video_screenshot_url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar_url: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    video_title: "Video Title",
    video_description: "Here is the video description"
  },
  {
    video_screenshot_url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar_url: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    video_title: "Video Title",
    video_description: "Here is the video description"
  },
  {
    video_screenshot_url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar_url: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    video_title: "Video Title",
    video_description: "Here is the video description"
  },
  {
    video_screenshot_url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar_url: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    video_title: "Video Title",
    video_description: "Here is the video description"
  },
  {
    video_screenshot_url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar_url: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    video_title: "Video Title",
    video_description: "Here is the video description"
  }
];

const HomePage = () => {
  return (
    <div className="home-page">
      {
        video_data.map((item, index) => (
          <HomeVideoCard video_screenshot_url={item.video_screenshot_url} avatar_url={item.avatar_url} video_title={item.video_title} video_description={item.video_description} />
        ))
      }
    </div>
  );
};

export default HomePage;
