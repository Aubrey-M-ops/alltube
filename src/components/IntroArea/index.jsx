import React from "react";
import DownLeft from "@assets/images/down-left.png";
import DownRight from "@assets/images/down-right.png"
import "./index.scss";

const IntroArea = () => {
  return (
    <div className="intro-area">
      <img className="intro-image-left" src={DownLeft} alt="Left" />
      <img className="intro-image-right" src={DownRight} alt="Right" />
    </div>
  );
};

export default IntroArea;
