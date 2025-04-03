import React, { useState } from "react";
import DownLeft from "@assets/images/down-left.png";
import DownRight from "@assets/images/down-right.png"
import CategorizingWindowButton from "@assets/images/CategorizingWindowButton.png"
import CategorizingWindow from "@components/CategorizingWindow";
import "./index.scss";

const IntroArea = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 打开弹窗
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 关闭弹窗
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="intro-area">
      <div className="image-container">
        <img className="intro-image-left" src={DownLeft} alt="Left" />
        <button className="overlay-button" onClick={openModal}>
          <img src={CategorizingWindowButton} alt="Button Icon" className="button-icon" />
        </button>
      </div>
      <img className="intro-image-right" src={DownRight} alt="Right" />
      {isModalOpen && <CategorizingWindow onClose={closeModal} />}
    </div>
  );
};

export default IntroArea;
