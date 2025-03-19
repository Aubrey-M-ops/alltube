import React from "react";
import classNames from "classnames";
import { Avatar, Card } from "antd";
const { Meta } = Card;
import "./index.scss";

const HomeVideoCard = ({ videoData }) => {
  const {
    video_screenshot_url,
    video_id,
    avatar_url,
    video_title,
    video_description,
  } = videoData;
  return (
    <Card
      className={classNames("homepage-card", {
        "homepage-card-ad": videoData.isAd,
      })}
      variant="borderless"
      cover={<img alt="video_screenshot" src={video_screenshot_url} />}
      onClick={() => {
        window.location.href = `/video?video_id=${video_id}`;
      }}
    >
      <Meta
        avatar={<Avatar src={avatar_url} />}
        title={video_title}
        description={video_description}
      />
    </Card>
  );
};

export default HomeVideoCard;
