import React from "react";
import "./index.scss";

import HomeVideoCard from "@components/HomeVideoCard";

import { video_data } from "data/VideoData";

const HomePage = () => {
  return (
    <div className="home-page">
      {video_data.map((item, index) => (
        <HomeVideoCard
          video_screenshot_url={item.video_screenshot_url}
          avatar_url={item.avatar_url}
          video_title={item.video_title}
          video_description={item.video_description}
        />
      ))}
    </div>
  );
};

export default HomePage;
