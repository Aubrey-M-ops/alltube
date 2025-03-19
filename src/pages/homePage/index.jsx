import React from "react";
import "./index.scss";

import HomeVideoCard from "@components/HomeVideoCard";

import { video_data } from "data/VideoData";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page-card-content">
        {video_data.map((item, index) => (
          <HomeVideoCard videoData={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
